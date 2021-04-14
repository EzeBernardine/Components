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

const Pagination = ({ items, onChangePage, pageSize, firstLast, prevNext }) => {
  const [pagedTableDataArray, setPagedTableDataArray] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); //holds the active clicked paginator list

  let largePageIndex = activeIndex > 3; //returns true if the active index is more than 3

  /**
   * @param {Number} pageSize
   * @param {Array} array
   * @returns {Array}
   * split the entire tableDataprops into pageSize number of arrays
   * and push it into a new array,
   * thereby returning an array of arrays containing pageSize lenght of arrays.
   */
  const chunkArray = (array, pageSize) => {
    let tempArray = [];
    for (let i = 0; i < array.length; i += pageSize) {
      let myChunk = array.slice(i, i + pageSize);
      tempArray.push(myChunk);
    }
    return tempArray;
  };

  /**
   *
   * @param {Number} index
   * @returns sets the active tableArray current index
   */
  const activeTableNumber = (index) => setActiveIndex(index);

  /**
   *
   * @param {Number} index
   * @returns  a call to set active pagedTable index
   * passes onChangePage the current table pagedData onChange of the table pages
   */
  const getCurrentArray = (index) => {
    let tempArray = chunkArray(items, pageSize);
    onChangePage(tempArray[index]);
    return activeTableNumber(index);
  };

  useEffect(() => {
    //sets the number of pagedData array
    setPagedTableDataArray(chunkArray(items, pageSize));
    //Set the initail pagedData
    getCurrentArray(0);
  }, []);

  return (
    <Container>
      <Paginator>
        {firstLast ? (
          <FirstLast
            disabled={activeIndex === 0}
            onClick={() => getCurrentArray(0)}
          >
            First
          </FirstLast>
        ) : null}

        {prevNext && (
          <ListItem
            disabled={!(activeIndex >= 1)}
            onClick={() => activeIndex >= 1 && getCurrentArray(activeIndex - 1)}
          >
            <FiChevronsLeft />
          </ListItem>
        )}
        {pagedTableDataArray
          .slice(
            largePageIndex ? activeIndex - 3 : 0,
            largePageIndex ? activeIndex + 7 : 10
          )
          .map((num, index) => (
            <ListItem
              onClick={() =>
                getCurrentArray(
                  largePageIndex ? index + activeIndex - 3 : index
                )
              }
              active={
                largePageIndex
                  ? activeIndex === index + activeIndex - 3
                  : activeIndex === index
              }
              key={generateID(11)}
            >
              <Items
                active={
                  largePageIndex
                    ? activeIndex === index + activeIndex - 3
                    : activeIndex === index
                }
              >
                {largePageIndex ? index + 1 + activeIndex - 3 : index + 1}
              </Items>
            </ListItem>
          ))}

        {prevNext && (
          <ListItem
            disabled={!(pagedTableDataArray.length >= activeIndex + 2)}
            onClick={() =>
              pagedTableDataArray.length >= activeIndex + 2 &&
              getCurrentArray(activeIndex + 1)
            }
          >
            <FiChevronsRight />
          </ListItem>
        )}

        {firstLast ? (
          <FirstLast
            disabled={activeIndex === pagedTableDataArray.length - 1}
            onClick={() => getCurrentArray(pagedTableDataArray.length - 1)}
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
