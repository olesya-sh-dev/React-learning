import React, { DetailedHTMLProps, MouseEventHandler } from "react";
import { HTMLAttributes, useState } from "react";

type ItemType = {
  title: string;
  value: any;
};
type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};
export function Select(props: SelectPropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedItem: ItemType) => {
    props.onChange(selectedItem.value);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={toggleSelect}>{props.items[props.value].title}</div>
      {isOpen && (
        <div>
          {props.items.map((i, index) => (
            <div key={index} onClick={() => handleOptionClick(i)}>
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// export function Select(props: SelectPropsType) {
//   const [selectValue, setSelectValue] = useState(props.value);
//   const onChangeCallback = (e: MouseEventHandler<HTMLDivElement>) => {
//     setSelectValue();
//   };
//   return (
//     <div>
//       <div value={selectValue} onClick={onChangeCallback}></div>
//       {props.items.map((i, index) => (
//         <div key={index}>{i.title}</div>
//       ))}
//     </div>
//   );
// }
