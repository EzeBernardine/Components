/*
 * component: modal
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React, { useImperativeHandle, forwardRef, useState } from "react";
import { ModalWrap } from "./styles";
import PropTypes from "prop-types";
import { CloseIcon } from "../../assets/svg";
import { OverFlowScrollBar } from "../OverflowScroll/styles";

const Modal = forwardRef(
  ({ show, handleClose, modalTitle, noHeader, children }, ref) => {
    let buttonRef = React.createRef();

    // ensures that the container that closes the modal can not be inspected.
    const [canClose, setCanClose] = useState(false);

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
      <ModalWrap
        show={show} // handles the calling and removal of the modal
        ref={buttonRef}
        canClose={canClose}
        noHeader={noHeader}
        onMouseEnter={() => setCanClose(true)}
        onMouseLeave={() => setCanClose(false)}
      >
        {canClose ? <div className={"overlay"} /> : null}

        <div className="main">
          {canClose ? (
            <div className="cannotInspect" onClick={() => close()} />
          ) : null}

          <div className="modalBody">
            <div className="modalWrap">
              <header>
                <div className="modalHead">
                  <h2>{modalTitle && modalTitle.toUpperCase()}</h2>
                </div>
                <span className="closeBtn" onClick={() => close()}>
                  <CloseIcon width="15px" height="15px" color="#b3b3b9" />
                </span>
              </header>

              <OverFlowScrollBar className="modalContainer">
                {children}
              </OverFlowScrollBar>
            </div>
          </div>
        </div>
      </ModalWrap>
    );
  }
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  noHeader: PropTypes.bool,
  modalTitle: PropTypes.string,
  ref: PropTypes.oneOfType([
    // PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Modal;
