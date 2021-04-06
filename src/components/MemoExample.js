import React, { Component, memo } from "react";

class MemoExample extends Component {
  render() {
    const { userName } = this.props;
    const changeUserName = () => {
      alert("props changed");
    };

    return (
      <div>
        <h1>Hi {userName}</h1>
        {changeUserName()}
      </div>
    );
  }
}
export default memo(MemoExample);
