import React, { useState } from "react";
import {
  Container,
  TableBodyData,
  Paginator,
  Table,
  TableHead,
  TableBodyRow,
  TableRowShowMore,
  TableHeadData,
  OverFlowScrollBar,
  TableHeadRow,
} from "./styles";
import { generateID } from "../../lib/generateID";
import PropTypes from "prop-types";
import Pagination from "../Paginator";

const CustomTable = ({
  tableBody,
  tableHead,
  moreDetail,

  gap,
  paginator,
  pageSize,
  firstLast,
  prevNext,
}) => {
  const [pageOfItems, setPageOfItems] = useState([]);
  const [isOpen, setIsOpen] = useState([]);
  const [tableData] = useState(tableBody);

  const onChangePage = (items) => setPageOfItems(items);

  //determines which tableRowShowMoreData will be displayed.
  const handleOpenTable = (idx) =>
    isOpen === idx ? setIsOpen(-1) : setIsOpen(idx);

  const returnTableRow = (data, idx, isOpen) => {
    let index = idx + 1;
    let __data = { ...data };
    //remove all id's coming from database
    delete __data._id;

    return (
      <React.Fragment key={generateID(17)}>
        <TableBodyRow gap={gap} onClick={() => handleOpenTable(index)}>
          {Object.values(__data).map((item, i) => (
            <TableBodyData
              // need on mobile screen for displaying each tablehead
              head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              key={generateID(14)}
            >
              {item}
            </TableBodyData>
          ))}
        </TableBodyRow>
        {moreDetail && isOpen === index ? (
          <TableRowShowMore>
            {/* this ensures  colSpan is the length of the number of columns in the table*/}
            <TableBodyData colSpan={Object.values(__data).length}>
              {moreDetail[idx].props.children}
            </TableBodyData>
          </TableRowShowMore>
        ) : null}
      </React.Fragment>
    );
  };

  return (
    <>
      {tableBody.length !== 0 ? (
        <Container paginator={paginator}>
          <OverFlowScrollBar>
            <Table>
              <TableHead>
                <TableHeadRow>
                  {tableHead.map((head, i) => (
                    <TableHeadData key={generateID(11)}>
                      {head.toUpperCase()}
                    </TableHeadData>
                  ))}
                </TableHeadRow>
              </TableHead>

              <tbody>
                {paginator
                  ? pageOfItems.map((data, idx) =>
                      returnTableRow(data, idx, isOpen)
                    )
                  : tableBody.map((data, idx) =>
                      returnTableRow(data, idx, isOpen)
                    )}
              </tbody>
            </Table>
          </OverFlowScrollBar>

          <Paginator className="paginator" paginator={paginator}>
            <Pagination
              items={tableData}
              pageSize={pageSize || 5}
              prevNext={prevNext || null}
              onChangePage={onChangePage}
              firstLast={firstLast || null}
            />
          </Paginator>
        </Container>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

CustomTable.propTypes = {
  tableBody: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  moreDetail: PropTypes.array.isRequired,
  rowClick: PropTypes.func,
  gap: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;
