/* Tour Availability Mini — browser-native, no framework, no dependencies */

/* --------------------------------------------------------------------------
   Tour configuration
   Two tours with different operating schedules to demonstrate Rule 4.
   Weekday integers: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday,
                     4=Thursday, 5=Friday, 6=Saturday
-------------------------------------------------------------------------- */

var TOURS = [
  {
    id: 'tour-001',
    name: 'Old Town Walking Tour',
    operatingDays: [2, 4, 6],
    blockedDates: ['2026-05-10', '2026-06-01'],
    maxCapacity: 10
  },
  {
    id: 'tour-002',
    name: 'Harbor Sunset Cruise',
    operatingDays: [5, 6, 0],
    blockedDates: ['2026-05-15', '2026-05-29'],
    maxCapacity: 15
  }
];

/* --------------------------------------------------------------------------
   Date helpers — local time only, no external library
-------------------------------------------------------------------------- */

var WEEKDAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

var MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function parseLocalDate(dateStr) {
  var parts = dateStr.split('-');
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

function todayLocal() {
  var n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

function formatDate(date) {
  return WEEKDAY_NAMES[date.getDay()] + ', ' +
    MONTH_NAMES[date.getMonth()] + ' ' +
    date.getDate() + ', ' +
    date.getFullYear();
}

/* --------------------------------------------------------------------------
   Availability rules — evaluated in fixed order per business-rules.md
-------------------------------------------------------------------------- */

function checkAvailability(tour, dateStr, partySize) {

  /* Rule 1 — Invalid party size */
  if (!Number.isInteger(partySize) || partySize < 1) {
    return {
      available: false,
      message: 'Please enter a valid number of people (minimum 1).'
    };
  }

  /* Rule 2 — Past date */
  var requested = parseLocalDate(dateStr);
  var today = todayLocal();
  if (requested < today) {
    return {
      available: false,
      message: 'This date has already passed. Please select today or a future date.'
    };
  }

  /* Rule 3 — Blocked date */
  if (tour.blockedDates.indexOf(dateStr) !== -1) {
    return {
      available: false,
      message: 'This date is not available. Please select a different date.'
    };
  }

  /* Rule 4 — Unavailable weekday */
  var weekday = requested.getDay();
  if (tour.operatingDays.indexOf(weekday) === -1) {
    var requestedName = WEEKDAY_NAMES[weekday];
    var operatingNames = tour.operatingDays.map(function (d) {
      return WEEKDAY_NAMES[d];
    }).join(', ');
    return {
      available: false,
      message: 'This tour does not operate on ' + requestedName +
        '. It runs on: ' + operatingNames + '.'
    };
  }

  /* Rule 5 — Capacity exceeded */
  if (partySize > tour.maxCapacity) {
    return {
      available: false,
      message: 'This tour has a maximum capacity of ' + tour.maxCapacity +
        ' people per session. Please reduce your party size.'
    };
  }

  /* All rules passed */
  return {
    available: true,
    message: 'This tour is available on ' + formatDate(requested) +
      ' for ' + partySize + ' people.'
  };
}

/* --------------------------------------------------------------------------
   DOM wiring — runs only after the document is ready
-------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

  var tourSelect = document.getElementById('tour-select');
  var dateInput = document.getElementById('date-input');
  var partySizeInput = document.getElementById('party-size');
  var checkBtn = document.getElementById('check-btn');
  var resultArea = document.getElementById('result');

  /* Populate tour dropdown from configuration */
  TOURS.forEach(function (tour) {
    var option = document.createElement('option');
    option.value = tour.id;
    option.textContent = tour.name;
    tourSelect.appendChild(option);
  });

  /* Check button handler */
  checkBtn.addEventListener('click', function () {
    var tourId = tourSelect.value;
    var dateStr = dateInput.value;
    var partySizeRaw = partySizeInput.value;

    /* Require tour selection before running any rule */
    if (!tourId) {
      showResult('Please select a tour.', false);
      return;
    }

    /* Require date input before running any rule */
    if (!dateStr) {
      showResult('Please select a date.', false);
      return;
    }

    var tour = null;
    for (var i = 0; i < TOURS.length; i++) {
      if (TOURS[i].id === tourId) {
        tour = TOURS[i];
        break;
      }
    }

    /* Parse party size — NaN and decimals both fail Rule 1 */
    var partySize = partySizeRaw === '' ? NaN : Number(partySizeRaw);

    var result = checkAvailability(tour, dateStr, partySize);
    showResult(result.message, result.available);
  });

  function showResult(message, available) {
    resultArea.textContent = message;
    resultArea.className = 'result ' + (available ? 'available' : 'unavailable');
    resultArea.hidden = false;
  }

});
