import React from "react";
import dummy from "../DB/data.json";
function Cart() {
  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <ul className="cart-list">
        <li className="cart-header">
          <p className="product-info">상품 정보</p>
          <p className="quantity">수량</p>
          <p className="price">가격</p>
        </li>
        {dummy.products.map((product) => (
          <li className="cart-product">
            <div className="info-container">
              <img src={product.image} alt="상품이미지" className="product-image" />
              <p className="product-name">{product.productName}</p>
            </div>
            <div className="quntity-container">
              <button className="quant btn plus-btn">
                <img src="./AppleWatch/btn_plus.png" alt="" />
              </button>
              <p className="quant">{product.quantity}</p>
              <button className="quant btn minus-btn">
                <img src="./AppleWatch/btn_min.png" alt="" />
              </button>
            </div>
            <div className="price-container">{product.price}원</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
