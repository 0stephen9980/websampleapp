const tasklist = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      borderColor: "5px solid #bf2600",
    },
    "task-2": {
      id: "task-2",
      content: "Take out the garbage",
      borderColor: "5px solid #0052cc",
    },
    "task-3": {
      id: "task-3",
      content: "Take out the garbage",
      borderColor: "5px solid #0065ff",
    },
    "task-4": {
      id: "task-4",
      content: "Take out the garbage",
      borderColor: "5px solid #064",
    },
    "task-5": {
      id: "task-5",
      content: "Take out the garbage",
      borderColor: "5px solid #4c9aff",
    },
    "task-6": {
      id: "task-6",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      borderColor: "5px solid #4c9aff",
    },
    "task-7": {
      id: "task-7",
      content: "Take out the garbage",
      borderColor: "5px solid #4c9aff",
    },
    "task-8": {
      id: "task-8",
      content: "Take out the garbage",
      borderColor: "5px solid #4c9aff",
    },
    "task-9": {
      id: "task-9",
      content: "Take out the garbage",
      borderColor: "5px solid #4c9aff",
    },
    "task-10": {
      id: "task-10",
      content: "Take out the garbage",
      borderColor: "5px solid #4c9aff",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Start",
      borderColor: "5px solid #FFA500",
      taskIds: ["task-1", "task-2", "task-7", "task-8", "task-9"],
    },
    "column-2": {
      id: "column-2",
      title: "Progress",
      borderColor: "5px solid #00FFFF",
      taskIds: ["task-3", "task-4", "task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "Ready For Review",
      borderColor: "5px solid #b147ca",
      taskIds: ["task-10"],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      borderColor: "5px solid #00FF00",
      taskIds: ["task-6"],
    },
  },
  columnSortOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default tasklist;
