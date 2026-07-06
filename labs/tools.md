# Lab Tools and Setup

## Required Tools

- Web browser
- Text editor
- Spreadsheet tool
- diagrams.net
- PowerShell, Command Prompt, Terminal, or shell

## Optional Tools

- Windows Security
- Windows Event Viewer
- Browser security settings
- Local antivirus or anti-malware dashboard
- Router or Wi-Fi settings page for observation only

## Learner Folder

Create:

```text
pearson-network-security-labs/
|-- diagrams/
|-- worksheets/
|-- screenshots/
|-- logs/
`-- notes/
```

## Starter Assets

| Asset | Role | Security concern |
| --- | --- | --- |
| Staff laptop | Daily work | Patching, malware, local admin rights |
| File share | Stores internal files | Permissions and auditing |
| Guest Wi-Fi | Visitor access | Isolation from internal network |
| Firewall/router | Network boundary | Rules, logs, remote admin |
| Admin account | Privileged access | MFA, auditing, least privilege |
| Backup drive | Recovery | Encryption and restore testing |

## Sample Log

Use this sample in log-review labs:

```text
2026-07-06 09:10 LOGIN_SUCCESS user=trainer source=10.0.10.25
2026-07-06 09:20 LOGIN_FAILURE user=admin source=198.51.100.10
2026-07-06 09:21 LOGIN_FAILURE user=admin source=198.51.100.10
2026-07-06 09:22 LOGIN_FAILURE user=admin source=198.51.100.10
2026-07-06 09:23 LOGIN_SUCCESS user=admin source=198.51.100.10
2026-07-06 09:24 PERMISSION_CHANGE target=file-share by=admin
```

## Safety Rules

- Only inspect your own device or provided samples.
- Do not attack or scan third-party systems.
- Do not expose private logs, credentials, or account names in shared outputs.

