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
  //holds all pages
  const [{ pageNumber, tableData }, setPages] = useState({
    pageNumber: 0,
    tableData: [],
  });

  let moreThanFirstThreePages = pageNumber > 3; //returns true if the current page number is more than 3
  let isPagesUpToTen = tableData.length > 10; //returns true if total number of page  is more than 10
  let fewPagesBackward;
  let sevenPagesFoward = moreThanFirstThreePages ? pageNumber + 7 : 10;
  let TenModulePages = 10 - (tableData.length - pageNumber + 1) + 1;

  let gottenToLastPage = !tableData[sevenPagesFoward];

  if (isPagesUpToTen) {
    if (gottenToLastPage) {
      fewPagesBackward = moreThanFirstThreePages
        ? pageNumber - TenModulePages
        : 0;
    } else {
      fewPagesBackward = moreThanFirstThreePages ? pageNumber - 3 : 0;
    }
  } else {
    fewPagesBackward = 0;
  }

  /**
   * @param {Number} pageSize
   * @param {Array} array
   * @returns {Array}
   * split the entire tableData props into pageSize number of arrays,
   * and pushes it into a new array.
   * Returns an array of arrays containing pageSize lenght of arrays.
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
   * @returns  number
   */
  const activePage = (index) =>
    setPages((prev) => ({ ...prev, pageNumber: index }));

  /**
   *
   * @param {Number} index
   * @returns  a call to set current page
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
  const getTenPagesMax = (arr) => arr.slice(fewPagesBackward, sevenPagesFoward);

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
            disabled={pageNumber === 0}
            onClick={() => activePageData(0)}
          >
            First
          </FirstLast>
        ) : null}

        {/* This left arrow icon return previous page */}
        {prevNext && (
          <ListItem
            disabled={!(pageNumber >= 1)}
            onClick={() => pageNumber >= 1 && activePageData(pageNumber - 1)}
          >
            <FiChevronsLeft />
          </ListItem>
        )}

        {/* This  is the page numbers which return a maximum of 10 pages at a time*/}
        {getTenPagesMax(tableData).map((num, index) => (
          <ListItem
            onClick={() => activePageData(index + fewPagesBackward)}
            active={pageNumber === index + fewPagesBackward}
            key={generateID(11)}
          >
            <Items active={pageNumber === index + fewPagesBackward}>
              {index + 1 + fewPagesBackward}
            </Items>
          </ListItem>
        ))}

        {/* This right arrow icon return next page */}
        {prevNext && (
          <ListItem
            disabled={!(tableData.length >= pageNumber + 2)}
            onClick={() =>
              tableData.length >= pageNumber + 2 &&
              activePageData(pageNumber + 1)
            }
          >
            <FiChevronsRight />
          </ListItem>
        )}

        {/* last takes you to the last page */}
        {firstLast ? (
          <FirstLast
            disabled={pageNumber === tableData.length - 1}
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
