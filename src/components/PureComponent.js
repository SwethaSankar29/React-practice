import React from "react";

export default class PureComponent extends React.PureComponent {
  render() {
    const { userName } = this.props;
    return (
      <div>
        <h1> Hi {userName} </h1> {alert("props changed")}{" "}
      </div>
    );
  }
}
