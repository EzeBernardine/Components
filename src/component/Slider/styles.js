import styled from "styled-components";

export const ScrollingContainer = styled('div')`
  background: ${props => props.scrollOuterBg || "white"};
  width: 100%;
  position: relative;
  &:hover .scrollMoreMain_right,
  &:hover .scrollMoreMain_left {
    visibility: visible;
  }

  .main {
    width: ${props => props.scrollInnerWidth || "80%"};
    margin: auto;
  }

  .cardsContainer {
    display: flex;
    justify-content: "flex-start";
    overflow-x: scroll;
    align-items: stretch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding: ${props => props.scrollInnerPad || "20px 0"};
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
      height: 0;
      width: 0;
    }
    & > div {
      width: ${props => props.scrollCardWidth || "300px"};
      min-width: ${props => props.scrollCardWidth || "300px"};
      height: ${props => props.scrollCardHeight || "auto"};
      scroll-snap-align: start;
      background: ${props => props.scrollCardBg || " #eff0f5"};
      margin: ${props => props.scrollCardGaps || " 0 20px"};
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .scrollMoreMain_right {
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    right: 3%;
    visibility: hidden;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    @media (max-width: 800px) {
      height: 30px;
      width: 30px;
    }

    & > div {
      height: 100%;
      width: 100%;
      transition: 5s ease-in-out;
      border-radius: 50%;
      box-shadow: 0 3px 6px 1px rgba(32, 33, 36, 0.28);
      background: ${({ scrollArrowBg }) => scrollArrowBg || "#f5f6f7"};
      cursor: pointer;
    }
    & svg {
      fill: ${({ scrollArrowCol }) => scrollArrowCol || "#828386a3"};
      font-size: 2rem;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
  .scrollMoreMain_left {
    left: 3%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    visibility: hidden;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    @media (max-width: 800px) {
      height: 30px;
      width: 30px;
    }
    & > div {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      box-shadow: 0 3px 6px 1px rgba(32, 33, 36, 0.28);
      background: ${({ scrollArrowBg }) => scrollArrowBg || "#f5f6f7"};
      cursor: pointer;
    }
    & svg {
      fill: ${({ scrollArrowCol }) => scrollArrowCol || "#828386a3"};
      font-size: 2rem;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;
