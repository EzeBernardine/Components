import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Layout,
  Content,
  Overlay,
  DropdownWrap,
  Dropdown,
  ListItems,
  Item,
} from "./styles";
import { DownIcon, MoreIcon } from "../../assets/svg";
import { generateID } from "../../lib/generateID";
import { truncate } from "../../lib/factory.lib";

const DropdownModal = ({
  data,
  padding,
  click,
  initial,
  direction,
  canClick = true,
  weight,
  icon,
  type,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setContent] = useState(initial || "Select");

  const handleSelectOption = (value) => {
    setContent(value);
    setOpenModal(!openModal);
    click(value);
  };

  return (
    <Wrapper>
      <Layout
        onClick={() => canClick && setOpenModal(!openModal)}
        canClick={canClick}
        padding={padding}
      >
        {type === "showmore" ? null : (
          <Content canClick={canClick} weight={weight}>
            {truncate(selected, 20) || "Select"}
          </Content>
        )}

        {type === "showmore" ? (
          icon ? (
            icon
          ) : (
            <MoreIcon width="10px" height="10px" />
          )
        ) : (
          <DownIcon width="10px" height="10px" />
        )}
      </Layout>

      {openModal ? (
        <Overlay onClick={() => canClick && setOpenModal(!openModal)} />
      ) : null}

      {openModal && (
        <DropdownWrap>
          <Dropdown direction={direction}>
            {data.map((item) => (
              <ListItems
                onClick={() => canClick && handleSelectOption(`${item.list}`)}
                key={generateID(15)}
              >
                <Item>{item.list}</Item>
              </ListItems>
            ))}
          </Dropdown>
        </DropdownWrap>
      )}
    </Wrapper>
  );
};

DropdownModal.propTypes = {
  data: PropTypes.array,
  padding: PropTypes.string,
  click: PropTypes.func,
  initial: PropTypes.string,
  direction: PropTypes.oneOf(["start", "end"]),
  canClick: PropTypes.bool,
  weight: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.oneOf(["showmore"]),
};
export default DropdownModal;
