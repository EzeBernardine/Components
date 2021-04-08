import React from "react";

import Table from "./index";
const tableHead = [
  "Table Head1",
  "Table Head 2",
  "Table Head 3",
  "Table Head 4",
  "Table Head 5",
];
const tableContent = [
  {
    subject: "Sign In",
    teacher: "this is the description for you",
    lastUpdated: "Blessed Emoefe",
    hello: 14,
    topPerfStudents: 15,
  },
  {
    subject: "Sign Up",
    teacher: "this is the description for you",
    lastUpdated: "Blessed Emoefe",
    hello: 14,
    topPerfStudents: 15,
  },
  {
    subject: "Forgot Password",
    teacher: "this is the description for you",
    lastUpdated: "Blessed Emoefe",
    hello: 14,
    topPerfStudents: 15,
  },
  {
    subject: "Child Learning Path",
    teacher: "this is the description for you",
    lastUpdated: "Blessed Emoefe",
    hello: 14,
    topPerfStudents: 15,
  },
  {
    subject: "Forgot Password",
    teacher: "this is the description for you",
    lastUpdated: "Blessed Emoefe",
    hello: 14,
    topPerfStudents: 15,
  },
];
export default {
  title: "Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const _Table = Template.bind({});

_Table.args = {
  bottomGap: "5px",
  tableHead: tableHead,
  tableBody: tableContent,
  theadColor: "#9FA2B4",
  rowClick: (data) => console.log(data, "the row"),
  tbodyColor: "#252733",
  paginator: true,
  pageSize: 3,
  prevNext: true,
};
