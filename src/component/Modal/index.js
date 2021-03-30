/*
 * component: modal
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React, { useImperativeHandle, forwardRef, useState } from "react";
import {
  ModalWrap,
  Main,
  Body,
  Header,
  HeaderBox,
  Title,
  BodyContent,
  Content,
  HeaderIconContainer,
} from "./styles";
import PropTypes from "prop-types";
import { CloseIcon } from "../../assets/svg";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { theme } from "../../config/theme";
import { ThemeProvider } from "styled-components";

const Modal = forwardRef(
  ({ show, handleClose, title, noHeader, children }, ref) => {
    let buttonRef = React.createRef();

    useImperativeHandle(ref, () => ({
      /**
       * prevent the entire body of the app from scrolling.
       * This is to allow easy focus/scroll on the modal
       */
      preventBodyScroll() {
        buttonRef.current &&
          (buttonRef.current.ownerDocument.body.style.overflow = "hidden");
      },
      /**
       * Returns  entire body scrolling effect.
       */
      addBodyScroll() {
        buttonRef.current &&
          (buttonRef.current.ownerDocument.body.style.overflow = "");
      },
    }));

    // closes the modal
    const close = () => {
      buttonRef.current.ownerDocument.body.style.overflow = "";
      handleClose();
    };

    return (
      <ThemeProvider theme={theme}>
        <ModalWrap
          show={show} // handles the calling and removal of the modal
          ref={buttonRef}
        >
          <Main
            show={show} // handles the calling and removal of the modal
          >
            <div className="cannotInspect" onClick={() => close()} />

            <Body>
              <BodyContent>
                <Header noHeader={noHeader}>
                  <HeaderBox>
                    {noHeader ? null : <Title>{title.toUpperCase()}</Title>}
                  </HeaderBox>

                  <HeaderIconContainer onClick={() => close()}>
                    <CloseIcon width="15px" height="15px" color="#b3b3b9" />
                  </HeaderIconContainer>
                </Header>

                <OverFlowScrollBar>
                  <Content>{children}</Content>
                </OverFlowScrollBar>
              </BodyContent>
            </Body>
          </Main>
        </ModalWrap>
      </ThemeProvider>
    );
  }
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  noHeader: PropTypes.bool,
  title: PropTypes.string,
  ref: PropTypes.oneOfType([
    // PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Modal;
