import React, { useState } from "react";
import dummy from "../DB/data.json";
import Payment from "./Payment";
import CartProduct from "./CartProduct";
function Cart({ productList, cart }) {
  const quantity = dummy.products.map((product) => product.quantity);
  console.log(quantity);
  return (
    <div className="cart-and-payment">
      <div className="cart-container">
        <h2>장바구니</h2>
        <ul className="cart-list">
          <li className="cart-header">
            <p className="product-info">상품 정보</p>
            <p className="quantity">수량</p>
            <p className="price">가격</p>
          </li>
          {cart.map((product) => (
            <CartProduct cartProduct={product} quantity={product.quantity} key={product.id} />
          ))}
        </ul>
      </div>
      <Payment />
    </div>
  );
}

export default Cart;
