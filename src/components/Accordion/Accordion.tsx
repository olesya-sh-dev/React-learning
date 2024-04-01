import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};
export function Accordion(props: AccordionPropsType) {
  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
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
type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};
function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody is rendering");
  return (
    <div>
      <ul>
        {props.items.map((i, index) => {
          return (
            <li
              onClick={() => {
                props.onClick(i.value);
              }}
              key={index}
            >
              {i.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
