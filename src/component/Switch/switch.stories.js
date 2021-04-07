// YourComponent.stories.js

import React from "react";

import Switch from "./index";

//👇 This default export determines where your story goes in the story list

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const CustomSwitch = Template.bind({});

CustomSwitch.args = {
  initialState: true,
  color: "#de8430",
  click: (checked) => console.log(checked),
};
