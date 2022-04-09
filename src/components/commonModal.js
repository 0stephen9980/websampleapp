import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "react-modal";
import { MdOutlineSaveAlt } from "react-icons/md";
import { FcUndo } from "react-icons/fc";
import { motion } from "framer-motion";
// import initialData from "../taskList";

const commonModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [isNew, setIsNew] = useState(true);
  const [task, setTask] = useState(null);
  const [columnId, setColumnId] = useState(null);

  useImperativeHandle(ref, () => {
    return {
      openModal: (newTask, task, ColumnId) => {
        setIsNew(newTask);
        setTask(task);
        setColumnId(ColumnId);
        if (task) {
          setTextValue(task.content);
        }
        setIsOpen(true);
      },
    };
  });

  const modalStyles = {
    content: {
      width: "50vh",
      height: "50vh",
      left: "80vh",
      top: "20vh",
      borderRadius: 10,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyles}
    >
      <h1>{props.title}</h1>
      <div></div>
      <textarea
        placeholder="add text"
        className="textArea"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <div className="modalActionBtns">
        <div className="btnAlignment">
          <motion.div
            className="save"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdOutlineSaveAlt
              size={40}
              color="orange"
              onClick={() => {
                if (textValue) {
                  setIsOpen(false);
                  props.saveTask(isNew, task, textValue, columnId);
                } else {
                  alert("enter text or cancle");
                }
              }}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FcUndo size={40} onClick={() => setIsOpen(false)} />
          </motion.div>
        </div>
      </div>
    </Modal>
  );
});

export default commonModal;
