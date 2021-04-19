import styled from "styled-components";

export const Wrapper = styled("div")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: relative;
  width: max-content;
  min-width: max-content;
`;

export const Layout = styled.div`
  background: ${({ theme }) => theme.palette.grey[0]};
  cursor: ${({ canClick }) =>
    canClick === undefined ? "pointer" : canClick ? "pointer" : "not-allowed"};
  padding: ${({ padding }) => (padding ? padding : "5px 13px")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms ease-in-out;
  border: ${({ theme }) => "1px solid " + theme.palette.grey[10]};

  svg {
    font-size: ${({ theme }) => (theme ? theme.fontSizes.small : " 13px")};
    color: ${({ theme, canClick }) =>
      canClick ? theme.palette.grey[300] : theme.palette.grey[200]};
  }
  &:hover {
    box-shadow: ${({ canClick, theme }) => canClick && theme.shadows[1]};
    background: ${({ theme, canClick }) =>
      !canClick ? theme.palette.grey[400] : theme.palette.grey[0]};
    color: ${({ dropCol }) => dropCol && dropCol};
    & > span {
      opacity: 1;
    }
  }
`;

export const Content = styled.span`
  color: ${({ theme, canClick }) =>
    canClick ? theme.palette.grey[300] : theme.palette.grey[200]};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ weight, theme }) =>
    weight || theme.typography.fontWeightBold};
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
  right: ${({ direction }) => (direction === "end" ? 0 : "auto")};
  left: ${({ direction }) => (direction === "start" ? 0 : "auto")};
  margin: 2px auto 0;
  padding: 5px 0;
  font-size: 14px;
  min-width: 160px;
  max-width: 250px;
  width: max-content;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.palette.common.white};
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${({ theme }) => theme.palette.grey[100] + " transparent"};
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
    background: ${({ theme }) => theme.palette.grey[100]};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.palette.primary.main};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 53px;
  }
  &::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
  }
  &::-webkit-scrollbar-track:active {
    background: ${({ theme }) => theme.palette.grey[300]};
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const ListItems = styled.li`
  list-style: none;
  cursor: pointer;
  text-align: left;
  height: 100%;
  margin: 0;
  display: block;
  position: relative;
  min-height: unset;
  display: flex;
  padding: 10px 15px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[2]};
    background-color: ${({ theme }) => theme.palette.primary.main};
    span {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
export const Item = styled.span`
  height: 100%;
  flex: 1;
  color: ${({ theme }) => theme.palette.grey[300]};
  font-size: 13px;
  font-weight: ${({ weight, theme }) =>
    weight || theme.typography.fontWeightBold};
`;
