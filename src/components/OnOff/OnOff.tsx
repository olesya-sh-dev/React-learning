import React from "react";
import {
  Button,
  greenStyle,
  redStyle,
  roundStyle,
  deFaultStyle,
} from "../Button/Button";

type OnOffPropsType = {
  on: boolean;
};
export const OnOff = (props: OnOffPropsType) => {
  return (
    <div>
      {props.on && (
        <div>
          <Button title="ON" styleOnOff={redStyle} />
          <Button title="OFF" styleOnOff={deFaultStyle} />
          <Button styleOnOff={{ ...roundStyle, ...redStyle }} />
        </div>
      )}
      {!props.on && (
        <div>
          <Button title="ON" styleOnOff={deFaultStyle} />
          <Button title="OFF" styleOnOff={greenStyle} />
          <Button styleOnOff={{ ...roundStyle, ...greenStyle }} />
        </div>
      )}
    </div>
  );
};

/* props.on && (
    <div>
      <button style={{ backgroundColor: "red" }}>ON</button>
      <button>OFF</button>
      <button
        style={{
          borderRadius: "50%",
          width: "15px",
          height: "15px",
          backgroundColor: "red",
        }}
      ></button>
    </div>
  );
  !props.on && (
    <div>
      <button>ON</button>
      <button style={{ backgroundColor: "green" }}>OFF</button>
      <button
        style={{
          borderRadius: "50%",
          width: "15px",
          height: "15px",
          backgroundColor: "green",
        }}
      ></button>
    </div>
  ); */
