import React from "react";

import Switch from "./index";

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const _Switch = Template.bind({});

_Switch.args = {
  initialState: true,
  click: (checked) => console.log(checked),
};
