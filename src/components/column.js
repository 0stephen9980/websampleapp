import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AiOutlinePlus } from "react-icons/ai";
import "./column.css";
import Task from "./task";
import taskData from "../taskList";
import Modal from "react-modal";
import CommonModal from "./commonModal";

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

  componentDidMount() {
    for (var key in this.state.initialTaskData) {
      this.TotalTaskIds.push(key);
    }
  }

  addCard = () => {
    // var itemId = item["data-rbd-droppable-id"];
    // console.log(this.TotalTaskIds);
    this.modalRef.current.testMethod(this.state.isModelOpen);
    this.setState({
      isModelOpen: true,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.column.title}</h3>
        <div
          id={this.props.column.id}
          className="createCard"
          onClick={() => this.addCard()}
        >
          <AiOutlinePlus />
          <p>Create</p>
        </div>
        <CommonModal ref={this.modalRef} />
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
