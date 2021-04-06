import React from "react";

export default class PureComponent extends React.PureComponent {
  render() {
    const { userName } = this.props;
    const changeUserName = () => {
      alert("props changed");
    };

    return (
      <div>
        <h1> Hi {userName} </h1> {changeUserName()}{" "}
      </div>
    );
  }
}
