import styled from "styled-components";
import { Flex } from "../Box/styles";

export const Container = styled("div")`
  background: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme ? theme.palette.primary.main : "white"};
  width: 100%;
  position: relative;
`;

export const Layout = styled("div")`
  width: ${(props) => props.width + "%" || "80%"};
  margin: auto;
`;

export const Content = styled("div")`
  display: flex;
  justify-content: "flex-start";
  overflow-x: hidden;
  align-items: stretch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  }
  & > * {
    width: ${({ cardWidth }) => cardWidth || "300px"};
    min-width: ${({ cardWidth }) => cardWidth || "300px"};
    height: auto;
    scroll-snap-align: start;
    background: ${({ cardBgColor, theme }) =>
      cardBgColor
        ? cardBgColor
        : theme
        ? theme.palette.primary.main
        : " #eff0f5"};
    margin: ${({ gap }) => gap || "0 20px"};
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ScrollRight = styled(Flex)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  right: 3%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;
export const ScrollLeft = styled(Flex)`
  left: 3%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;

export const ArrowIconWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 3px 6px 1px rgba(32, 33, 36, 0.28);
  background: #f5f6f7;
  cursor: pointer;
  svg {
    fill: #828386a3;
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }
`;
