# Lab 04 - Operating System Hardening and Patch Management

## Objectives

- Build a client and server hardening checklist.
- Explain separation of services and attack surface reduction.
- Review patch and update evidence.

## Steps

### Step 1 - Create hardening checklist

```text
[ ] Install security updates
[ ] Enable host firewall
[ ] Enable endpoint protection
[ ] Remove unused software
[ ] Disable unused services
[ ] Use standard user accounts for daily work
[ ] Require admin elevation for privileged tasks
[ ] Enable disk encryption where required
[ ] Enable logging
```

### Step 2 - Explain separation of services

Complete:

| Design | Risk |
| --- | --- |
| Web app and database on same server | One compromise may expose both |
| Separate web and database servers | Better isolation |
| Separate admin workstation | Reduces exposure of privileged activity |

### Step 3 - Review update status

On your own device, find:

```text
Operating system update status:
Application update concern:
Endpoint protection status:
Firewall status:
```

Do not share account names or private device details.

### Step 4 - Explain Windows concepts

Write one sentence each:

- Group Policy.
- `gpupdate`.
- `gpresult`.
- User Account Control.
- Software restriction policy.

### Step 5 - Secure DNS update concept

Explain why only authorized devices should update DNS records.

## Deliverable

Submit:

- Hardening checklist.
- Separation of services table.
- Update status summary.
- Windows concept notes.
- Secure DNS update explanation.

