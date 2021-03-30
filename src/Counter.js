import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={increase}> Increase Count </button>{" "}
      <button onClick={decrease}> Decrease Count </button>{" "}
      <button onClick={reset}> Reset Count </button> <br />
      Count = {count}{" "}
    </div>
  );
}

function sayHi(params) {
  //alert(params);
}
export default Counter;
export { sayHi };
