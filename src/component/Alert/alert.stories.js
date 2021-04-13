import React from "react";
import Alert from "./";

export default {
  title: "Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: "info",
  duration: false,
  children: <span>Lorem ipsum</span>,
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  duration: false,
  children: (
    <span>
      Lorem ipsum тony ℓea Slice of pizza @tnylea · 17h Howdy friends! Over the
      weekend I finished V2 of my SAAS Starter Kit, Wave Man surfing Call me
      hand Written using @laravelphp and @tailwindcss , It's also now open
      source and on @ProductHunt ! If you could support me and give it an upvote
      that would be amazing Folded hands Thanks!
    </span>
  ),
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  duration: false,
  children: (
    <span>
      Lorem ipsum hand Written using @laravelphp and @tailwindcss , It's also
      now open source and on @ProductHunt ! If you could support me and give it
      an upvote
    </span>
  ),
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  duration: 7000,
  children: <span>Lorem ipsum</span>,
};
