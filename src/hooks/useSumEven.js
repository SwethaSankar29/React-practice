import { useState } from "react";

const useSumEven = () => {
  const [value, setValue] = useState(2);
  const sum = (n) => {
    setValue(2);
    let number = Number(n);
    for (let i = 3; i <= number; i++) {
      if (i % 2 === 0) {
        setValue((prevValue) => prevValue + i);
      }
    }
  };
  return { sum, value };
};

export default useSumEven;
