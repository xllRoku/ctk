import { SetStateAction, useState } from "react";
interface tp {
  type: string;
}
export const useField = ({ type }: tp) => {
  const [value, setValue] = useState("");

  const onChange = (event: { target: { value: SetStateAction<string> } }) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
