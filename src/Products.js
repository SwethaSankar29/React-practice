import { React, useState } from "react";
import axios from "axios";
function Product() {
  const [data, setData] = useState([]);

  let [name, setName] = useState("Default name");
  let [price, setPrice] = useState(-1000);
  axios.get("/products.json").then((res) => {
    setData(res.data);
  });
  const addProduct = () => {
    let newProduct = {
      name,
      price,
    };
    setData(data.concat(newProduct));
  };
  return (
    <>
      {data.map((val) => (
        <div>{val.name}</div>
      ))}
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <input
        type="number"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <br></br>
      <button onClick={addProduct}>AddProduct</button>
    </>
  );
}
export default Product;
