import React from "react";
import MenuIcon from "./";

export default {
  title: "MenuIcon",
  component: MenuIcon,
};

const Template = (args) => <MenuIcon {...args} />;

export const Menu_Icon = Template.bind({});
Menu_Icon.args = {
  showMore: false,
};
