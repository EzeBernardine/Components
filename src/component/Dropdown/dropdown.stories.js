import React from "react";
import { DropdownModal } from "./";

export default {
  title: "Dropdown",
  component: DropdownModal,
};

const Template = (args) => <DropdownModal {...args} />;

export const select = Template.bind({});
const data = [{ list: "CRK" }, { list: "Coding" }, { list: "Agriculture" }];

select.args = {
  initial: " Subjects",
  weight: "bold",
  //   padding:'0',
  end: false,
  start: true,
  canClick: true,
  dropDownData: data,
  click: (selected) => console.log(selected),
};
