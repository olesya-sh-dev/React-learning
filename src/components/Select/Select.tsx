import React, { DetailedHTMLProps, MouseEventHandler, useEffect } from "react";
import { HTMLAttributes, useState } from "react";
import styles from "./Select.module.css";
type ItemType = {
  title: string;
  value: any;
};
type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);
  const toggleItems = () => {
    setActive((active) => !active);
  };

  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  };

  const onKeyUP = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false);
    }
  };
  return (
    <div className={styles.select} onKeyUp={onKeyUP} tabIndex={0}>
      <span className={styles.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={styles.items}>
          {props.items.map((i, index) => (
            <div
              onMouseEnter={() => setHoveredElementValue(i.value)}
              className={
                styles.item + " " + (hoveredItem === i ? styles.selected : "")
              }
              key={index}
              onClick={() => onItemClick(i.value)}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// export function Select(props: SelectPropsType) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSelect = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (selectedItem: ItemType) => {
//     props.onChange && props.onChange(selectedItem.value);

//     setIsOpen(false);
//   };
//   const handleBlur = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <div onClick={toggleSelect}>{props.items[props.value].title}</div>
//       {isOpen && (
//         <div>
//           {props.items!.map((i, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(i)}
//               onBlur={handleBlur}
//             >
//               {props.items[props.value] ? props.items[props.value].title : ""}
//               {i.title}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

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
