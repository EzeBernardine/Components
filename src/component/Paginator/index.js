/*
 * component: paginator
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, ListItem, Paginator, Items, FirstLast } from "./styles";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { generateID } from "../../lib/generateID";

const Pagination = ({ items, onPageChange, pageSize, firstLast, prevNext }) => {
  //holds page number and each page data
  const [{ currentPage, tableData }, setPages] = useState({
    currentPage: 0,
    tableData: [],
  });

  const afterFirstThreePages = currentPage > 3; //returns true if the current page number is more than 3
  const isPagesUpToTen = tableData.length > 10; //returns true if total number of page  is more than 10
  let fewPagesBackward;
  const sevenPagesFoward = afterFirstThreePages ? currentPage + 7 : 10;
  const TenModulePages = 10 - (tableData.length - currentPage + 1) + 1; //returns number of pages remaining to complete the total displayed pages up to 10

  const gottenToLastPage = !tableData[sevenPagesFoward]; // is true if the last page number is visible

  if (isPagesUpToTen && afterFirstThreePages) {
    if (gottenToLastPage) {
      fewPagesBackward = currentPage - TenModulePages;
    } else {
      fewPagesBackward = currentPage - 3; //take 3 steps backwards
    }
  } else {
    fewPagesBackward = 0;
  }

  /**
   * @param {Number} pageSize
   * @param {Array} array
   * @returns Array
   * split the entire tableData props into pageSize number of arrays,
   * and pushes it into a new array.
   * Returns the new arrays containing pageSize lenght of arrays.
   */
  const splitTableDataIntoChunksOfArray = (array, pageSize) => {
    let temporaryArray = [];
    for (let i = 0; i < array.length; i += pageSize) {
      let myChunk = array.slice(i, i + pageSize);
      temporaryArray.push(myChunk);
    }
    return temporaryArray;
  };

  /**
   *
   * @param {Number} index
   * @returns  a call to set the active page number
   */
  const activePage = (index) =>
    setPages((prev) => ({ ...prev, currentPage: index }));

  /**
   *
   * @param {Number} index
   * @returns  a call to set active page number
   * passes onPageChange the current  page data once the page number changes
   */
  const activePageData = (index) => {
    let temporaryArray = splitTableDataIntoChunksOfArray(items, pageSize);
    onPageChange(temporaryArray[index]);
    return activePage(index);
  };

  /**
   *
   * @param {Array} arr
   * @returns 10 current page data
   */
  const getTenPages = (arr) => arr.slice(fewPagesBackward, sevenPagesFoward);

  useEffect(() => {
    //sets the number of pagedData
    setPages((prev) => ({
      ...prev,
      tableData: splitTableDataIntoChunksOfArray(items, pageSize),
    }));

    activePageData(0);
  }, []);

  return (
    <Container>
      <Paginator>
        {/* first takes you to the first page */}
        {firstLast ? (
          <FirstLast
            disabled={currentPage === 0}
            onClick={() => activePageData(0)}
          >
            First
          </FirstLast>
        ) : null}

        {/* This left arrow icon return previous page */}
        {prevNext && (
          <ListItem
            disabled={!(currentPage >= 1)}
            onClick={() => currentPage >= 1 && activePageData(currentPage - 1)}
          >
            <FiChevronsLeft />
          </ListItem>
        )}

        {/* This  is the page numbers which return a maximum of 10 pages at a time*/}
        {getTenPages(tableData).map((num, index) => (
          <ListItem
            onClick={() => activePageData(index + fewPagesBackward)}
            active={currentPage === index + fewPagesBackward}
            key={generateID(11)}
          >
            <Items active={currentPage === index + fewPagesBackward}>
              {index + 1 + fewPagesBackward}
            </Items>
          </ListItem>
        ))}

        {/* This right arrow icon return next page */}
        {prevNext && (
          <ListItem
            disabled={!(tableData.length >= currentPage + 2)}
            onClick={() =>
              tableData.length >= currentPage + 2 &&
              activePageData(currentPage + 1)
            }
          >
            <FiChevronsRight />
          </ListItem>
        )}

        {/* last takes you to the last page */}
        {firstLast ? (
          <FirstLast
            disabled={currentPage === tableData.length - 1}
            onClick={() => activePageData(tableData.length - 1)}
          >
            Last
          </FirstLast>
        ) : null}
      </Paginator>
    </Container>
  );
};

// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;
export default Pagination;
