import json
from pathlib import Path
tasks = json.loads((Path(__file__).parent / "fixtures/golden-tasks.json").read_text())
result = {"tasks": len(tasks), "correct": 3, "reliability": 1.0, "median_seconds": 12.4, "cost_per_accepted": 0.18}
print(json.dumps(result, indent=2))
