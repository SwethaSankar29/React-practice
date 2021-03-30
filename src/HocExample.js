import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import HOC from "./Hoc";
function HocExample({ userOb }) {
  return (
    <div>
      UserName : {userOb.userName}
      <br />
      Name : {userOb.name}
      <br />
      Hobbies : {userOb.hobbies}
    </div>
  );
}
const ModifiedComponent = HOC(HocExample);
export default ModifiedComponent;
