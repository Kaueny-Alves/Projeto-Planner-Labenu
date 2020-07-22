import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const resetForm = () => {
    setInputValue(initialValue);
  };
  return [inputValue, onChange, resetForm];
};
