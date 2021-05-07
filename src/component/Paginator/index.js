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
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0); //holds the active clicked paginator list

  let moreThanFirstThreePages = page > 3; //returns true if the active index is more than 3
  let threePagesBackward = page - 3; //
  let sevenPagesFoward = page + 7; //

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
  const activePage = (index) => setPage(index);

  /**
   *
   * @param {Number} index
   * @returns  a call to set active pagedTable index
   * passes onPageChange the current table pagedData onChange of the table pages
   */
  const activePageData = (index) => {
    let temporaryArray = splitTableDataIntoChunksOfArray(items, pageSize);
    onPageChange(temporaryArray[index]);
    return activePage(index);
  };

  /**
   *
   * @param {Array} arr
   * @returns required pages data
   */
  const getTenPagesMax = (arr) =>
    arr.slice(
      moreThanFirstThreePages ? threePagesBackward : 0,
      moreThanFirstThreePages ? sevenPagesFoward : 10
    );

  useEffect(() => {
    //sets the number of pagedData
    setTableData(splitTableDataIntoChunksOfArray(items, pageSize));
    //Set the initail pagedData
    activePageData(0);
  }, []);

  return (
    <Container>
      <Paginator>
        {/* first takes you to the first page */}
        {firstLast ? (
          <FirstLast disabled={page === 0} onClick={() => activePageData(0)}>
            First
          </FirstLast>
        ) : null}

        {/* This left arrow icon return previous page */}
        {prevNext && (
          <ListItem
            disabled={!(page >= 1)}
            onClick={() => page >= 1 && activePageData(page - 1)}
          >
            <FiChevronsLeft />
          </ListItem>
        )}

        {/* This  is the page numbers which return a maximum of 10 pages at a time*/}
        {getTenPagesMax(tableData).map((num, index) => (
          <ListItem
            onClick={() =>
              activePageData(
                moreThanFirstThreePages ? index + threePagesBackward : index
              )
            }
            active={
              moreThanFirstThreePages
                ? page === index + threePagesBackward
                : page === index
            }
            key={generateID(11)}
          >
            <Items
              active={
                moreThanFirstThreePages
                  ? page === index + threePagesBackward
                  : page === index
              }
            >
              {moreThanFirstThreePages
                ? index + 1 + threePagesBackward
                : index + 1}
            </Items>
          </ListItem>
        ))}

        {/* This right arrow icon return next page */}
        {prevNext && (
          <ListItem
            disabled={!(tableData.length >= page + 2)}
            onClick={() =>
              tableData.length >= page + 2 && activePageData(page + 1)
            }
          >
            <FiChevronsRight />
          </ListItem>
        )}

        {/* last takes you to the last page */}
        {firstLast ? (
          <FirstLast
            disabled={page === tableData.length - 1}
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
