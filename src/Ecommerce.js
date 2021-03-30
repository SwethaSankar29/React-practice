import { useState, useEffect, useCallback } from "react";
import EcommerceProducts from "./EcommerceProducts";

const Ecommerce = () => {
  const [products, setProducts] = useState([
    { name: "Tshirt", price: "1000" },
    { name: "Trousers", price: "2000" },
    { name: "Hat", price: "500" },
  ]);
  const [title, setTitle] = useState("defaultTitle");
  const [heading, setHeading] = useState("defaultHeading");
  const [message, setMessage] = useState("defaultMessage");
  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };
  //this will run only once the component is loaded
  useEffect(() => {
    console.log("title changed");
  }, [title]);
  const popularProduct = () => {
    setProducts([
      { name: "Tshirt", price: "1000" },
      { name: "Trousers", price: "2000" },
      { name: "Hat", price: "500" },
    ]);
  };
  const sayHello = () => {
    alert(message);
  };
  const memorizedSayHello = useCallback(sayHello, [message]);
  return (
    <div>
      Heading={heading}
      <h1>{title}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      ></input>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <EcommerceProducts
        products={products}
        title={title}
        sayHello={memorizedSayHello}
      ></EcommerceProducts>
    </div>
  );
};
export default Ecommerce;
