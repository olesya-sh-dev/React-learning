import React from "react";

type PropsType = {
  on: boolean;
  onClick: (value: boolean) => void;
};

function OnOffFromLesson(props: PropsType) {
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: !props.on ? "red" : "white",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red",
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onClick(props.on);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onClick(!props.on);
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default OnOffFromLesson;
