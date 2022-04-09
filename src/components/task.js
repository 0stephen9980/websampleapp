import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import { FcEditImage } from "react-icons/fc";

export default class task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provider) => (
          <div
            ref={provider.innerRef}
            {...provider.draggableProps}
            onMouseEnter={this.props.onMouseEnter}
          >
            <div
              style={{ borderLeft: this.props.bordColor }}
              {...provider.dragHandleProps}
              className="tasks"
            >
              <div>
                <p>{this.props.task.id}</p>
                <p>{this.props.task.content}</p>
              </div>
              <div className="actionButtons">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FcEditImage
                    size={23}
                    onClick={() =>
                      this.props.modelRef.current.openModal(
                        false,
                        this.props.task,
                        null
                      )
                    }
                  />
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
