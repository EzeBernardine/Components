import React, { useState } from "react";
import MenuIcon from "./";

const Menu_Icon = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <MenuIcon
      click={() => setShowMore(!showMore)}
      showMore={showMore}
      color="red"
    />
  );
};

export default {
  title: "MenuIcon",
  component: Menu_Icon,
};

const Template = (args) => <Menu_Icon {...args} />;

export const _MenuIcon = Template.bind({});
_MenuIcon.args = {
  showMore: Function,
};
