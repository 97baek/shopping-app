import React from "react";

function Payment({ cart }) {
  console.log(cart);
  return (
    <form className="payment-container">
      <div className="pay-list product-price">
        <span class="pay-left">총 상품 금액</span>
        <span className="pay-right">0원</span>
      </div>
      <div className="pay-list shipment-price">
        <span class="pay-left">총 배송비</span>
        <span className="pay-right">2,500원</span>
      </div>
      <div className="pay-list total-price">
        <span className="total-header">예상 결제 금액</span>
        <span className="price">2,500원</span>
      </div>
      <button className="order-btn">전체상품 주문하기</button>
    </form>
  );
}

export default Payment;
