import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion stories ",
  component: Accordion,
};

const callback = action("Accordion mode change event fired");

export const MenuCollapsedMode = () => (
  <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
);
export const UsersUncollapsedMode = () => (
  <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />
);

export const ModeChanging = () => {
  const [value, setValue] = useState(false);
  return (
    <Accordion
      titleValue={"Users"}
      collapsed={value}
      onChange={() => setValue(!value)}
    />
  );
};
