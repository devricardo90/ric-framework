/* Service Request Mini — Vanilla JS, no framework, no CDN, no build step */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'srm_requests';

const STATUS = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

const STATUS_LABELS = {
  [STATUS.NEW]: 'New',
  [STATUS.IN_PROGRESS]: 'In Progress',
  [STATUS.DONE]: 'Done',
};

const CATEGORIES = [
  'IT',
  'HR',
  'Facilities',
  'Finance',
  'Other',
];

const PRIORITIES = [
  'Low',
  'Medium',
  'High',
];

// ---------------------------------------------------------------------------
// localStorage access — all reads and writes go through these two functions
// ---------------------------------------------------------------------------

function loadRequests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

// ---------------------------------------------------------------------------
// ID generation — timestamp + small random suffix to avoid collisions
// ---------------------------------------------------------------------------

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ---------------------------------------------------------------------------
// Populate select elements from constants
// ---------------------------------------------------------------------------

function populateSelects() {
  const categorySelect = document.getElementById('category');
  CATEGORIES.forEach(function (cat) {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  const prioritySelect = document.getElementById('priority');
  PRIORITIES.forEach(function (pri) {
    const option = document.createElement('option');
    option.value = pri;
    option.textContent = pri;
    prioritySelect.appendChild(option);
  });
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function validateForm(title, description, category) {
  const errors = {};
  if (!title.trim()) errors.title = 'Title is required.';
  if (!description.trim()) errors.description = 'Description is required.';
  if (!category) errors.category = 'Category is required.';
  return errors;
}

function showErrors(errors) {
  document.getElementById('title-error').textContent = errors.title || '';
  document.getElementById('description-error').textContent = errors.description || '';
  document.getElementById('category-error').textContent = errors.category || '';
}

function clearErrors() {
  showErrors({});
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

function renderRequests() {
  const requests = loadRequests();
  const list = document.getElementById('request-list');
  const emptyState = document.getElementById('empty-state');

  // Clear existing list items safely
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  if (requests.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  requests.forEach(function (req) {
    const li = document.createElement('li');
    li.className = 'request-item';
    li.dataset.id = req.id;

    // Header row: title + status badge
    const header = document.createElement('div');
    header.className = 'request-item-header';

    const titleEl = document.createElement('span');
    titleEl.className = 'request-title';
    titleEl.textContent = req.title;

    const badge = document.createElement('span');
    badge.className = 'status-badge status-' + req.status;
    badge.textContent = STATUS_LABELS[req.status] || req.status;

    header.appendChild(titleEl);
    header.appendChild(badge);

    // Meta: category, priority, date
    const meta = document.createElement('div');
    meta.className = 'request-meta';
    const metaParts = ['Category: ' + req.category];
    if (req.priority) metaParts.push('Priority: ' + req.priority);
    metaParts.push('Created: ' + new Date(req.createdAt).toLocaleString());
    meta.textContent = metaParts.join(' · ');

    // Description
    const desc = document.createElement('div');
    desc.className = 'request-description';
    desc.textContent = req.description;

    // Status change
    const statusRow = document.createElement('div');
    statusRow.className = 'status-change';

    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Change status:';

    const statusSelect = document.createElement('select');
    statusSelect.setAttribute('aria-label', 'Change status for ' + req.title);
    Object.entries(STATUS_LABELS).forEach(function (entry) {
      const val = entry[0];
      const label = entry[1];
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = label;
      if (val === req.status) opt.selected = true;
      statusSelect.appendChild(opt);
    });

    statusSelect.addEventListener('change', function () {
      handleStatusChange(req.id, statusSelect.value);
    });

    statusRow.appendChild(statusLabel);
    statusRow.appendChild(statusSelect);

    li.appendChild(header);
    li.appendChild(meta);
    li.appendChild(desc);
    li.appendChild(statusRow);

    list.appendChild(li);
  });
}

// ---------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const priority = document.getElementById('priority').value;

  const errors = validateForm(title, description, category);
  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }

  clearErrors();

  const newRequest = {
    id: generateId(),
    title: title.trim(),
    description: description.trim(),
    category: category,
    priority: priority || null,
    status: STATUS.NEW,
    createdAt: Date.now(),
  };

  const requests = loadRequests();
  requests.unshift(newRequest);
  saveRequests(requests);

  document.getElementById('request-form').reset();
  renderRequests();
}

function handleStatusChange(id, newStatus) {
  const requests = loadRequests();
  const index = requests.findIndex(function (r) { return r.id === id; });
  if (index === -1) return;
  requests[index].status = newStatus;
  saveRequests(requests);
  renderRequests();
}

function handleClearData() {
  if (!window.confirm('Remove all requests from local storage? This cannot be undone.')) {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  renderRequests();
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  populateSelects();
  renderRequests();
  document.getElementById('request-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('clear-btn').addEventListener('click', handleClearData);
});
