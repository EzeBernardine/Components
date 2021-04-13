import styled from "styled-components";

export const Container = styled("div")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  width: 42px;
  height: 38px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Main = styled("div")`
  width: 40px;
  height: 15px;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;
export const Button = styled("button")`
  position: relative;
  border: none;
  top: -7.5px;
  width: 40px;
  transition: all 0.5s ease;
  margin: auto;
  height: 15px;
  border-radius: 20px;
  background: ${({ switched, theme }) =>
    switched ? (theme ? theme.palette.primary.main : "#ff6600") : "#6a666694"};

  &:hover .switch-ball {
    box-shadow: ${({ switched, theme }) =>
      switched
        ? theme
          ? "0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px " +
            theme.palette.primary.main +
            36
          : "0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px #ff660036"
        : " 0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px  #6a66662b"};
  }
  &:focus .switch-ball,
  &:active .switch-ball {
    box-shadow: ${({ theme }) =>
      theme
        ? `  0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 1px 10px ${
            theme.palette.primary.main + "8a"
          }`
        : " 0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 1px 10px #ff66008a"};
  }
`;
export const Input = styled("input")`
  position: absolute;
  z-index: 12;
  height: 40px;
  width: 40px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  opacity: 0;
  cursor: pointer;
`;
export const Ball = styled("span")`
  transition: all 0.5s ease;
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  bottom: 0;
  right: ${({ switched }) => (switched ? 0 : "auto")};
  left: ${({ switched }) => (!switched ? 0 : "auto")};
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
  border: ${({ switched, theme }) =>
    switched
      ? theme
        ? `1px solid ${theme.palette.primary.main}`
        : "1px solid #ff6600"
      : "1px solid  #6a666694"};
  margin: auto;
`;

export const Overlay = styled("div")`
  @keyframes yeah {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }
  @keyframes back {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }

  background: #6a666654;
  position: absolute;
  z-index: 11;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  top: -11px;
  animation: ${({ switched }) =>
    switched ? " yeah .5s ease-out forwards" : "back .5s ease-out forwards"};
  right: ${({ switched }) => (switched ? " -9px" : "auto")};
  left: ${({ switched }) => (!switched ? " -9px" : "auto")};
  bottom: 0;
  transition: all 0.7s ease;
`;
