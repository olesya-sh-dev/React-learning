import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};
function UncontrolledAccordion(props: AccordionPropsType) {
  // const collapsed = true;
  let [collapsed, setCollapsed] = useState(false);

  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
      />
      {/* <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        Toggle
      </button> */}
      {!collapsed && <AccordionBody />}
    </div>
  );
}

// function Accordion(props: AccordionPropsType) {
//   console.log("Accordion is rendering");

//   if (props.collapsed === true) {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//         <AccordionBody />
//       </div>
//     );
//   }
// }
type AccordionTitlePropsType = {
  title: string;
  setCollapsed: (collapsed: boolean) => void;
  collapsed: boolean;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle is rendering");
  return (
    <div>
      <h3
        onClick={() => {
          props.setCollapsed(!props.collapsed);
        }}
      >
        {props.title}
      </h3>
    </div>
  );
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

export default UncontrolledAccordion;
