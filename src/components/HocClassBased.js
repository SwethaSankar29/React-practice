import { Component } from "react";
import increaseCounter from "./HocClassBasedExample";

class HocClassBased extends Component {
  render() {
    const { count, incrementCount, decrementCount, reset } = this.props;
    return (
      <div>
        <button onClick={incrementCount}> Increment </button>{" "}
        <button onClick={decrementCount}> Decrement </button>{" "}
        <button onClick={reset}> Reset value </button> {" Value is " + count}
      </div>
    );
  }
}
export default increaseCounter(HocClassBased);
