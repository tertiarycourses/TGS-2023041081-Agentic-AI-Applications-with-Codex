# Lab 01 - Defense in Depth and Security Principles

## Objectives

- Explain core security principles.
- Identify attack surface and least privilege.
- Build a certification checklist.

## Steps

### Step 1 - Define core principles

| Principle | Meaning | Example |
| --- | --- | --- |
| Confidentiality | Protect data from unauthorized access | Encrypt confidential files |
| Integrity | Protect data from unauthorized change | Audit permission changes |
| Availability | Keep systems usable | Backups and redundant services |
| Non-repudiation | Actions can be traced to an identity | Signed logs or audit records |
| Least privilege | Give only required access | Standard user for daily work |
| Attack surface | Places an attacker can target | Open ports, exposed services, weak Wi-Fi |

### Step 2 - Identify layered controls

Create a defense-in-depth stack:

```text
Physical security
-> Identity and access
-> Endpoint hardening
-> Network firewall
-> Logging and monitoring
-> Backup and recovery
```

### Step 3 - Classify risk vocabulary

| Term | Example |
| --- | --- |
| Threat | Malware actor |
| Vulnerability | Missing patch |
| Risk | Malware exploiting the missing patch |
| Control | Patch management and endpoint protection |

### Step 4 - Identify IoT attack surfaces

List controls for devices such as cameras, smart TVs, or printers:

- Change default password.
- Update firmware.
- Place on separate VLAN or guest network.
- Disable unused services.
- Monitor unusual traffic.

### Step 5 - Create certification checklist

```text
[ ] Defense in depth and CIA
[ ] Physical security and policy types
[ ] Attack types and backups
[ ] OS hardening and patching
[ ] Authentication and permissions
[ ] Auditing and encryption
[ ] Wireless and protection devices
[ ] Network isolation and protocol security
[ ] Email, browser, and anti-malware protection
```

## Deliverable

Submit:

- Core principles table.
- Defense-in-depth stack.
- Risk vocabulary table.
- IoT attack surface controls.
- Certification checklist.

