import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
const HOC = (InputComponent) => {
  const Abc = (props) => {
    const [userOb, setUserOb] = useState({});
    useEffect(() => {
      axios.get("user.json").then((res) => {
        setUserOb(res.data);
      });
    }, []);
    return <InputComponent userOb={userOb} {...props}></InputComponent>;
  };
  return Abc;
};
export default HOC;
