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
          >
            <div className="tasks" style={{ borderLeft: this.props.bordColor }}>
              <p>{this.props.task.id}</p>
              <p>{this.props.task.content}</p>
            </div>
            <div className="actionButtons"></div>
          </div>
        )}
      </Draggable>
    );
  }
}
