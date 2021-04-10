/*
 * component: Custom Component
 * author: Eze Bernardine May
 * Date: June 23, 2020
 */

import React, { useState } from "react";
import propTypes from "prop-types";
import { TabWrapper, TabList } from "./styles";
import Tab from "./Tab";
import { generateID } from "../../lib/generateID";

const Tabs = ({ click, children, nonActiveColor, activeColor, bgColor }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    click(tab);
    setActiveTab(tab);
  };
  return (
    <TabWrapper activeColor={activeColor}>
      <TabList>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={generateID(15)}
              label={label}
              nonActiveColor={nonActiveColor}
              bgColor={bgColor}
              onClick={onClickTabItem}
            />
          );
        })}
      </TabList>
      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </TabWrapper>
  );
};

Tabs.propTypes = {
  children: propTypes.instanceOf(Array).isRequired,
};
export default Tabs;
