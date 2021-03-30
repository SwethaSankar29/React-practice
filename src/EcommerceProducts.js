import React from "react";

const EcommerceProducts = ({ products, title, sayHello }) => {
  console.log("EcommerceProducts ran");
  return (
    <>
      <ul>
        {title}
        {products.map((val, index) => {
          return <li key={index}>{val.name}</li>;
        })}
      </ul>
      <button onClick={sayHello}> Say Hello</button>
    </>
  );
};

// export default EcommerceProducts;
const memorizedComponentsProducts = React.memo(EcommerceProducts);

export default memorizedComponentsProducts;
