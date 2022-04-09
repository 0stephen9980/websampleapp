import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AiOutlinePlus } from "react-icons/ai";
import "./column.css";
import Task from "./task";
import taskData from "../taskList";
import Modal from "./commonModal";

export default class column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTaskData: props.initialData,
      isModelOpen: false,
    };
    this.TotalTaskIds = [];
    this.modalRef = React.createRef();
  }

  addCard = () => {
    // var itemId = item["data-rbd-droppable-id"];
    // console.log(this.TotalTaskIds);
    this.modalRef.current.openModal(true, null, this.props.column.id);
    this.setState({
      isModelOpen: true,
    });
  };

  handleMouseOver = (i) => {
    // console.log(i);
  };

  render() {
    return (
      <div className="container">
        <div className="containerHeader">
          <h3 className="title">{this.props.column.title}</h3>
          <div
            id={this.props.column.id}
            className="createCard"
            onClick={() => this.addCard()}
          >
            <AiOutlinePlus />
            <p className="createBtn">Create</p>
          </div>
        </div>
        <Modal
          ref={this.modalRef}
          title={this.props.column.title}
          saveTask={this.props.saveTask}
        />
        <Droppable
          droppableId={this.props.column.id}
          task={this.props.column.title}
          isCombineEnabled
        >
          {(provider, snapshot) => (
            <div ref={provider.innerRef} {...provider.droppableProps}>
              <div className="droppableHeight">
                {this.props.tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    index={index}
                    bordColor={this.props.column.borderColor}
                    task={task}
                    initialData={this.state.initialTaskData}
                    onMouseEnter={() => this.handleMouseOver(index)}
                    modelRef={this.modalRef}
                  />
                ))}
                {provider.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
