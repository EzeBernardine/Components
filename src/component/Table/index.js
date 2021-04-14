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
  headBkColor,
  headColor,
  bodyColor,
  rowClick,
  paginator,
  pageSize,
  firstLast,
  prevNext,
}) => {
  //Holds paginated tableData
  const [pagedData, setPagedData] = useState([]);

  //holds table showMore data
  const [isOpen, setIsOpen] = useState([]);

  //determines which tableRowShowMoreData will be displayed.
  const handleOpenTable = (idx, rowData, moreData) => {
    isOpen === idx ? setIsOpen(-1) : setIsOpen(idx);
    //gives you access to the table data outside this file
    //optional
    rowClick(rowData, moreData);
  };
  const returnTableRow = (data, idx, isOpen) => {
    let index = idx + 1;
    let __data = { ...data };
    //remove all id's coming from database
    delete __data._id;

    return (
      <React.Fragment key={generateID(17)}>
        {/* Normal table row */}
        <TableBodyRow
          gap={gap} //calculates for spaces between tablerows
          moreDetail={moreDetail} //used to determines cursor type
          onClick={() =>
            handleOpenTable(index, __data, moreDetail && moreDetail[idx])
          }
        >
          {Object.values(__data).map((item, i) => (
            <TableBodyData
              // need on mobile screen for displaying each tablehead
              head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              key={generateID(14)}
              bodyColor={bodyColor}
            >
              {item}
            </TableBodyData>
          ))}
        </TableBodyRow>

        {/* When the is more table data to be displayed when a table row is clicked */}
        {moreDetail && isOpen === index ? (
          <TableRowShowMore gap={gap}>
            {/* this ensures  colSpan is the length of the number of columns in the table*/}
            <td colSpan={Object.values(__data).length}>{moreDetail[idx]}</td>
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
              <TableHead headBkColor={headBkColor}>
                <TableHeadRow>
                  {tableHead.map((head, i) => (
                    <TableHeadData key={generateID(11)} headColor={headColor}>
                      {head.toUpperCase()}
                    </TableHeadData>
                  ))}
                </TableHeadRow>
              </TableHead>

              <tbody>
                {paginator
                  ? pagedData.map((data, idx) =>
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
              items={tableBody}
              pageSize={pageSize || 5}
              // prevNext={prevNext || null}
              onChangePage={(item) => setPagedData(item)}
              firstLast={firstLast || false}
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
  moreDetail: PropTypes.array,
  rowClick: PropTypes.func,
  gap: PropTypes.string,
  headBkColor: PropTypes.string,
  headColor: PropTypes.string,
  bodyColor: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;
