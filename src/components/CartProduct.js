import React, { useState } from "react";

function CartProduct({ cartProduct, quantity, cart }) {
  console.log(cartProduct.image);
  console.log(cartProduct);

  const [productQuantity, setProductQuantity] = useState(quantity);
  const onClickPlus = () => {
    setProductQuantity(productQuantity + 1);
  };
  const onClickMinus = () => {
    setProductQuantity(productQuantity - 1);
    if (productQuantity < 1) {
      alert("최소수량입니다!");
      setProductQuantity(0);
    }
  };

  return (
    <li className="cart-product">
      <div className="info-container">
        <img src={cartProduct.image} alt="상품이미지" className="product-image" />
        <p className="product-name">{cartProduct.productName}</p>
      </div>
      <div className="quntity-container">
        <div className="quantity-buttons">
          <button onClick={() => onClickPlus()} className="quant btn plus-btn">
            <img src="./AppleWatch/btn_plus.png" alt="" />
          </button>
          <p className="quant">{productQuantity}</p>
          <button onClick={onClickMinus} className="quant btn minus-btn">
            <img src="./AppleWatch/btn_min.png" alt="" />
          </button>
        </div>
      </div>
      <div className="price-container">{cartProduct.price}원</div>
    </li>
  );
}

export default CartProduct;
