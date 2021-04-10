import styled from "styled-components";

export const TabWrapper = styled("div")`
  .tab-list-active {
    position: relative;
    color: ${({ activeColor }) => (activeColor ? activeColor : "#de8430")};
    border-bottom: ${({ activeColor }) =>
      activeColor ? `2px solid ${activeColor}` : "2px solid #de8430"};
    :hover {
      border-bottom: ${({ activeColor }) =>
        activeColor ? `2px solid ${activeColor}` : "2px solid #de8430"};
    }
    ::after {
      content: "";
      width: 50%;
      height: 100%;
      border-radius: 0 4px 4px 0;
      background: #fafafa;
      opacity: 0.2;
      position: absolute;
      left: 50%;
      animation: left 0.8s ease-in-out 1 alternate forwards;
    }
    ::before {
      content: "";
      width: 50%;
      height: 100%;
      border-radius: 4px 0 0 4px;
      background: #fafafa;
      opacity: 0.2;
      position: absolute;
      right: 50%;
      animation: left 0.8s ease-in-out 1 forwards;
    }
    @keyframes left {
      0% {
        width: 0;
        opacity: 0;
      }
      50% {
        width: 50%;
        opacity: 0.4;
      }
      100% {
        width: 50%;
        opacity: 0;
      }
    }
  }
`;

export const TabList = styled("ol")`
  padding-left: 0;
  display: flex;
  width: 100%;
  border-color: white;
  border-radius: 4px;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  transition: background 0.3s ease-out;
  overflow-x: auto;
  scrollbar-color: #e3e3e3 transparent;
  scrollbar-width: none;
`;
export const ListItem = styled("li")`
  list-style: none;
  padding: 0.8rem 0.55rem;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  height: 100%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ nonActiveColor }) =>
    nonActiveColor ? nonActiveColor : "#b9a694"};
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #f1f1f1;
    background-color: ${({ bgColor }) => bgColor && "#f1f1f1"};
  }
  @media (max-width: 1240px) and (min-width: 920px) {
    padding: 0.7rem 0.4rem;
    font-size: 16px;
  }
  @media (max-width: 920px) {
    font-size: 14px;
    padding: 0 10px 10px;
  }
`;
// export const TabList = styled("ol")`
// ` ;
// export const TabList = styled("ol")`
// ` ;
