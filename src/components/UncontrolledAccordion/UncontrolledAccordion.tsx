import { useReducer, useState } from "react";
import { TOGGLE_CONSTANT, reducer } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
};


export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion is rendering");
  // const collapsed = true;
  //let [collapsed, setCollapsed] = useState(false);
  let [state, dispatch] = useReducer(reducer, {
    collapsed: false,});

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
      {!state.collapsed && <AccordionBody />}
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
