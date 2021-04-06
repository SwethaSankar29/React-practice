import React, { useState } from "react";
import useSumEven from "./useSumEven.js";

const CustomHookAssignment = () => {
  const [num, setNum] = useState(2);
  const { sum, value } = useSumEven();
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />{" "}
      <button onClick={() => sum(num)}> Submit </button>{" "}
      <h2>
        Sum of {num}
        Even number is: {value}{" "}
      </h2>{" "}
    </div>
  );
};

export default CustomHookAssignment;
