import React from "react";
import AlertComponent from "./";

export default {
  title: "Alert",
  component: AlertComponent,
};

const Template = (args) => <AlertComponent {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  showMore: false,
};
