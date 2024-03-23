import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};
export function Accordion(props: AccordionPropsType) {
  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle is rendering");
  return (
    <div>
      <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
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
