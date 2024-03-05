export const redStyle = {
  backgroundColor: "red",
};

export const greenStyle = {
  backgroundColor: "green",
};
export const deFaultStyle = {
  backgroundColor: "transparent",
};
export const roundStyle = {
  borderRadius: "50%",
  width: "15px",
  height: "15px",
};
type ButtonType = {
  title?: string;
  styleOnOff: object;
};

export const Button = ({ styleOnOff, title }: ButtonType) => {
  return (
    <button title={title} style={{ height: "15px", ...styleOnOff }}>
      {title}
    </button>
  );
};
