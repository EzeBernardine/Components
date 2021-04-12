import React from "react";

import Carousel from "./index";
import { generateID } from "../../lib/generateID";

let cards = [
  {
    features:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo excepturi, fugiat eligendi doloremque saepe ratione consequuntur cupiditate, rerum nostrum veniam recusandae deserunt odit! Eveniet repellendus in enim inventore sequi?",
  },
  {
    features:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo excepturi, fugiat eligendi doloremque saepe ratione consequuntur cupiditate, rerum nostrum veniam recusandae deserunt odit! Eveniet repellendus in enim inventore sequi?",
  },
  {
    features:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo excepturi, fugiat eligendi doloremque saepe ratione consequuntur cupiditate, rerum nostrum veniam recusandae deserunt odit! Eveniet repellendus in enim inventore sequi?",
  },
];

const Carousels = () => {
  return (
    <>
      {cards.map(({ features }) => (
        <Carousel
          scrollCardWidth="100%"
          scrollOuterBg="white"
          scrollCardBg="white"
          autoScroll
        >
          <div className="feature-text" key={generateID(11)}>
            <h2>Major feature</h2>
            <p>{features}</p>
          </div>
        </Carousel>
      ))}
    </>
  );
};

export default {
  title: "Carousel",
  component: Carousels,
};

const Template = (args) => <Carousels {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  indicatorPosition: "0 auto",
  activeColor: "red",
  duration: 5000,
};
