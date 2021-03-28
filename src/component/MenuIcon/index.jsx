/*
 * component: menuicon
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React, { useState } from "react";
import { MenuIconStyle } from "./styles";

const MenuIcon = ({ click, showMenuDropdown, color }) => {
  return (
    <MenuIconStyle showMenuDropdown={showMenuDropdown} color={color}>
      <button onClick={click}>
        <div className="menuIcon-container">
          <div className="menuIcon-div" />
        </div>
      </button>
    </MenuIconStyle>
  );
};
export default MenuIcon;
