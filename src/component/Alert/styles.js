import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: relative;
  z-index: 10;
  position: relative;
  padding: 20px 30px 20px 30px;
  display: flex;
  border-radius: 4px;
  border: ${({ type, theme }) =>
    type === "success"
      ? `1px solid ${theme.palette.success.light}`
      : type === "warning"
      ? `1px solid  ${theme.palette.warning.light}`
      : type === "info"
      ? `1px solid  ${theme.palette.info.light}`
      : type === "error"
      ? `1px solid  ${theme.palette.error.light}`
      : null};
  background: ${({ type, theme }) =>
    type === "success"
      ? theme.palette.success.light
      : type === "warning"
      ? theme.palette.warning.light
      : type === "info"
      ? theme.palette.info.light
      : type === "error"
      ? theme.palette.error.light
      : null};
`;

export const IconType = styled.span`
  margin-right: 20px;
  > svg {
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.main
        : type === "warning"
        ? theme.palette.warning.main
        : type === "info"
        ? theme.palette.info.main
        : type === "error"
        ? theme.palette.error.main
        : "green"};
  }
`;
export const Children = styled.span`
  * {
    font-size: 14px;
    line-height: 20px;
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.dark
        : type === "warning"
        ? theme.palette.warning.dark
        : type === "info"
        ? theme.palette.info.dark
        : type === "error"
        ? theme.palette.error.dark
        : null};
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
