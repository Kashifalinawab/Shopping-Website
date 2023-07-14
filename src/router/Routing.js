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
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetcherFun = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await resp.json();
    if (data && data.products) {
      setproductList(data.products);
      setTotalPage(data.total / 10);
    }
  };

  useEffect(() => {
    fetcherFun();
  }, [page]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?limit=100")
  //     .then((resp) => resp.json())
  //     .then((rsp) => setproductList(rsp.products))
  // }, []);

  console.log(totalPage);

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
              page={page}
              setPage={setPage}
              totalPage={totalPage}
              setTotalPage={setTotalPage}
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
