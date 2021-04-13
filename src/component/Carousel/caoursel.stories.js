import React from "react";

import Carousel from "./index";
import { generateID } from "../../lib/generateID";

const Testimonials = [
  {
    test: "Whello World",
  },
  {
    test: "Wow! I never knew this could be this easy.",
  },
  {
    test: "Do you know how to meme",
  },
];

export default {
  title: "Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const _carousel = Template.bind({});
_carousel.args = {
  carouselData: Testimonials,
  indicatorPosition: "0 auto",
  activeColor: "red",
  duration: 5000,
  children: Testimonials.map(({ name, test }) => (
    <div key={generateID(12)} style={{ backgroundColor: "#a1c7a1" }}>
      <span>You can style this section dynamically</span>
      <h2>{test}</h2>
    </div>
  )),
};
