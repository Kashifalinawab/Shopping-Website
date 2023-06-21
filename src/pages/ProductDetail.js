import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./prodcutDetaill.css";

const ProductDetail = ({
  productList,
  setCart,
  cart,
  priceState,
  setPriceState,
}) => {
  // console.log(productList);
  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const itemDetail = productList.find((product) => product.id == id);

  const [differentImg, setDifferentImg] = useState([]);

  const gallary = itemDetail.images.map((img) => (
    <img
      src={img}
      alt="additionPics"
      id="gallary-img"
      onClick={() => setDifferentImg(img)}
    />
  ));

  console.log(itemDetail.thumbnail);

  const addHandler = (product) => {
    // setCart((prev) => [...prev, item]);
    setPriceState((prevPrice) => prevPrice + product.price);

    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const updatedCart = cart.concat({ ...product, quantity: 1 });
      setCart(updatedCart);
      navigate("/cart");
    } else {
      cart[index].quantity += 1;

      setCart([...cart]);
      navigate("/cart");
    }
  };

  return (
    <div>
      <h3>{itemDetail.brand}</h3>
      <h4>{itemDetail.title}</h4>

      <img
        src={differentImg.length == 0 ? itemDetail.thumbnail : differentImg}
        alt="item"
        id="displayed-Img"
      />
      <div className="short-img-gallery">{gallary}</div>
      <br />
      <button onClick={() => addHandler(itemDetail)} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default ProductDetail;
