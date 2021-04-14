/*
 * component: paginator
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React from "react";
import PropTypes from "prop-types";
import { Container, ListItem, Paginator, Items } from "./styles";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { generateID } from "../../lib/generateID";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 5,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    let { items, pageSize } = this.props;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page, pageSize);

    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager: pager });
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    pageSize = pageSize || 10;

    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    const { radius, color, firstLast, prevNext } = this.props;

    return (
      <Container radius={radius} color={color}>
        <Paginator>
          {firstLast && (
            <ListItem className={pager.currentPage === 1 ? "disabled" : ""}>
              <Items onClick={() => this.setPage(1)}>First</Items>
            </ListItem>
          )}
          {prevNext && (
            <ListItem className={pager.currentPage === 1 ? "disabled" : ""}>
              <Items onClick={() => this.setPage(pager.currentPage - 1)}>
                {" "}
                <FiChevronsLeft />{" "}
              </Items>
            </ListItem>
          )}
          {pager.pages.map((page, index) => (
            <ListItem
              onClick={() => this.setPage(page)}
              key={generateID(14)}
              className={pager.currentPage === page ? "active" : ""}
            >
              <Items>{page}</Items>
            </ListItem>
          ))}
          {prevNext && (
            <ListItem
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <Items onClick={() => this.setPage(pager.currentPage + 1)}>
                <FiChevronsRight />
              </Items>
            </ListItem>
          )}
          {firstLast && (
            <ListItem
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <Items onClick={() => this.setPage(pager.totalPages)}>Last</Items>
            </ListItem>
          )}
        </Paginator>
      </Container>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
