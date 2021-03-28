import React from "react";
import { Styles } from "./styles";
import { AlertIcon, SuccessIcon } from "../../assets/svg";
import { useEffect, useState } from "react";

const Alert = ({ type, duration , reCall, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout =
      duration   &&
      setTimeout(() => {
        setVisible(false);
      }, duration);
    return () => clearTimeout(timeout);
  });
  return (
    <>
      {visible ? (
        <>
          <Styles className="App" type={type}>
            {type === "success" ? (
              <SuccessIcon width="15px" height="15px" />
            ) : (
              <AlertIcon width="15px" height="15px" />
            )}
            {children}
          </Styles>
        </>
      ) : null}
    </>
  );
};

export default Alert;
