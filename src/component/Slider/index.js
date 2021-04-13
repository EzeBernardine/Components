/*
 * component: ScrollingCards
 * author: Eze Bernardine May
 * Date: April 12th, 2021
 */

import React, { useState, useEffect } from "react";
import {
  Container,
  Layout,
  Content,
  ScrollRight,
  ScrollLeft,
  ArrowIconWrapper,
} from "./styles";
import {
  TiChevronLeft as LeftIcon,
  TiChevronRight as RightIcon,
} from "react-icons/ti";
import Proptypes from "prop-types";

const CardSlider = ({ children, ...props }) => {
  const cards = React.createRef();

  const [callScroll, setCallScroll] = useState(true); //controls if the layout willauto scroll
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft); // sets how far you have scrolled
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    ); //this is the entire width of the scrolling section
  };

  useEffect(() => {
    let slowInterval =
      callScroll &&
      setInterval(() => {
        try {
          const { scrollLeft } = cards.current;

          cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
            ? (cards.current.scrollLeft = 0)
            : (cards.current.scrollLeft += cards.current.clientWidth);
        } catch (err) {}
      }, 3000);

    /**
     * reset scrolleft and scrollMaxWidth values faster
     */
    let fastInterval = setInterval(() => {
      try {
        setScrollLeftValue(cards.current.scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );
      } catch (err) {}
    }, 500);

    return () => clearInterval(fastInterval) && clearInterval(slowInterval);
  });

  return (
    <Container
      {...props}
      onMouseEnter={() => setCallScroll(false)}
      onMouseLeave={() => setCallScroll(true)}
    >
      <Layout {...props}>
        <Content ref={cards} {...props}>
          {children}
          {/* takes already prepared cards */}
        </Content>
      </Layout>
      {!(scrollLeftMaxValue === scrollLeftValue) && (
        <ScrollLeft>
          <ArrowIconWrapper {...props} onClick={() => handleScroll("right")}>
            <RightIcon />
          </ArrowIconWrapper>
        </ScrollLeft>
      )}
      '
      {scrollLeftValue !== 0 && (
        <ScrollRight>
          <ArrowIconWrapper onClick={() => handleScroll("left")} {...props}>
            <LeftIcon />
          </ArrowIconWrapper>
        </ScrollRight>
      )}
    </Container>
  );
};
CardSlider.prototype = {
  bgColor: Proptypes.string,
  width: Proptypes.number,
  gap: Proptypes.string,
  cardWidth: Proptypes.string,
  cardBgColor: Proptypes.string,
  children: Proptypes.any,
};
export default CardSlider;
