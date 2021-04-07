import React from "react";
import Alert from "./";

export default {
  title: "Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  duration: false,
  children: <span>Lorem ipsum</span>,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  duration: false,
  children: <span>Lorem ipsum</span>,
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  duration: 7000,
  children: <span>Lorem ipsum</span>,
};
