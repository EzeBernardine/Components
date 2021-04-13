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
  transition: all 200ms ease;
  margin: auto;
  height: 15px;
  border-radius: 20px;
  padding: 0;
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
    transition: all 200ms ease;
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
  transition: all 200ms ease;
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  bottom: 0;
  z-index: 3;
  left: auto;
  transform: ${({ switched }) =>
    !switched ? "translate(-100%)" : "translate(0%)"};
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
      left: calc(100% - 20px);
      height: 20px;
      width: 20px;
    }
    100% {
      left: calc(100% - 28px);
      height: 38px;
      width: 38px;
      background: transparent;
    }
  }
  @keyframes back {
    0% {
      left: calc(0%);
      height: 20px;
      width: 20px;
    }
    100% {
      left: calc(0% - 10px);
      height: 38px;
      width: 38px;
      transform: scale(1);
      background: transparent;
    }
  }

  background: #6a666687;
  position: absolute;
  z-index: 11;
  border-radius: 50%;
  animation: ${({ switched }) =>
    switched
      ? "yeah 150ms ease-out 50ms forwards"
      : "back 150ms ease-out 50ms forwards"};
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: 2;
`;
