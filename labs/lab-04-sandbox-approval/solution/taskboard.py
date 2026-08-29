"""Small standard-library TaskBoard used by the Codex labs."""
from __future__ import annotations
import argparse
import json
from pathlib import Path

DEFAULT_DB = Path(__file__).with_name("tasks.json")

def load_tasks(path=DEFAULT_DB):
    if not path.exists():
        return []
    return json.loads(path.read_text(encoding="utf-8"))

def save_tasks(tasks, path=DEFAULT_DB):
    path.write_text(json.dumps(tasks, indent=2) + "\n", encoding="utf-8")

def add_task(title, priority="medium", path=DEFAULT_DB):
    tasks = load_tasks(path)
    task = {"id": len(tasks) + 1, "title": title, "priority": priority, "done": False}
    tasks.append(task)
    save_tasks(tasks, path)
    return task

def list_tasks(priority=None, path=DEFAULT_DB):
    tasks = load_tasks(path)
    return [task for task in tasks if priority is None or task["priority"] == priority]

def main(argv=None):
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    add = sub.add_parser("add")
    add.add_argument("title")
    add.add_argument("--priority", choices=["low", "medium", "high"], default="medium")
    ls = sub.add_parser("list")
    ls.add_argument("--priority", choices=["low", "medium", "high"])
    args = parser.parse_args(argv)
    if args.command == "add":
        print(json.dumps(add_task(args.title, args.priority)))
    else:
        print(json.dumps(list_tasks(args.priority), indent=2))

if __name__ == "__main__":
    main()
