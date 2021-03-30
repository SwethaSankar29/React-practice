import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Counter from "./Counter";
import { sayHi } from "./Counter";
import Ecommerce from "./Ecommerce";
import Memo from "./memo";
import Products from "./Products";
import { React, useState } from "react";
import Cart from "./cart";
import WithoutUsingLayout from "./withoutUseLayout";
import HocExample from "./HocExample";
import HookUseExample from "./customHook";
import LocalStorageHook from "./LocalStorageHook";
import PureComponentExample from "./PureComponent";
import PureComponent1 from "./PureComponent1";

function App() {
  axios.get("products.json").then(function (res) {
    console.log(res.data);
  });
  const [showCart, setCondition] = useState(false);

  return (
    <div className="App">
      {/* <Ecommerce /> 
      <Counter /> {sayHi("Hi")}
      <Memo></Memo>
      <Products></Products>
      <button onClick={() => setCondition(!showCart)}>Toggle</button>
      {showCart && <Cart />}
      <WithoutUsingLayout></WithoutUsingLayout>
       <HocExample></HocExample> 
             <HookUseExample></HookUseExample>
              <LocalStorageHook></LocalStorageHook>
*/}
      <PureComponentExample />
      {/* <PureComponent1 userName={"swetha"} /> */}
    </div>
  );
}

export default App;
