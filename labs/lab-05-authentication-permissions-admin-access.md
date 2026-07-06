# Lab 05 - Authentication, Permissions, and Administrative Access

## Objectives

- Plan MFA and password policies.
- Explain Run As, sudo, Kerberos, local users, and domain users.
- Compare file, folder, and share permissions.

## Steps

### Step 1 - Create MFA policy

```text
[ ] MFA required for admin accounts
[ ] MFA required for remote access
[ ] Backup method documented
[ ] MFA fatigue reporting process defined
[ ] Lost device process defined
```

### Step 2 - Create password policy

Write:

```text
Use long passphrases.
Block common passwords.
Do not reuse passwords.
Use a password manager where approved.
Reset passwords after suspected compromise.
```

### Step 3 - Explain administrative elevation

Complete:

| Method | Purpose |
| --- | --- |
| Run As | Run a task with another Windows account |
| sudo | Run privileged command on Linux or macOS |
| Secondary sign-on | Separate daily user from admin identity |
| Kerberos | Ticket-based authentication in domain environments |

### Step 4 - Permission scenario

Scenario:

```text
The Training folder should allow trainers to edit files, learners to read files, and guests to have no access.
```

Complete:

| Group | Permission |
| --- | --- |
| Trainers | Modify |
| Learners | Read |
| Guests | No access |
| Administrators | Full control |

### Step 5 - Inheritance and file movement

Answer:

1. What is permission inheritance?
2. What can happen when a file is copied to another folder?
3. Why can multiple group memberships create confusing access?
4. When might taking ownership be needed?

## Deliverable

Submit:

- MFA policy.
- Password policy.
- Administrative elevation table.
- Permission scenario table.
- Permission inheritance answers.

