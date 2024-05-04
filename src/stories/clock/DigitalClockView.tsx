import { ClockViewPropsType } from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  return (
    <div>
      <span>{date.getHours()}</span>:<span>{date.getMinutes()}</span>:
      <span>{date.getSeconds()}</span>
    </div>
  );
};
