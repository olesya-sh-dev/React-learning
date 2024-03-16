import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onClick: (collapsed: boolean) => void;
};
function Accordion(props: AccordionPropsType) {
  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => props.onClick(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle is rendering");
  return (
    <div>
      <h3 onClick={() => props.onClick()}>{props.title}</h3>
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

export default Accordion;
