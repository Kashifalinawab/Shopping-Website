import React, { useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Products = (props) => {
  const navigate = useNavigate();

  const {
    productList,
    setCart,
    cart,
    setPriceState,
    page,
    setPage,
    totalPage,
    setTotalPage,
  } = props;
  // console.log(productList);

  const detailhandler = (id) => {
    navigate(`/product/${id}`);
  };

  const clickHandler = (product) => {
    // setCart((prev) => [...prev, product]);
    const index = cart.findIndex((item) => item.id === product.id);
    setPriceState((prevPrice) => prevPrice + product.price);
    if (index === -1) {
      const updatedCart = cart.concat({ ...product, quantity: 1 });
      setCart(updatedCart);
    } else {
      cart[index].quantity += 1;
      // const updatedCart=[]
      setCart([...cart]);
    }
  };

  const navigateHandler = () => {
    navigate("/cart");
  };

  const productCount = cart.length === 0 ? "" : cart.length;

  const selectHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPage &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // function selectLeftHandler(selectedPage) {
  //   setPage(selectedPage - 1);
  // }
  // function selectRightHandler(selectedPage) {
  //   setPage(selectedPage + 1);
  // }

  return (
    <div>
      <div className="map-div">
        {cart.length > 0 ? (
          <span id="cart-logo" onClick={navigateHandler}>
            <HiShoppingCart />
            <span id="item-count">{productCount}</span>
          </span>
        ) : (
          ""
        )}
        {productList.length === 0
          ? "Loading..."
          : productList.map((product) => {
              return (
                <div key={product.id} className="product-card">
                  <img
                    src={product.thumbnail}
                    alt="product-title"
                    id="product-img"
                    onClick={() => {
                      detailhandler(product.id);
                    }}
                  />
                  <li>{product.title}</li>
                  <button
                    onClick={() => clickHandler(product)}
                    className="add-btn"
                  >
                    Add
                  </button>
                </div>
              );
            })}
      </div>
      {productList.length > 0 && (
        <div className="pagenation">
          <span
            className={page > 1 ? "" : "pagenation__disable"}
            onClick={() => selectHandler(page - 1)}
          >
            ◀️
          </span>

          {[...Array(totalPage)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "selected__span" : ""}
                onClick={() => selectHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < totalPage ? "" : "pagenation__disable"}
            onClick={() => selectHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default Products;
