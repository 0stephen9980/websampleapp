import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "react-modal";

const commonModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      testMethod: () => setIsOpen(true),
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
      <h1>WelCome</h1>
    </Modal>
  );
});

export default commonModal;
