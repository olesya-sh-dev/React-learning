import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};
export function UncontrolledAccordion(props: AccordionPropsType) {
  // const collapsed = true;
  let [collapsed, setCollapsed] = useState(false);

  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
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
