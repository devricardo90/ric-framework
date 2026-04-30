# Security Review Gate

**Project**: RIC Framework Quality Baseline

**Last Updated**: 2026-04-30

---

## Purpose

The Security Review Gate ensures that every product implemented under the RIC Framework follows minimum security standards, regardless of the stack's size or complexity.

---

## Minimum Security Rules

### 1. Secrets and Environment Variables
- **NEVER** commit API keys, passwords, tokens, or any sensitive credential to the repository.
- Use `.env` files (properly ignored by git) for local secrets.
- Protecting secrets is a non-negotiable safety mandate.

### 2. Authentication and Authorization
- Clearly define who can access which data.
- Simulated roles (for prototypes) must be explicitly documented as non-secure.
- Real products must use approved authentication providers.

### 3. Input Validation
- All data coming from the user or external sources must be validated at the boundary.
- Sanitize inputs to prevent common attacks (XSS, SQL Injection, etc.).

### 4. Data Protection
- Sensitive user data must be handled with care.
- Do not log sensitive data.
- Ensure data at rest and in transit is protected according to the project's needs.

### 5. Dependencies
- No external dependency can be added without Trigger approval.
- Approved dependencies must be audited for known vulnerabilities.

### 6. Database and Persistence
- Migrations and seeds must be versioned and reviewed.
- Access to the database must follow the principle of least privilege.

### 7. Frontend Exposure
- Do not expose internal logic, secrets, or administrative paths in the public frontend unless authorized.
- Assume any data sent to the client is readable by the user.

### 8. Admin and Permission Checks
- Critical actions must have explicit permission checks.
- Administrative paths must be protected by the approved security layer.

---

## Blocking Rule

Any critical security failure, secret leak, authorization bypass, unsafe sensitive data handling, or unapproved dependency **BLOCKS DONE**.

The task cannot be closed until the security issue is resolved and verified.

---

## Honest Limitation Rule (Stack Specific)

When the approved stack cannot provide real security, the documentation must say so explicitly.

**Example: localStorage**
- `localStorage` is not a secure database.
- It does not protect sensitive data from other scripts in the same origin.
- It does not replace authentication.
- It must not be presented as a secure production storage layer.

---

## Central Security Rule

No implementation task can be marked DONE without passing the Security Review Gate applicable to its scope.
