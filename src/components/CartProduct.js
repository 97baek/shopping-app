import React, { useState } from "react";

function CartProduct({ cartProduct, productQuantity, onClickDelete, onIncrease, onDecrease }) {
  return (
    <li className="cart-product">
      <div className="info-container">
        <img src={cartProduct.image} alt="상품이미지" className="product-image" />
        <p className="product-name">{cartProduct.productName}</p>
      </div>
      <div className="quntity-container">
        <div className="quantity-buttons">
          <button onClick={() => onIncrease(cartProduct.id)} className="quant btn plus-btn">
            <img src="./AppleWatch/btn_plus.png" alt="" />
          </button>
          <p className="quant">{productQuantity}</p>
          <button onClick={() => onDecrease(cartProduct.id)} className="quant btn minus-btn">
            <img src="./AppleWatch/btn_min.png" alt="" />
          </button>
        </div>
      </div>
      <div className="price-container">{cartProduct.price * productQuantity}원</div>
      <button onClick={() => onClickDelete(cartProduct.id)} className="delBtn">
        <img src="./AppleWatch/btn_delect.png" alt="" />
      </button>
    </li>
  );
}

export default CartProduct;
