import React from "react";

import Modal from "./index";
// const modalRef = useRef(); // the modal ref

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const _Modal = Template.bind({});
_Modal.args = {
  show: true,
  handleClose: () => [],
  //   ref: modalRef,
  noHeader: false,
  title: "Modal Title",
  children: (
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda
      consectetur iusto? Rem, exercitationem illo perspiciatis veritatis omnis
      soluta! At nulla unde nisi explicabo tempora voluptates, dolor perferendis
      eaque quam.
    </span>
  ),
};
