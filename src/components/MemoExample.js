import React from "react";

const MemoExample = ({ userName }) => {
  return (
    <div>
      <h1>Hi {userName}</h1>
      {alert("props changed")}
    </div>
  );
};
export default React.memo(MemoExample);
