import React from "react";

import Table from "./index";
const tableHead = ["Table Head 1", "Table Head 2", "Table Head 3"];
const tableContent = [
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
];
const moreDetail = [
  <span>Payment type</span>,
  <span>Payment type</span>,
  <span>Payment type</span>,
  <span>Payment type</span>,
  <span>Payment type</span>,
  <span>Payment type</span>,
];

export default {
  title: "Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const _Table = Template.bind({});

_Table.args = {
  gap: "5px",
  tableHead: tableHead,
  tableBody: tableContent,
  moreDetail: moreDetail,
  theadColor: "red",
  rowClick: (data) => console.log(data, "the row"),
  tbodyColor: "#252733",
  paginator: true,
  pageSize: 5,
  prevNext: true,
};
