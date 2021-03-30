import { useState, useEffect, useLayoutEffect } from "react";

function WithoutUsingLayout(props) {
  const [no, setNO] = useState(1);
  //   useEffect(() => {
  //     for (let i = 0; i < 100; i++) {}
  //     if (no == 1) {
  //       setNO(Math.floor(Math.random() * 1000));
  //     }f
  //   }, [no]);
  useLayoutEffect(() => {
    //for (let i = 0; i < 100; i++) {}
    if (no == 1) {
      setNO(Math.floor(Math.random() * 1000));
    }
  }, [no]);
  return (
    <div>
      {props.children}
      Number Value={no}
      <br></br>
      <button
        onClick={() => {
          setNO(1);
        }}
      >
        Set number value
      </button>
    </div>
  );
}
export default WithoutUsingLayout;
