import styled from "styled-components";
import { OverFlowScrollBar } from "../OverflowScroll/styles";

export const Container = styled(OverFlowScrollBar)`
  display: flex;
  margin: 0;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  overflow-x: auto;
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export const Paginator = styled("ul")`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  padding: 10px 0;
`;

export const ListItem = styled("li")`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  min-width: 30px;
  width: auto;
  transition: all 0.3s;
  font-weight: 400;
  border-radius: 4px;
  margin: 2px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ active, disabled }) =>
    active ? "#fff" : disabled ? "#44444435" : " #6b6b6b"};
  box-shadow: ${({ active }) =>
    active
      ? "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12),  0 2px 4px -1px rgba(156, 39, 176, 0.2)"
      : "none"};
  background-color: ${({ theme, active, disabled }) =>
    active
      ? theme
        ? theme.palette.primary.main
        : "#540c8c"
      : disabled
      ? " #44444435"
      : "transparent"};

  :hover {
    background-color: ${({ theme, active }) =>
      active ? (theme ? theme.palette.primary.main : "#540c8c") : " #44444435"};
  }
`;

export const Items = styled("span")`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;
export const FirstLast = styled("li")`
  font-size: 14px;
  cursor: pointer;
  margin: 2px;
  list-style: none;
  padding: 5px;
  font-weight: normal;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? " #44444435" : "#6b6b6b")};
  :hover {
    color: ${({ disabled, theme }) =>
      disabled
        ? " #44444435"
        : theme
        ? theme.palette.primary.main
        : "#44444435"};
  }
`;
