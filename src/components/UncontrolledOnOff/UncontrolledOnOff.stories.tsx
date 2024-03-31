import { action } from "@storybook/addon-actions";
import { UnControlledOnOff } from "./UncontrolledOnOff";

export default {
  title: "UncontrolledOnOff stories",
  component: UnControlledOnOff,
};

const callback = action("on or off clicked");

export const OnMode = () => (
  <UnControlledOnOff defaultOn={true} onChange={callback} />
);

export const OffMode = () => (
  <UnControlledOnOff defaultOn={false} onChange={callback} />
);
export const BugMode = () => (
  <div>Unsymc when change defaultValue when already rendered</div>
);
