import { useState, useMemo } from "react";

function Memo() {
  let [count, setCount] = useState(0);
  let [initialVal, setInitialVal] = useState(1);

  const complexCalculation = (mul) => {
    console.log("intial sum value", mul);
    for (let i = 0; i < 4; i++) {
      mul = mul * 4;
      console.log("ran");
    }
    console.log("multiple calculated again ", mul);
    return mul;
  };
  const increase = () => {
    setCount(count + 1);
  };
  const increaseInitialVal = () => {
    setInitialVal(initialVal + 1);
  };
  const OptimizeComplexCalculation = useMemo(
    () => complexCalculation(initialVal),
    [initialVal]
  );
  return (
    <div>
      <button onClick={increase}> Increase Count </button>
      <div>{count}</div>
      <button onClick={increaseInitialVal}> Increase Initial value </button>
      <p>value={OptimizeComplexCalculation}</p>
    </div>
  );
}

export default Memo;
