import React from "react";
import Dropdown from "./";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;
const data = [{ list: "CRK" }, { list: "Coding" }, { list: "Agriculture" }];

export const select = Template.bind({});
select.args = {
  initial: " Subjects",
  // weight: "bold",
  padding: "7px 15px",
  direction: "start",
  canClick: true,
  data: data,
  click: (selected) => console.log(selected),
};

export const showMore = Template.bind({});
showMore.args = {
  // weight: "bold",
  padding: "7px 15px",
  direction: "start",
  canClick: true,
  type: "showmore",
  data: data,
  click: (selected) => console.log(selected),
};
