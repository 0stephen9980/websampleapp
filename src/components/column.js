import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import "./column.css";
import Task from "./task";

export default class column extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provider, snapshot) => (
            <div ref={provider.innerRef} {...provider.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={index} index={index} task={task} />
              ))}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
