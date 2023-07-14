import React from "react";
import Products from "../components/Products";

import "./productlist.css";

const ProductList = ({
  productList,
  setCart,
  cart,
  setPriceState,
  page,
  setPage,
  totalPage,
  setTotalPage,
}) => {
  // console.log(setCart);
  return (
    <div>
      <Products
        productList={productList}
        setCart={setCart}
        cart={cart}
        setPriceState={setPriceState}
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        setTotalPage={setTotalPage}
      />
    </div>
  );
};

export default ProductList;
