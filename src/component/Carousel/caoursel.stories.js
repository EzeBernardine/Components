import React from "react";

import Carousel from "./index";
import { generateID } from "../../lib/generateID";

const Testimonials = [
  {
    test:
      "Wow! I never knew renting a home would be this easy. Thanks to Ulor.ng",
    name: "James, Blazers",
  },
  {
    test: "Wow! I never  this easy. Thanks to Ulor.ng",
    name: "James, Blazers",
  },
  {
    test:
      "Wow! I never knew renting a home would be this easy. Thanks to Ulor.ng",
    name: "James, Blazers",
  },
];

const Carousels = ({ indicatorPosition }) => {
  return (
    <Carousel carouselData={Testimonials} indicatorPosition={indicatorPosition}>
      {Testimonials.map(({ name, test }) => (
        <div key={generateID(12)}>
          <span>Testimonials</span>
          <h2>{test}</h2>
          <h3>{name}</h3>
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
  indicatorPosition: "82px auto 0",
};
