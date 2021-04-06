import { Component } from "react";
const increaseCounter = (WrappedComponent) => {
  class HocAssignment extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    decrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    };
    reset = () => {
      this.setState({ count: 0 });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          reset={this.reset}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return HocAssignment;
};
export default increaseCounter;
