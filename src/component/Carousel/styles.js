import styled from "styled-components";

export const CarouselContent = styled.div`
  background: red;
  transition: 500ms linear;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  transform: translateX(
    ${({ translateRate }) =>
      (translateRate ? -translateRate : null) * 100 + "%"}
  );
  & > * {
    width: 100%;
    min-width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const CarouselStyles = styled.div`
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  display: block;
  scroll-behavior: smooth;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
`;

export const Navigator = styled.div`
  display: flex;
  width: max-content;
  margin: ${({ margin }) => (margin ? margin : "unset")};
`;
export const Indicators = styled.button`
  transition: 500ms linear;
  width: 16px;
  height: 8px;
  margin: 0 10px;
  background-color: blue;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: 2s linear;
  &.active {
    background: green;
    transition: 2s linear;
    width: 32px;
  }
`;
