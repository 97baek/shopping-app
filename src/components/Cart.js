import React, { useState } from "react";
import Payment from "./Payment";
import CartProduct from "./CartProduct";
function Cart({ cart, onClickDelete }) {
  console.log("렌더링됨");
  const [quantity] = cart.map((product) => product.quantity);
  console.log(cart);
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
            <CartProduct
              cartProduct={product}
              onClickDelete={onClickDelete}
              quantity={product.quantity}
              key={product.id}
            />
          ))}
        </ul>
      </div>
      <Payment cart={cart} />
    </div>
  );
}

export default Cart;
