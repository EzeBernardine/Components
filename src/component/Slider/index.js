/*
 * component: ScrollingCards
 * author: Eze Bernardine May
 * Date: April 12th, 2021
 */

import React, { useState } from "react";
import { ScrollingContainer } from "./styles";
import { Flex } from "../Box/styles";
import {
  TiChevronLeft as LeftIcon,
  TiChevronRight as RightIcon,
} from "react-icons/ti";

const ScrollingDiv = ({
  children,
  scrollOuterBg,
  scrollInnerWidth,
  scrollInnerPad,
  scrollCardWidth,
  scrollCardHeight,
  scrollCardBg,
  scrollArrowBg,
  scrollArrowCol,
  scrollCardGaps,
}) => {
  const cards = React.createRef();

  const [callScroll, setCallScroll] = useState(true);
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft);
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    );
  };

  const mouseEvent = (event) => {
    event === "enter" && setCallScroll(false);
    event === "leave" && setCallScroll(true);
  };

  callScroll &&
    setInterval(() => {
      try {
        const { scrollLeft } = cards.current;

        setScrollLeftValue(scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );

        cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
          ? (cards.current.scrollLeft = 0)
          : (cards.current.scrollLeft += cards.current.clientWidth);
      } catch (err) {}
    }, 1000);

  return (
    <ScrollingContainer
      scrollOuterBg={scrollOuterBg}
      scrollInnerWidth={scrollInnerWidth}
      scrollInnerPad={scrollInnerPad}
      scrollCardWidth={scrollCardWidth}
      scrollCardHeight={scrollCardHeight}
      scrollCardBg={scrollCardBg}
      scrollCardGaps={scrollCardGaps}
      scrollArrowBg={scrollArrowBg}
      scrollArrowCol={scrollArrowCol}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
    >
      <div className="main">
        <div className="cardsContainer" ref={cards}>
          {/* takes already prepared cards */}
          {children}
        </div>
      </div>

      {scrollLeftValue !== 0 && (
        <Flex className="scrollMoreMain_left">
          <Flex onClick={() => handleScroll("left")}>
            <LeftIcon />
          </Flex>
        </Flex>
      )}

      {!(scrollLeftMaxValue === scrollLeftValue) && (
        <Flex className="scrollMoreMain_right">
          <Flex onClick={() => handleScroll("right")}>
            <RightIcon />
          </Flex>
        </Flex>
      )}
    </ScrollingContainer>
  );
};

export default ScrollingDiv;
