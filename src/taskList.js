const tasklist = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbade" },
    "task-2": { id: "task-2", content: "Take out the garbade" },
    "task-3": { id: "task-3", content: "Take out the garbade" },
    "task-4": { id: "task-4", content: "Take out the garbade" },
    "task-5": { id: "task-5", content: "Take out the garbade" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do list 1",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "To do list 2",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "To do list 3",
      taskIds: [],
    },
  },
  columnSortOrder: ["column-1", "column-2", "column-3"],
};

export default tasklist;
