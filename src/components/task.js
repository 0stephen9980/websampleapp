import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

export default class task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provider) => (
          <div
            ref={provider.innerRef}
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            className="tasks"
          >
            <div className="taskBody">
              <a className="sideColor" />
              <div>
                <p>{this.props.task.id}</p>
                <p>{this.props.task.content}</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
