import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./taskList";
import Column from "./components/column";

class App extends Component {
  state = initialData;

  onDragEnd = (result) => {
    console.log(result);
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>WelCome</h1>

          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="dragArea">
              {this.state.columnSortOrder.map((columId, index) => {
                const column = this.state.columns[columId];
                const tasks = column.taskIds.map(
                  (taskId) => this.state.tasks[taskId]
                );

                return <Column key={index} column={column} tasks={tasks} />;
              })}
            </div>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;
