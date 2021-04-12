/*
 * component: Slider
 * author: Eze Bernardine May
 * Date: May 16th, 2020
 */
import React, { useState, useEffect } from "react";
import {
  CarouselWrapper,
  CarouselContent,
  Navigator,
  Indicators,
} from "./styles";

const Carousel = ({
  duration = 7000,
  carouselData,
  indicatorPosition,
  activeColor,
  children,
}) => {
  const [card, setCard] = useState(0); //this takes care of the number of carousel cards
  const [pinned, setPinned] = useState(false); //this takes care of backward movement of the carousel

  useEffect(() => {
    /**
     * Forward movement ...
     * periodically change the content displayed by
     * 1. incrementing the value of the state by 1 after each interval.
     * 2. Setting the value of state to 0 once the state is same value
     * with the length of the array element being rendered.
     *
     * If pinned, the movement becomes backwards. the oposite of the algorithm kicks in
     */
    let interval = setInterval(() => {
      return pinned
        ? card === 0
          ? (setPinned(false), setCard(1))
          : setCard(card - 1)
        : card === carouselData.length - 1
        ? (setPinned(true), setCard(card - 1))
        : setCard(card + 1);
    }, duration);
    return () => clearInterval(interval);
  });

  return (
    <CarouselWrapper>
      <CarouselContent translateRate={card}>{children}</CarouselContent>

      <Navigator margin={indicatorPosition}>
        {carouselData.map((item, index) => (
          <Indicators
            type="button"
            key={index} //The key property should not be dynamic else, the transition effect wil not run. That is why I did not use generateID()
            onClick={() => setCard(index)}
            currentIndicator={card === index}
            activeColor={activeColor}
          ></Indicators>
        ))}
      </Navigator>
    </CarouselWrapper>
  );
};

export default Carousel;
