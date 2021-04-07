/*
 * component: MenuIcon
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React from "react";
import { Container, Wrapper, Icon } from "./styles";
import PropTypes from "prop-types";

const MenuIcon = ({ click, showMore, color }) => {

  return (
    <Container>
      <Wrapper>
        <Icon
          showMore={showMore}
          color={color}
          onClick={click}
        />
      </Wrapper>
    </Container>
  );
};
export default MenuIcon;

MenuIcon.propTypes = {
  click: PropTypes.func,
  showMore: PropTypes.bool,
};
