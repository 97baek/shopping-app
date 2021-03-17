import React, { useState } from "react";

function Product({ product, addToCart }) {
  return (
    <>
      <li className="product">
        <img src={product.image} />
        <button onClick={() => addToCart(product.id)} className="btn add-to-cart">
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
