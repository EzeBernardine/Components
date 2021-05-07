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
  const [pagedTableDataArray, setPagedTableDataArray] = useState([]);
  const [page, setPage] = useState(0); //holds the active clicked paginator list

  let moreThanThreePages = page > 3; //returns true if the active index is more than 3
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
   * @returns  active tableData current index
   */
  const activeTableNumber = (index) => setPage(index);

  /**
   *
   * @param {Number} index
   * @returns  a call to set active pagedTable index
   * passes onPageChange the current table pagedData onChange of the table pages
   */
  const getSelectedPageData = (index) => {
    let temporaryArray = splitTableDataIntoChunksOfArray(items, pageSize);
    onPageChange(temporaryArray[index]);
    return activeTableNumber(index);
  };

  /**
   * 
   * @param {Array} arr 
   * @returns required pages
   */
  const getTenPagesMax = (arr) =>
    arr.slice(
      moreThanThreePages ? threePagesBackward : 0,
      moreThanThreePages ? sevenPagesFoward : 10
    );

  useEffect(() => {
    //sets the number of pagedData
    setPagedTableDataArray(splitTableDataIntoChunksOfArray(items, pageSize));
    //Set the initail pagedData
    getSelectedPageData(0);
  }, []);

  return (
    <Container>
      <Paginator>
        {firstLast ? (
          <FirstLast
            disabled={page === 0}
            onClick={() => getSelectedPageData(0)}
          >
            First
          </FirstLast>
        ) : null}

        {prevNext && (
          <ListItem
            disabled={!(page >= 1)}
            onClick={() => page >= 1 && getSelectedPageData(page - 1)}
          >
            <FiChevronsLeft />
          </ListItem>
        )}

        {getTenPagesMax(pagedTableDataArray).map((num, index) => (
          <ListItem
            onClick={() =>
              getSelectedPageData(
                moreThanThreePages ? index + threePagesBackward : index
              )
            }
            active={
              moreThanThreePages
                ? page === index + threePagesBackward
                : page === index
            }
            key={generateID(11)}
          >
            <Items
              active={
                moreThanThreePages
                  ? page === index + threePagesBackward
                  : page === index
              }
            >
              {moreThanThreePages ? index + 1 + threePagesBackward : index + 1}
            </Items>
          </ListItem>
        ))}

        {prevNext && (
          <ListItem
            disabled={!(pagedTableDataArray.length >= page + 2)}
            onClick={() =>
              pagedTableDataArray.length >= page + 2 &&
              getSelectedPageData(page + 1)
            }
          >
            <FiChevronsRight />
          </ListItem>
        )}

        {firstLast ? (
          <FirstLast
            disabled={page === pagedTableDataArray.length - 1}
            onClick={() =>
              getSelectedPageData(pagedTableDataArray.length - 1)
            }
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
