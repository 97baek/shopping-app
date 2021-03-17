import React, { useState } from "react";

function Product({ product, productList, cart }) {
  const [cartList, setCartList] = useState(cart);
  const addToCart = () => {
    setCartList([...cartList, product]);
    console.log(cartList);
  };
  return (
    <>
      <li className="product">
        <img src={product.image} />
        <button onClick={addToCart} className="btn add-to-cart">
          🛒
        </button>
        <p className="product-name">{product.productName}</p>
        <p className="price">
          <span>{product.price}</span>원
        </p>
      </li>
    </>
  );
}

export default Product;
