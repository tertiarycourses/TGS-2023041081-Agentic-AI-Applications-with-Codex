# Lab 07 - Wireless Security and Network Protection Devices

## Objectives

- Compare wireless security controls.
- Explain firewalls, IDS, IPS, SIEM, filtering, blacklisting, and whitelisting.
- Build a protection device diagram.

## Steps

### Step 1 - Wireless security checklist

```text
[ ] Use strong wireless encryption
[ ] Change default administrator password
[ ] Separate guest Wi-Fi from internal network
[ ] Avoid SSID names that reveal sensitive information
[ ] Disable WPS if not required
[ ] Review firmware updates
[ ] Restrict router admin interface
```

### Step 2 - Compare wireless settings

| Setting | Security note |
| --- | --- |
| WEP | Legacy weak encryption |
| WPA2/WPA3 | Stronger wireless encryption |
| SSID | Network name, not a security boundary |
| MAC filtering | Weak by itself |
| OOBE default config | Must be changed before production use |

### Step 3 - Compare protection devices

| Device or system | Purpose |
| --- | --- |
| Hardware firewall | Network boundary filtering |
| Software firewall | Host-level filtering |
| Stateful firewall | Tracks connection state |
| Stateless firewall | Applies rules without connection context |
| IDS | Detects suspicious activity |
| IPS | Blocks or prevents suspicious activity |
| SIEM | Collects and correlates security events |

### Step 4 - Filtering concepts

Explain:

- Content filtering.
- Blacklisting.
- Whitelisting.
- Security baseline.

### Step 5 - Draw security architecture

Include:

```text
Internet
-> Firewall
-> DMZ
-> Internal VLAN
-> Guest Wi-Fi VLAN
-> IDS/IPS monitoring point
-> SIEM/log collection
```

## Deliverable

Submit:

- Wireless checklist.
- Wireless settings table.
- Protection device table.
- Filtering concept notes.
- Security architecture diagram.

