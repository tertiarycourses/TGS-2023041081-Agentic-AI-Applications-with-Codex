# Lab 03 - Attack Types and Defensive Recognition

## Objectives

- Recognize common attack types.
- Match attacks to defensive controls.
- Practice safe incident reporting language.

## Steps

### Step 1 - Match malware types

| Attack | Description |
| --- | --- |
| Virus | Attaches to files and spreads when executed |
| Worm | Self-replicates across networks |
| Trojan horse | Appears legitimate but performs malicious action |
| Ransomware | Encrypts data and demands payment |
| Spyware | Collects information without permission |
| Rootkit | Hides malicious activity with privileged access |
| Backdoor | Hidden access path |

### Step 2 - Match application attacks

| Attack | Defensive idea |
| --- | --- |
| SQL injection | Parameterized queries and input validation |
| XSS | Output encoding and input validation |
| Buffer overflow | Secure coding and patching |
| Brute force | MFA, lockout, monitoring |
| MITM | TLS, certificate validation, VPN |
| DoS | Rate limiting and filtering |

### Step 3 - Analyze social engineering

Scenario:

```text
A caller says they are from IT and asks for your MFA code to fix your account.
```

Answer:

1. What is suspicious?
2. What should the user do?
3. What should be reported?

### Step 4 - Write a defensive alert note

Use:

```text
Observation:
Possible attack type:
Evidence:
Immediate action:
Escalation:
```

### Step 5 - Map attacks to controls

Add controls for:

- Keylogger.
- Logic bomb.
- Zero day.
- Adware.
- Polymorphic virus.

## Deliverable

Submit:

- Malware matching table.
- Application attack table.
- Social engineering answers.
- Defensive alert note.
- Attack-to-control mapping.

