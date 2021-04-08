import React from "react";

import { RoundScale, BarScale } from "./index";

export default {
  title: "Scale",
  component: [RoundScale, BarScale],
};

const Template = (args) => <RoundScale {...args} />;
export const Round_Scale = Template.bind({});
Round_Scale.args = {
  scale: {
    range: 80,
    name: "name",
  },
  baseColor: "grey",
  color: "cyan",
  centerColor: "black",
  thickness: "95",
  noText: false,
  half: false,
  size: 200,
};

export const Half_Scale = Template.bind({});
Half_Scale.args = {
  scale: {
    range: 80,
    name: "Physics",
  },
  baseColor: "grey",
  color: "cyan",
  centerColor: "black",
  thickness: "95",
  noText: false,
  half: true,
  heisizeght: 200,
};

const Bar = (args) => <BarScale {...args} />;
export const Bar_Scale = Bar.bind({});
Bar_Scale.args = {
  width: 300,
  height: 400,
  topColor: "#AEF2E5",
  middleColor: "#00FFCCCF",
  bottomColor: "#026854CF",
  scale: {
    range: 80,
    name: "Javascript",
  },
};
