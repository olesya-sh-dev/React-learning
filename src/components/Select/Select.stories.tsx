import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";

export default {
  title: "Select stories",
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState("2");

  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moscow" },
        { value: "3", title: "Kiev" },
      ]}
    />
  );
};
export const WithoutValue = () => {
  const [value, setValue] = useState(null);
  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moscow" },
        { value: "3", title: "Kiev" },
      ]}
    />
  );
};
// export const BaseExample = () => {
//   const [value, setValue] = useState<any>("2");
//   const handleChange = (value: any) => {
//     setValue(value);
//   };

//   return (
//     <Select
//       value={value}
//       onChange={handleChange}
//       items={[
//         { value: "1", title: "Minsk" },
//         { value: "2", title: "Moscow" },
//         { value: "3", title: "Kiev" },
//       ]}
//     />
//   );
// };
