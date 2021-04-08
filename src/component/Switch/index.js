/*
 * component: switch
 * author: Eze Bernardine May
 * Date: March 16th, 2021
 */

import React, { useState } from "react";
import { Container, Main, Button, Input, Ball, Overlay } from "./styles";

const Switch = ({ click, initialState }) => {
  const [switched, setSwitched] = useState(initialState || null);

  const handleSwitch = (e) => {
    setSwitched(e.target.checked);
    click(e.target.checked);
  };

  return (
    <Container>
      <Main>
        <Button switched={switched}>
          <span>
            <Input
              type="checkbox"
              onClick={handleSwitch}
              defaultChecked={switched}
            />
            <Ball className="switch-ball" switched={switched} />
          </span>
        </Button>
        <Overlay switched={switched} />
      </Main>
    </Container>
  );
};

export default Switch;
