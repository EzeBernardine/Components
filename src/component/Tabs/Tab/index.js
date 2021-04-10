import React from "react";
import propTypes from "prop-types";
import { ListItem } from "../styles";

const Tab = ({ activeTab, label, onClick, bgColor, nonActiveColor }) => {
  const onClickTab = () => onClick(label);

  return (
    <ListItem
      className={activeTab === label ? "tab-list-active" : ""}
      onClick={onClickTab}
      bgColor={bgColor}
      nonActiveColor={nonActiveColor}
    >
      {label}
    </ListItem>
  );
};

Tab.propTypes = {
  activeTab: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Tab;
