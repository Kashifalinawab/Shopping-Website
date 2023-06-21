import React from "react";

import "./cart.css";

const Cart = (props) => {
  const { cart, setCart, priceState, setPriceState } = props;

  const clickHandler = (cartItem) => {
    const removedItem = cart.filter((item) => item.id !== cartItem.id);
    setCart(removedItem);
    setPriceState(
      (prevPrice) => prevPrice - cartItem.price * cartItem.quantity
    );
  };

  const decrClickHandler = (cartItem) => {
    const index = cart.findIndex((product) => product.id === cartItem.id);
    if (cart[index].quantity === 1) {
      const removedItem = cart.filter((item) => item.id !== cartItem.id);
      setCart(removedItem);
      setPriceState((prevPrice) => prevPrice - cartItem.price);
    } else if (index !== -1) {
      cart[index].quantity = cart[index].quantity - 1;
      setCart([...cart]);
      setPriceState((prevPrice) => prevPrice - cartItem.price);
    }
  };
  const incrClickHandler = (cartItem) => {
    const index = cart.findIndex((product) => product.id === cartItem.id);
    cart[index].quantity = cart[index].quantity + 1;
    setCart([...cart]);
    setPriceState((prevPrice) => prevPrice + cartItem.price);
  };

  const clearcart = () => {
    setCart([]);
    setPriceState(0);
  };

  const btnProperty =
    cart.length == 0 ? (
      <button onClick={() => clearcart()} disabled>
        Clear{" "}
      </button>
    ) : (
      <button onClick={() => clearcart()}>Clear </button>
    );

  return (
    <div>
      <h3>Cart</h3>
      <p>Cart Total Price:{priceState}$</p>
      {btnProperty}

      {cart.length === 0 ? (
        <h1> No Product is Added !!! </h1>
      ) : (
        cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="map_cart_Div">
              <div className="img-div">
                <img
                  src={cartItem.thumbnail}
                  alt="cartitem"
                  style={{ width: "6rem", height: "8rem" }}
                  id="img-product"
                />
              </div>

              <div className="decri-div">
                <h5>{cartItem.brand}</h5>

                <h4>{cartItem.title}</h4>
                <p>
                  Quantity: {cartItem.quantity}{" "}
                  {cartItem.quantity > 1 ? (
                    <span>Items</span>
                  ) : (
                    <span>Item</span>
                  )}
                </p>
                <p>Price : {cartItem.price * cartItem.quantity} $</p>
                <div className="btn-div">
                  <div>
                    <button onClick={() => decrClickHandler(cartItem)}>
                      {" "}
                      -{" "}
                    </button>
                    <input
                      type="text"
                      value={cartItem.quantity}
                      style={{ width: "10%", textAlign: "center" }}
                    />
                    <button onClick={() => incrClickHandler(cartItem)}>
                      +
                    </button>
                  </div>

                  <button onClick={() => clickHandler(cartItem)}>
                    {cartItem.quantity > 1 ? "Remove All" : "Remove "}
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
