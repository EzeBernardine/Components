import React from "react";

import Carousels from "./index";
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
  {
    features:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo excepturi, fugiat eligendi doloremque saepe ratione consequuntur cupiditate, rerum nostrum veniam recusandae deserunt odit! Eveniet repellendus in enim inventore sequi?",
  },
];

export default {
  title: "Carousel",
  component: Carousels,
};

const Template = (args) => <Carousels {...args} />;

export const CardSlider = Template.bind({});
CardSlider.args = {
  bgColor: "#f6f6f6",
  width: 90,
  gap: "20px",
  cardWidth: "300px",
  cardBgColor: "#c5dbdb",
  children: cards.map(({ features }, idx) => (
    <div key={generateID(11)}>
      <h2>Major feature {idx}</h2>
      <p>{features}</p>
    </div>
  )),
};
