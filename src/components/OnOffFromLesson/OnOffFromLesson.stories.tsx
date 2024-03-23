import { action } from "@storybook/addon-actions";
import { OnOffFromLesson } from "./OnOffFromLesson";
import { useState } from "react";

export default {
  title: "OnOffFromLesson stories",
  component: OnOffFromLesson,
};

const callback = action("on or off clicked");

export const OnMode = () => <OnOffFromLesson on={true} onChange={callback} />;
export const OffMode = () => <OnOffFromLesson on={false} onChange={callback} />;
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOffFromLesson on={value} onChange={setValue} />;
};
