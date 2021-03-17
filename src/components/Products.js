import React, { useState } from "react";
import dummy from "../DB/data.json";
function Products() {
  const addToCart = () => {};
  return (
    <div className="products-container">
      <h2>Apple Watch 쇼핑하기</h2>
      <ul className="products">
        {dummy.products.map((product) => (
          <li className="product">
            <img src={product.image} />
            <button onClick={addToCart} className="btn add-to-cart">
              cart
            </button>
            <p className="product-name">{product.productName}</p>
            <p className="price">
              <span>{product.price}</span>원
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
