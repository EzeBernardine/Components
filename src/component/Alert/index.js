import React from "react";
import { Container } from "./styles";
import { AlertIcon, SuccessIcon } from "../../assets/svg";
import { useEffect, useState } from "react";

const Alert = ({ type, duration, children }) => {
  /**
   * handle the display of the alert component.
   * It is set to false after a a period of time, though if no duration is set, i
   * it remains true msking the alert component always visible
   */
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout =
      duration &&
      setTimeout(() => {
        setVisible(false);
      }, duration);
    return () => clearTimeout(timeout); //Clears the setTimeout to avoid errors
  });

  return (
    <>
      {visible ? (
        <Container type={type}>
          {type === "success" ? (
            <SuccessIcon width="15px" height="15px" />
          ) : (
            <AlertIcon width="15px" height="15px" />
          )}
          {children}
        </Container>
      ) : null}
    </>
  );
};

export default Alert;
