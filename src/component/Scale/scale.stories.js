// YourComponent.stories.js

import React from "react";

import { RoundScale, BarScale } from "./index";

//👇 This default export determines where your story goes in the story list

export default {
  title: "Scale",
  component: [RoundScale, BarScale],
};

const Template = (args) => <RoundScale {...args} />;
const Bar = (args) => <BarScale {...args} />;

export const Round_Scale = Template.bind({});
export const Bar_Scale = Bar.bind({});

Round_Scale.args = {
  scale: {
    range: 80,
    name: "name",
  },
  baseColor: "black",
  color: "yellow",
  centerColor: "green",
  thickness: "95",
  noText: false,
  half: false,
  height: "200px",
  width: "200px",
};
Bar_Scale.args = {
  width: 300,
  height: 400,
  headBgColor: "#AEF2E5",
  rangeBgColor: "#00FFCCCF",
  bottomgColor: "#026854CF",
  scale: {
    range: 80,
    name: "Name",
  },
};
