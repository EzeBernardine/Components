import styled from "styled-components";

export const CarouselContent = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
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

export const CarouselWrapper = styled.div`
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
  transition: 1s ease-out;
  height: 8px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: ${({ currentIndicator }) => (currentIndicator ? "32px" : "16px")};
  background-color: ${({ currentIndicator, theme, activeColor }) =>
    currentIndicator
      ? activeColor
        ? activeColor
        : theme
        ? theme.palette.primary.main
        : "blue"
      : "#dedce1"};
`;
