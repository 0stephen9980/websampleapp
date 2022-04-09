import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AiOutlinePlus } from "react-icons/ai";
import "./column.css";
import Task from "./task";
import taskData from "../taskList";

export default class column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: true,
      initialTaskData: props.initialData,
    };
    this.cardElement = React.createRef();
    this.NewCardElement = React.createRef();
    this.TotalTaskIds = [];
  }

  componentDidMount() {
    for (var key in this.state.initialTaskData) {
      this.TotalTaskIds.push(key);
    }
  }

  addCard = (item, tasks) => {
    var itemId = item["data-rbd-droppable-id"];
    console.log(this.TotalTaskIds);
    this.cardElement.current.style.display = "none";
  };
  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.column.title}</h3>
        <Droppable
          droppableId={this.props.column.id}
          task={this.props.column.title}
          isCombineEnabled
        >
          {(provider, snapshot) => (
            <div
              ref={provider.innerRef}
              {...provider.droppableProps}
              className="droppableHeight"
            >
              <div
                id={this.props.column.id}
                ref={this.cardElement}
                className="createCard"
                onClick={() =>
                  this.addCard(provider.droppableProps, this.props.tasks)
                }
                style={{ display: this.state.isAdd ? "flex" : "none" }}
              >
                <AiOutlinePlus />
                <p>Create</p>
              </div>
              {this.props.tasks.map((task, index) => (
                <Task
                  key={task.id}
                  index={index}
                  bordColor={this.props.column.borderColor}
                  task={task}
                />
              ))}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
