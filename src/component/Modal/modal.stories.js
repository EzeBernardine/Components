import React, { useState, useRef } from "react";

import Modal from "./index";

const Modal_ = ({ noHeader, title }) => {
  const modalRef = useRef(); // the modal ref
  const [callModal, setCallModal] = useState(false); // handles the calling and removal of the modal

  const showModal = () => {
    setCallModal(true);

    /**
     * preventBodyScroll is a useImperativeHandle method in the modal component
     * that ensures that the overflow in the body is retured once the modal button is clicked.
     * This ensures that the only scrollable content on the page becomes the modal content.
     */
    modalRef.current.preventBodyScroll();
  };

  const hideModal = () => {
    setCallModal(false);

    /**
     * addBodyScroll is a useImperativeHandle method in the modal component
     * that ensures that the overflow in the body is set to hidden once the modal button is clicked.
     */
    modalRef.current.addBodyScroll();
  };
  return (
    <>
      <button onClick={() => showModal()}>Open</button>
      <Modal
        show={callModal}
        handleClose={hideModal}
        ref={modalRef}
        noHeader={noHeader}
        title={title}
      >
        {callModal ? (
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            assumenda consectetur iusto? Rem, exercitationem illo perspiciatis
            veritatis omnis soluta! At nulla unde nisi explicabo tempora
            voluptates, dolor perferendis eaque quam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            assumenda consectetur iusto? Rem, exercitationem illo perspiciatis
            veritatis omnis soluta! At nulla unde nisi explicabo tempora
            voluptates, dolor perferendis eaque quam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            assumenda consectetur iusto? Rem, exercitationem illo perspiciatis
            veritatis omnis soluta! At nulla unde nisi explicabo tempora
            voluptates, dolor perferendis eaque quam.
          </span>
        ) : null}
      </Modal>
    </>
  );
};

export default {
  title: "Modal",
  component: Modal_,
};

const Template = (args) => <Modal_ {...args} />;

export const _Modal = Template.bind({});
_Modal.args = {
  noHeader: false,
  title: "Modal Title",
};
