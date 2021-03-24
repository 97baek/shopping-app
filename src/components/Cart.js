import React, { useState } from "react";
import Payment from "./Payment";
import CartProduct from "./CartProduct";
function Cart({ cart, onClickDelete, productPrice, productQuantity, onClickPlus, onClickMinus }) {
  console.log(productQuantity);

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
              productQuantity={productQuantity}
              onClickPlus={onClickPlus}
              onClickMinus={onClickMinus}
              key={product.id}
            />
          ))}
        </ul>
      </div>
      <Payment cart={cart} productPrice={productPrice} />
    </div>
  );
}

export default Cart;
