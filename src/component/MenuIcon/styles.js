import styled from "styled-components";

export const Container = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 25px;
  height: 18px;
`;

export const Icon = styled.div`
  grid-gap: 7px;
  width: 24px;
  height: 2px;
  top: 9px;
  background: ${({ theme }) => (theme ? theme.palette.primary.main : "red")};
  align-items: center;
  position: relative;
  visibility: ${({ showMore }) => (showMore ? "hidden " : "unset")};
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => (theme ? theme.palette.primary.main : "red")};
    visibility: visible;
    bottom: 0;
    right: 0;
    left: 0;
    transition: 250ms linear;
  }
  &::before {
    top: ${({ showMore }) => (showMore ? "0" : "-9px")};
    transform: ${({ showMore }) => (showMore ? "rotate(45deg) " : "none")};
  }
  &::after {
    top: ${({ showMore }) => (showMore ? "0" : "9px")};
    transform: ${({ showMore }) => (showMore ? "rotate(-45deg)" : "none")};
  }
`;
