import json
import tempfile
import unittest
from pathlib import Path
from taskboard import add_task, list_tasks

class TaskBoardTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.db = Path(self.tmp.name) / "tasks.json"
    def tearDown(self):
        self.tmp.cleanup()
    def test_add_and_list(self):
        add_task("Review diff", "high", self.db)
        add_task("Update notes", "low", self.db)
        self.assertEqual(2, len(list_tasks(path=self.db)))
    def test_priority_filter(self):
        add_task("Review diff", "high", self.db)
        add_task("Update notes", "low", self.db)
        self.assertEqual(["Review diff"], [x["title"] for x in list_tasks("high", self.db)])

if __name__ == "__main__":
    unittest.main()
