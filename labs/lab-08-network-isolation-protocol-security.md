# Lab 08 - Network Isolation and Protocol Security

## Objectives

- Explain common network isolation methods.
- Compare protocol security concepts.
- Build a secure port and protocol plan.

## Steps

### Step 1 - Define isolation methods

| Method | Purpose |
| --- | --- |
| Routing | Directs traffic between networks |
| DMZ | Isolates public-facing services |
| VLAN | Logical network separation |
| NAT/PAT | Address translation |
| VPN | Encrypted remote or site connection |
| IPsec | Secures IP traffic |
| Air gap | Physical or logical isolation |
| Honeynet | Decoy environment for observation |

### Step 2 - Place Contoso networks

| Segment | Purpose | Access rule |
| --- | --- | --- |
| Staff VLAN | Staff devices | Access internal services |
| Guest VLAN | Visitors | Internet only |
| Server VLAN | Internal services | Restricted access |
| DMZ | Public services | No direct database access |
| Admin VLAN | Administration | MFA and logging required |

### Step 3 - Protocol security table

| Protocol or concept | Security note |
| --- | --- |
| FTP | Prefer SFTP |
| HTTP | Prefer HTTPS |
| Telnet | Prefer SSH |
| DNSSEC | Helps validate DNS responses |
| Network sniffing | Captures traffic, must be authorized |
| Tunneling | Encapsulates one protocol inside another |

### Step 4 - Common ports

Complete:

| Service | Port |
| --- | --- |
| FTP | 21 |
| HTTP | 80 |
| HTTPS | 443 |
| DNS | 53 |
| RDP | 3389 |
| Telnet | 23 |
| SSH | 22 |
| LDAP | 389 |
| LDAPS | 636 |
| SNMP | 161 |
| SMTP | 25 |
| IMAP | 143 |
| SFTP | 22 |

### Step 5 - Create firewall rules

Write rules for:

1. Allow HTTPS from internet to public website.
2. Deny internet to internal server VLAN.
3. Allow staff to DNS resolver.
4. Deny guest Wi-Fi to staff VLAN.
5. Allow admin VLAN to management interfaces.

## Deliverable

Submit:

- Isolation method table.
- Segment access table.
- Protocol security table.
- Common ports table.
- Firewall rule examples.

