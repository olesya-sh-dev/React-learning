import { ActionType, TOGGLE_CONSTANT } from "./UncontrolledAccordion";

export const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return !state;

    default:
      throw new Error("I don't understand this action");
  }
  return state;
};
