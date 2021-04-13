import styled from "styled-components";

export const Container = styled.div`
 font-family: "Fira Sans", sans-serif;
  position: relative;
  z-index: 10;
  position: relative;
  padding: 20px 30px 20px 60px;
  border-radius: 4px;
  border: ${({ type, theme }) =>
    type === "success"
      ? `1px solid ${theme.palette.success.light}`
      : type === "warning"
      ? `px solid  ${theme.palette.warning.light}`
      : `1px solid ${theme.palette.error.light}`};
  background: ${({ type, theme }) =>
    type === "success"
      ? theme.palette.success.light
      : type === "warning"
      ? theme.palette.warning.light
      : theme.palette.error.light};

  * {
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.main
        : type === "warning"
        ? theme.palette.warning.main
        : theme.palette.error.main};
  }

  > svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[200] || "#fafafa"};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.grey[300] || "#fafafa"};
  }
`;
