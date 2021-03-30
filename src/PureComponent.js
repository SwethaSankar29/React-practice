import React, { Component } from "react";
import PureComponent1 from "./PureComponent1";

class PureComponentExample extends Component {
  constructor(props) {
    super(props);
    this.changeUserName = this.changeUserName.bind(this);
    this.state = {
      name: "",
      showComponent: false,
    };
  }

  changeUserName = () => {
    this.setState({ showComponent: true });
  };
  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({ showComponent: false });
            this.setState({ name: e.target.value });
          }}
          placeholder="Enter Name"
        />{" "}
        <button onClick={() => this.changeUserName()}>Submit</button>
        {this.state.showComponent && (
          <PureComponent1 userName={this.state.name} />
        )}
      </div>
    );
  }
}
export default PureComponentExample;
