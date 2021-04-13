import React from "react";
import { Container, Close } from "./styles";
import {
  AlertIcon,
  SuccessIcon,
  CloseIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
} from "../../assets/svg";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Alert = ({ type, duration, children }) => {
  // handle the display of the alert component.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout =
      duration &&
      /**
       * visible determines if the alert component is displayed or not is set to false after a a period of time.
       *
       * If no duration is set,
       * it remains true making the alert component always visible.
       */
      setTimeout(() => {
        setVisible(false);
      }, duration);

    return () => timeout && clearTimeout(timeout); //Clears the setTimeout to avoid errors
  }, [children, duration]);

  return (
    <>
      {visible ? (
        <Container type={type}>
          {type === "success" ? (
            <SuccessIcon width="20px" height="20px" />
          ) : type === "error" ? (
            <ErrorIcon width="20px" height="20px" />
          ) : type === "warning" ? (
            <WarningIcon width="20px" height="20px" />
          ) : type === "info" ? (
            <InfoIcon width="20px" height="20px" />
          ) : null}

          {type === "warning" ? (
            <Close onClick={() => setVisible(false)}>
              <CloseIcon width="13px" height="13px" />
            </Close>
          ) : null}

          {children}
        </Container>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "success", "warning"]),
  children: PropTypes.elementType,
  duration: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};
export default Alert;
