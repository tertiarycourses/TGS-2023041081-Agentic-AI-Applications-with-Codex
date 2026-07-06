# Lab 06 - Audit Policies, Log Files, and Encryption

## Objectives

- Define auditing and log review.
- Explain non-repudiation.
- Compare encryption uses and certificate concepts.

## Steps

### Step 1 - Choose audit events

Complete:

| Event | Why audit it |
| --- | --- |
| Failed logins | Detect brute-force attempts |
| Successful admin logins | Track privileged access |
| Permission changes | Support accountability |
| File deletion | Investigate data loss |
| Policy changes | Detect risky configuration changes |

### Step 2 - Review sample log

Use the sample log in [tools.md](tools.md).

Answer:

1. Which events are suspicious?
2. Which user account is involved?
3. What happened after the successful admin login?
4. Should this be escalated?

### Step 3 - Define log storage plan

Write:

```text
Log source:
Retention period:
Access allowed to:
Integrity protection:
Review frequency:
Escalation owner:
```

### Step 4 - Compare encryption use cases

| Use case | Protection |
| --- | --- |
| File and folder encryption | Protect selected files |
| Drive encryption | Protect data if device is lost |
| VPN encryption | Protect traffic over untrusted networks |
| HTTPS | Protect browser communication |
| Certificate | Validate identity and public key |
| TPM | Hardware support for key protection |

### Step 5 - Explain key pairs

Write:

```text
A public key can be shared, while a private key must be protected. Certificates help others trust that a public key belongs to the expected identity.
```

## Deliverable

Submit:

- Audit event table.
- Sample log answers.
- Log storage plan.
- Encryption use case table.
- Key pair explanation.

