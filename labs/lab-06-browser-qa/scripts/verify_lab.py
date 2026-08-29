#!/usr/bin/env python3
from pathlib import Path
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
required = [root / "README.md", root / "starter" / "taskboard.py", root / "starter" / "test_taskboard.py",
            root / "solution" / "taskboard.py", root / "solution" / "expected-output.json",
            root / "evidence" / "checklist.md"]
missing = [str(p.relative_to(root)) for p in required if not p.exists() or p.stat().st_size == 0]
if missing:
    print("MISSING:", ", ".join(missing))
    raise SystemExit(1)
result = subprocess.run([sys.executable, "-m", "unittest", "-v", "test_taskboard.py"], cwd=root / "solution")
raise SystemExit(result.returncode)
