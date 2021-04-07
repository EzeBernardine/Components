import React, { useState } from "react";
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
import {
  RiArrowDownSLine as UpArrow,
  RiArrowUpSLine as DownArrow,
  RiCheckLine as Tick,
} from "react-icons/ri";
import { FiMoreVertical as OptionIcon } from "react-icons/fi";
import { generateID } from "../../lib/generateID";
import { truncate } from "../../lib/factory.lib";

export const DropdownModal = ({
  dropDownData,
  dropBk,
  dropHovBk,
  dropCol,
  click,
  initial,
  left,
  right,
  maxHeight,
  canClick = true,
  selectedSize,
  selectedWeight,
  selectedColor,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setContent] = useState(initial || "Select");

  const handleSelectOption = (value) => {
    setContent(value);
    setOpenModal(!openModal);
    click(value);
  };

  return (
    <Wrapper
      // dropBk={dropBk}
      dropHovBk={dropHovBk}
      dropCol={dropCol}
      left={left}
      right={right}
      maxHeight={maxHeight}
      selectedSize={selectedSize}
      selectedWeight={selectedWeight}
      selectedColor={selectedColor}
      canClick={canClick}
    >
      <Layout onClick={() => canClick && setOpenModal(!openModal)}>
        <Content>{truncate(selected, 20) || "Select"}</Content>
        <UpArrow />
      </Layout>

      {openModal ? (
        <Overlay onClick={() => canClick && setOpenModal(!openModal)} />
      ) : null}

      {openModal && (
        <DropdownWrap>
          <Dropdown>
            {dropDownData.map((item) => (
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

// export const DropdownShowMoreModal = ({
//   showMoreData,
//   dropBk,
//   dropHovBk,
//   dropCol,
//   listCol,
//   icon,
//   click,
//   right,
// }) => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleCloseModal = (value) => {
//     setOpenModal(!openModal);
//     click(value);
//   };

//   return (
//     <DropdownModalBox
//       dropBk={dropBk}
//       dropHovBk={dropHovBk}
//       dropCol={dropCol}
//       listCol={listCol}
//       right={right}
//     >
//       <div className="click" onClick={() => setOpenModal(!openModal)}>
//         {icon ? icon : <OptionIcon />}
//       </div>

//       {openModal && (
//         <div className="overlay" onClick={() => setOpenModal(!openModal)} />
//       )}

//       {openModal && (
//         <section className="showMoreModal">
//           <ul>
//             {showMoreData.map((item) => (
//               <li
//                 onClick={() => handleCloseModal(`${item.list}`)}
//                 key={generateID(15)}
//               >
//                 {/* <span className='modalIcon'>icon if any</span> */}
//                 <span className="modalText">{item.list}</span>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </DropdownModalBox>
//   );
// };
