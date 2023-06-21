import React from "react";
import Products from "../components/Products";

import "./productlist.css";

const ProductList = ({
  productList,
  setCart,
  cart,

  setPriceState,
}) => {
  // console.log(setCart);
  return (
    <div>
      <Products
        productList={productList}
        setCart={setCart}
        cart={cart}
        setPriceState={setPriceState}
      />
    </div>
  );
};

export default ProductList;
