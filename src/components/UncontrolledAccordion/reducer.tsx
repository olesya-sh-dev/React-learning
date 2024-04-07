


export type ActionType = {
  type: string;
};
export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";

type StatType = {
  collapsed: boolean;
}
export const reducer = (state: StatType, action: ActionType):StatType => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return { ...state, collapsed: !state.collapsed };

    default:
      throw new Error("I don't understand this action");
  }
  return state;
};
