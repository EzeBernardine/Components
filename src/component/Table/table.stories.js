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
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "rerf wehfwe data",
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
    amount: "table headvvwefkje fwjefh wiejfw 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablthrtt",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tablerera",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "rerf wehfwe data",
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
    amount: "table headvvwefkje fwjefh wiejfw 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "rerf wehfwe data",
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
    amount: "table headvvwefkje fwjefh wiejfw 2 data",
    data: "3",
  },
  {
    subject: "Tabfrfwata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "taergata",
    data: "3",
  },
  {
    subject: "Taegdata",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "rerf wehfwe data",
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
    amount: "table headvvwefkje fwjefh wiejfw 2 data",
    data: "3",
  },
  {
    subject: "Tawgerata",
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
    amount: "tabergata",
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
    data: "3fwefwe",
  },
  {
    subject: "Table head 1 data",
    amount: "table head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "fwefffwee head 2 data",
    data: "3",
  },
  {
    subject: "Table head 1 data",
    amount: "table wefwefw 2 data",
    data: "3",
  },
  {
    subject: "Table wfefwergw 1 data",
    amount: "table head 2 data",
    data: "3wfwnekhk",
  },
  {
    subject: "Tafjkhhwif iw1 data",
    amount: "table head 2 data",
    data: "3ajhfhe fiuw ",
  },
  {
    subject: "Table head 1 data",
    amount: "table hedwe we uihwiuehiufwa",
    data: "3",
  },
];
// const moreDetail = [
//   <div>You can style this as you want it</div>,
//   <div>Payment oops</div>,
//   <div>Anything</div>,
//   <div>Hello world</div>,
//   <div>Payment type</div>,
//   <div>Payment type</div>,
//   <div>Payment type</div>,
//   <div>Payment type</div>,
// ];

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
  // moreDetail: moreDetail,
  paginator: true,
  pageSize: 5,
  prevNext: true,
  firstLast: true,
  rowClick: (data, moreData) => console.log(data, moreData, "the row"),

  headBkColor: "purple",
  headColor: "white",
  bodyColor: "grey",
};
