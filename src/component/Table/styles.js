import styled from "styled-components";

export const Container = styled.section`
  background: white;
  padding-bottom: ${({ paginator }) => !paginator && "20px"};
`;

export const OverFlowScrollBar = styled("div")`
  scrollbar-color: #e3e3e3 transparent;
  scrollbar-width: thin;
  overflow-y: visible;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 11px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
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



export const Paginator = styled("div")`
  background: white;
  padding: 1em 5px;
  display: ${({ paginator }) => (paginator ? "block" : "none")};
  ul {
    justify-content: flex-end;
  }
`;

export const Table = styled.table`
  background: white;
  border-collapse: collapse;
  text-align: start;
  width: 100%;
`;
// --------------Table head ------------------
export const TableHead = styled.thead`
  background: ${({ theme }) => (theme ? theme.palette.primary.main : "red")};
  cursor: default;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const TableHeadRow = styled.tr`
  background-color: transparent;
  white-space: nowrap;
`;
export const TableHeadData = styled.th`
  text-align: start;
  color: ${({ theme }) => (theme ? theme.palette.common.white : "#033")};
  font-size: 16px;
  padding: 0.8em 0 0.8rem 1.8rem;
  min-width: 160px;
  @media (max-width: 1200px) {
    min-width: auto;
  }
`;



// --------------Table body ------------------
export const TableBodyRow = styled.tr`
  background: ${({ theme }) => (theme ? theme.palette.common.white : "#fff")};
  cursor: pointer;
  border: none;
  border-bottom: ${({ gap }) =>
    gap ? `${gap} solid   #fff` : "5px solid  #fff "};
  &:hover {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.27);
    background: #d2ccc621;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TableBodyData = styled.td`
  padding: 1.2rem 1.8rem;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => (theme ? theme.palette.grey[300] : "#767675")};
  @media (max-width: 1200px) {
    min-width: auto;
  }
  @media (max-width: 900px) {
    padding: 0.8rem 1.8rem;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    align-items: flex-start;
    text-align: end;
    &:before {
      margin-right: 21px;
      text-align: start;
      color: ${({ theadColor }) => theadColor || "#033"};
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:before {
      content: ${({ head }) => (head ? `'${head}'` : " ")};
      color: ${({ theme }) => (theme ? theme.palette.grey[200] : "#033")};
      font-size: 0.7rem;
      font-weight: 400;
    }
  }
  @media (max-width: 600px) {
    font-size: 0.65rem;
    font-size: 14px;
    &:before {
      font-size: 14px;
    }
  }
`;


// --------------ShowMore Table body ------------------
export const TableRowShowMore = styled.tr`
  cursor: auto;
  border: none;
  box-shadow: inset 0 0 7px 8px rgba(105, 57, 33, 0.05);
  background: linear-gradient(#ee6c2e21, #c6927e17);
`;


