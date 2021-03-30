import React from "react";

export default class PureComponent1 extends React.PureComponent {
  render() {
    const { userName } = this.props;
    alert("");
    alert("props changed");
    return (
      <div>
        <h1>Hi {userName}</h1>
      </div>
    );
  }
}
