import { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnalogClockView } from "./AnalogClockView";

type PropsType = {
  mode: "digital" | "analog";
  //date: Date
};
const to2digits = (num: number) => (num < 10 ? "0" + num : num);

export const Clock = (props: PropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // const secondsString = date.getSeconds().toString().padStart(2, '0')

  const secondsString = to2digits(date.getSeconds());
  const minutesString = to2digits(date.getMinutes());
  const hoursString = to2digits(date.getHours());

  let view;

  switch (props.mode) {
    case "analog":
      view = <AnalogClockView date={date} />;
      break;
    case "digital":
    default:
      view = <DigitalClockView date={date} />;
  }

  return <div>{view}</div>;
};
export type ClockViewPropsType = {
  date: Date;
};
