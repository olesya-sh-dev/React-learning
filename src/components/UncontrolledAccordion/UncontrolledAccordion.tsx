import { useReducer, useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

type ActionType = {
  type: string;
};
const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";
const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return !state;

    default:
      throw new Error("I don't understand this action");
  }
  return state;
};
  
export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion is rendering");
  // const collapsed = true;
  //let [collapsed, setCollapsed] = useState(false);
  let [collapsed, dispatch] = useReducer(reducer, false);

  console.log("Accordion is rendering");

  return (
    <div>
      {/* <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      /> */}

      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: TOGGLE_CONSTANT });
        }}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle is rendering");
  return <h3 onClick={(e) => props.onClick()}>--{props.title}--</h3>;
}
function AccordionBody() {
  console.log("AccordionBody is rendering");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
