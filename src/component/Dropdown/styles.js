import styled from "styled-components";

export const Wrapper = styled("div")`
  position: relative;
  width: max-content;
  min-width: max-content;
  font-family: "Fira Sans", sans-serif;
`;

export const Layout = styled.div`
  background: ${({ theme }) => theme.palette.grey[0] || "#eff0f5"};
  cursor: ${({ canClick }) =>
    canClick === undefined ? "pointer" : canClick ? "pointer" : "not-allowed"};
  padding: ${({ padding }) => (padding ? padding : "5px 13px")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  transition: 250ms ease-in-out;
  border: ${({ theme }) => "1px solid " + theme.palette.grey[10]};

  svg {
    font-size: ${({ theme }) => (theme ? theme.fontSizes.small : " 13px")};
    color: ${({ theme, canClick }) =>
      canClick ? theme.palette.grey[300] : theme.palette.grey[200]};
  }
  &:hover {
    box-shadow: ${({ canClick }) => canClick && "1px 3px 9px -6px #0003"};
    background: ${({ theme, canClick }) =>
      !canClick ? "#dcdde1" : theme ? theme.palette.grey[0] : "#e3e3e3"};
    color: ${({ dropCol }) => dropCol && dropCol};
    & > span {
      opacity: 1;
    }
  }
`;

export const Content = styled.span`
  color: ${({ theme, canClick }) =>
    canClick ? theme.palette.grey[300] : theme.palette.grey[200]};
  font-size: ${({ theme }) => (theme ? theme.fontSizes.xsmall : " 13px")};
  font-weight: ${({ weight }) => weight || "600"};
  padding-right: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10008;
  cursor: auto;
`;
export const DropdownWrap = styled.section`
  position: relative;
  top: 100%;
  padding: 0;
`;
export const Dropdown = styled.ul`
  position: absolute;
  top: 5px;
  z-index: 10009;
  border: 0;
  right: ${({ end }) => (end ? 0 : "auto")};
  left: ${({ start }) => (start ? 0 : "auto")};
  margin: 2px auto 0;
  padding: 5px 0;
  font-size: 14px;
  min-width: 160px;
  max-width: 250px;
  width: max-content;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  background-clip: padding-box;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #e3e3e3 transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 5px;
    height: 11px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #e3e3e3;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #ff6600;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 53px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #eff0f5;
  }
  &::-webkit-scrollbar-track:active {
    background: #e3e3e3;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const ListItems = styled.li`
  list-style: none;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  text-align: left;
  height: 100%;
  margin: 0;
  display: block;
  position: relative;
  font-size: 13px;
  min-height: unset;
  display: flex;
  padding: 10px 15px;

  &:hover {
    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
    background-color: ${({ theme }) =>
      theme ? theme.palette.primary.main : "#6464e6"};
    span {
      color: ${({ theme }) =>
        theme ? theme.palette.common.white + " !important" : "#fff !important"};
    }
  }

  /* .modalIcon {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;
export const Item = styled.span`
  height: 100%;
  flex: 1;
  color: ${({ theme }) => (theme ? theme.palette.grey[300] : "#333")};
  font-size: 13px;
  font-weight: 550;
`;
