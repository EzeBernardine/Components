/*
 * component: Tables
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React, { useState } from "react";
import {
  Container,
  TableData,
  Paginator,
  OverFlowScrollBar,
  TableHead,
  Table,
  TableBodyRow,
  TableHeadData,
  TableBodyData,
} from "./styles";
import { generateID } from "../../lib/generateID";
import PropTypes from "prop-types";
import Pagination from "../Paginator";

const CustomTable = ({
  tableBody,
  tableHead,
  theadColor,
  theadBgColor,
  rowClick,
  tbodyColor,
  rowHovColor,
  bottomGap,
  paginator,
  pageSize,
  firstLast,
  prevNext,
}) => {
  const [pageOfItems, setPageOfItems] = useState([]);

  const [tableData] = useState(tableBody);

  const onChangePage = (items) => {
    setPageOfItems(items);
  };

  const returnTableRow = (data) => {
    let __data = { ...data };
    delete __data._id;

    return (
      <TableBodyRow key={generateID(17)} onClick={() => rowClick(data)}>
        {Object.values(__data).map((item, i) => (
          <TableBodyData
            theadColor={theadColor}
            tbodyColor={tbodyColor}
            head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
            className={
              (Object.keys(data)[i] &&
                Object.keys(data)[i].replace(/'/g, "")) ||
              ""
            }
            id={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
            key={generateID(14)}
          >
            {item}
          </TableBodyData>
        ))}
      </TableBodyRow>
    );
  };
  return (
    <>
      {tableBody.length !== 0 ? (
        <Container
          theadColor={theadColor}
          theadBgColor={theadBgColor}
          bottomGap={bottomGap}
          tbodyColor={tbodyColor}
          rowHovColor={rowHovColor}
          paginator={paginator}
        >
          <OverFlowScrollBar className="container">
            <Table>
              <TableHead>
                <TableHeadData>
                  {tableHead.map((head, i) => (
                    <th key={generateID(11)}>{head.toUpperCase()}</th>
                  ))}
                </TableHeadData>
              </TableHead>

              <tbody>
                {paginator
                  ? pageOfItems.map((data, idx) => returnTableRow(data))
                  : tableBody.map((data, idx) => returnTableRow(data))}
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
        <p>"No Data to display"</p>
      )}
    </>
  );
};

CustomTable.propTypes = {
  // tableBody: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  theadColor: PropTypes.string,
  theadBgColor: PropTypes.string,
  rowClick: PropTypes.func,
  tbodyColor: PropTypes.string,
  rowHovColor: PropTypes.string,
  bottomGap: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;