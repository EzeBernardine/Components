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

const Carousels = ({ indicatorPosition, activeColor, duration }) => {
  return (
    <Carousel
      carouselData={Testimonials}
      indicatorPosition={indicatorPosition}
      activeColor={activeColor}
      duration={duration}
    >
      {Testimonials.map(({ name, test }) => (
        <div key={generateID(12)} style={{ backgroundColor: "#a1c7a1" }}>
          <span>You can style this section dynamically</span>
          <h2>{test}</h2>
        </div>
      ))}
    </Carousel>
  );
};

export default {
  title: "Carousel",
  component: Carousels,
};

const Template = (args) => <Carousels {...args} />;

export const Slider = Template.bind({});
Slider.args = {
  indicatorPosition: "0 auto",
  activeColor: "red",
  duration: 5000,
};
