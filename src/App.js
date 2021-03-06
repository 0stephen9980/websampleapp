import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./taskList";
import Column from "./components/column";
import Modal from "react-modal";

Modal.setAppElement("#root");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialData.tasks,
      columns: initialData.columns,
      columnSortOrder: initialData.columnSortOrder,
      count: 0,
      showTask: true,
    };
    this.TaskIds = [];
  }

  componentDidMount() {
    for (var key in this.state.tasks) {
      this.TaskIds.push(key);
    }
    this.state.count = this.TaskIds.length;
  }

  onDragEnd = (result) => {
    const { destination, source, combine, draggableId } = result;

    // console.log(combine, destination, source);

    const start = this.state.columns[source.droppableId];

    if (combine && source) {
      //just removing the dragging item
      const combineTaskIds = Array.from(start.taskIds);
      //getting the task that is about to be merged
      const taskToRemove = this.state.tasks[combineTaskIds[source.index]];
      //removing the reference from the list
      combineTaskIds.splice(source.index, 1);
      //getting the task to be merged with
      const taskToMerge = this.state.tasks[combine.draggableId];
      var text = taskToMerge.content.concat(
        "---------merge text---------",
        taskToRemove.content
      );

      const newTask = {
        ...taskToMerge,
        content: text,
      };

      delete this.state.tasks[combine.draggableId];

      this.setState((prevState) => ({
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [newTask.id]: newTask,
        },
      }));
      const newColumn = {
        ...start,
        taskIds: combineTaskIds,
      };

      this.setState((prevState) => ({
        ...prevState,
        columns: { ...prevState.columns, [newColumn.id]: newColumn },
      }));
      return;
    }
    if (destination && source && combine == null) {
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const finish = this.state.columns[destination.droppableId];

      if (start === finish) {
        const newtaskIds = Array.from(start.taskIds);
        newtaskIds.splice(source.index, 1);
        newtaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newtaskIds,
        };

        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
          },
        };

        this.setState(newState);
        return;
      }

      const newStartIds = Array.from(start.taskIds);
      newStartIds.splice(source.index, 1);

      const newStart = {
        ...start,
        taskIds: newStartIds,
      };

      const newFinishIds = Array.from(finish.taskIds);
      newFinishIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        taskIds: newFinishIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      this.setState(newState);
      return;
    }
  };

  saveTask = (isNew, task, textValue, columId) => {
    if (isNew) {
      this.state.count++;
      const newTask = {
        id: `task-${this.state.count}`,
        content: textValue,
      };

      const taskIds = this.state.columns[columId].taskIds.push(newTask.id);

      this.setState((prevState) => ({
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [newTask.id]: newTask,
        },
      }));
      textValue = null;
    } else {
      var id = task.id;
      const editTask = this.state.tasks[id];

      const newTask = {
        ...editTask,
        content: textValue,
      };

      delete this.state.tasks[id];

      this.setState((prevState) => ({
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [newTask.id]: newTask,
        },
      }));

      textValue = null;
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>WelCome</h1>
          <div
            className="showTaskCol"
            onClick={() => this.setState({ showTask: !this.state.showTask })}
          >
            <h3>Show Tasks</h3>
          </div>
          {this.state.showTask ? (
            <div>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="dragArea">
                  {this.state.columnSortOrder.map((columId, index) => {
                    const column = this.state.columns[columId];
                    const tasks = column.taskIds.map(
                      (taskId) => this.state.tasks[taskId]
                    );

                    return (
                      <Column
                        key={index}
                        column={column}
                        tasks={tasks}
                        initialData={this.state.tasks}
                        saveTask={this.saveTask}
                      />
                    );
                  })}
                </div>
              </DragDropContext>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
