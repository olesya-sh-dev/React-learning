import { StateType, reducer } from "./reducer";

test("collapsed should be true", () => {
  //data)
  const state: StateType = {
    collapsed: false,
  };

  //action
  const newState = reducer(state, { type: "TOGGLE-COLLAPSED" });

  //expectation
  expect(newState.collapsed).toBe(true);
});
test("collapsed should be false", () => {
  //data)
  const state: StateType = {
    collapsed: true,
  };

  //action
  const newState = reducer(state, { type: "TOGGLE-COLLAPSED" });

  //expectation
  expect(newState.collapsed).toBe(false);
});
test("reducer should throw error because action type is incorrect", () => {
  //data)
  const state: StateType = {
    collapsed: true,
  };

  //action

  //expectation
  expect(() => {
    reducer(state, { type: "FAKE" });
  }).toThrowError();
});
