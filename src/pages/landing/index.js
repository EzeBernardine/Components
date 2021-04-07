import React, { useState, useRef } from "react";
import { LandingStyle, DividerStyles } from "./styles.js";
import { RoundScale, BarScale } from "../../component/Scale";
import MenuIcon from "../../component/MenuIcon";
import { generateID } from "../../lib/generateID";
import { Flex, Grid } from "../../component/Box/styles";
import { scales, tableHead, tableContent } from "./data";
import CustomeTable from "../../component/Table";
import Modal from "../../component/Modal";
import Alert from "../../component/Alert";
import Switch from "../../component/Switch";
import Tabs from "../../component/Tabs";
import { DropdownModal } from "../../component/Dropdown";
import { dropdownModal } from "./data";

const Landing = () => {
  const [showMenuDropdown, setShowmenuDropdown] = useState(false);
  const handleDisplayMenu = () => setShowmenuDropdown(!showMenuDropdown);

  const [, setTabType] = useState("Profile Update"); //for tab section

  const [callModal, setCallModal] = useState(false); // handles the calling and removal of the modal

  const modalRef = useRef(); // the modal ref
  const showModal = () => {
    setCallModal(true);

    /**
     * preventBodyScroll is a useImperativeHandle method in the modal component
     * that ensures that the overflow in the body is retured once the modal button is clicked.
     * This ensures that the only scrollable content on the page becomes the modal content.
     */
    modalRef.current.preventBodyScroll();
  };
  
  const hideModal = () => {
    setCallModal(false);

    /**
     * addBodyScroll is a useImperativeHandle method in the modal component
     * that ensures that the overflow in the body is set to hidden once the modal button is clicked.
     */
    modalRef.current.addBodyScroll();
  };
  return (
    <LandingStyle>
      <h1>UI COMPONENTS</h1>
      <section className="scale">
        <h3>Full Scale :</h3>
        <div className="flex">
          {scales.map((scale) => (
            <RoundScale
              scale={scale}
              key={generateID(10)}
              baseColor="black"
              color="yellow"
              centerColor="green"
              thickness="95"
              noText={false}
              half={false}
              height={"200px"}
              width={"200px"}
            />
          ))}
        </div>

        <DividerStyles />

        <h3>Half Scale :</h3>
        <div className="flex">
          {scales.map((scale) => (
            <RoundScale
              scale={scale}
              key={generateID(14)}
              baseColor="black"
              color="yellow"
              centerColor="green"
              thickness="95"
              half
            />
          ))}
        </div>

        <DividerStyles />

        <Flex justifyContent="flex-start">
          <h3>Menu Icon : </h3>
          <small>Visible on mobile</small>
        </Flex>
        <div>
          <MenuIcon
            click={handleDisplayMenu}
            showMenuDropdown={showMenuDropdown}
            color="red"
          />
        </div>

        <DividerStyles />

        <h3>Bar Scale :</h3>
        <div
          className="flex"
          column="repeat(3, 1fr)"
          gap="0"
          width="max-content"
        >
          {scales.map((scale) => (
            <BarScale
              width={300}
              height={400}
              key={generateID(15)}
              headBgColor="#AEF2E5"
              rangeBgColor="#00FFCCCF"
              bottomgColor="#026854CF"
              scale={scale}
            />
          ))}
        </div>

        <DividerStyles />

        <h3>Table :</h3>
        <CustomeTable
          bottomGap="5px"
          tableHead={tableHead}
          tableBody={tableContent}
          theadColor="#9FA2B4"
          rowClick={(data) => console.log(data, "the row")}
          tbodyColor="#252733"
          paginator
          pageSize={3}
          prevNext
        />
        <DividerStyles />

        <h3>Modal :</h3>
        <button onClick={() => showModal()}>Open</button>
        <Modal
          show={callModal}
          handleClose={hideModal}
          ref={modalRef}
          noHeader={false}
          title={"Modal Title"}
        >
          {callModal ? (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              assumenda consectetur iusto? Rem, exercitationem illo perspiciatis
              veritatis omnis soluta! At nulla unde nisi explicabo tempora
              voluptates, dolor perferendis eaque quam.
            </p>
          ) : null}
        </Modal>

        <DividerStyles />

        <div className="flex start">
          <h3>Select dropdown :</h3>
          <DropdownModal
            initial=" Subjects"
            selectedWeight="bold"
            selectedColor="#8097B1"
            // dropBk="#fafafb"
            dropCol="#4D4D4C"
            right
            dropDownData={dropdownModal}
            click={(selected) => console.log(selected)}
          />
        </div>

        <DividerStyles />

        {/* <div className="flex start">
          <h3>Show more dropdown :</h3>
          <DropdownShowMoreModal
            click={(selected) => console.log(selected)}
            showMoreData={dropdownModal}
            dropHovBk="transparent"
            dropBk="transparent"
            listCol="#8097B1"
            dropCol="#333"
            right
          />
        </div> */}

        <DividerStyles />
        <div className="flex start">
          <h3>Alert</h3>

          <Alert type="error" duration={false}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
              cupiditate consectetur quidem praesentium placeat voluptates unde
              eum quisquam. Dignissimos veniam expedita quis maiores ex eaque
              reprehenderit inventore deserunt deleniti!
            </p>
          </Alert>
          <Alert type="success" duration={false}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
              cupiditate consectetur quidem praesentium placeat voluptates unde
              eum quisquam. Dignissimos veniam expedita quis maiores ex eaque
              reprehenderit inventore deserunt deleniti!
            </p>
          </Alert>
        </div>

        <DividerStyles />

        <div className="flex start">
          <h3>Switch</h3>

          <Switch
            initialState={true}
            color="#de8430"
            click={(checked) => console.log(checked)}
          />
        </div>

        <DividerStyles />

        <div className="">
          <h3>Alert</h3>

          <Tabs click={(tab) => setTabType(tab)}>
            <div label="Profile">Item 1</div>
            <div label="Security">Item 2</div>
            <div label="Account Verification">Item 3</div>
            <div label="Notification">Item 5</div>
          </Tabs>
        </div>

        <DividerStyles />
      </section>
    </LandingStyle>
  );
};

export default Landing;
