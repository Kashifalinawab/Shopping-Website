import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/AuthPage";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
// import Footer from "../components/Footer";

const Routing = () => {
  const [productList, setproductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceState, setPriceState] = useState(Number);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((rsp) => setproductList(rsp.products));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              productList={productList}
              setCart={setCart}
              cart={cart}
              priceState={priceState}
              setPriceState={setPriceState}
            />
          }
        />
        {/* Footer  */}
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              productList={productList}
              setCart={setCart}
              cart={cart}
              priceState={priceState}
              setPriceState={setPriceState}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              priceState={priceState}
              setPriceState={setPriceState}
            />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Routing;
