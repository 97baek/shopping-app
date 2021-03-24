import React from "react";

function Payment({ cart }) {
  let price = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  let discountPercent = (price) => {
    if (price >= 50000 && price < 100000) return 10;
    else if (price >= 100000 && price < 150000) return 15;
    else if (price >= 150000) return 20;
    else return 0;
  };
  const shipmentPrice = price >= 50000 || cart.length === 0 ? 0 : 2500;
  const discount = (price) => {
    if (price >= 50000 && price < 100000) return price * 0.9;
    else if (price >= 100000 && price < 150000) return price * 0.85;
    else if (price >= 150000) return price * 0.8;
    else return price;
  };

  const onClickOrder = () => {
    alert(`헬프미님 ${discount(price) + shipmentPrice}원이 결제되었습니다`);
  };
  return (
    <form className="payment-container">
      <div className="pay-list product-price">
        <div className="pay-price">
          <span className="pay-left">상품 금액</span>
          <span className="pay-right">{price}원</span>
        </div>
        {discountPercent(price) !== 0 && (
          <div className="vip-discount">
            <span className="vip-disTitle">VIP 할인</span>
            <span className="vip-disPer">-{discountPercent(price)}%</span>
          </div>
        )}
      </div>
      <div className="pay-list shipment-price">
        <span className="pay-left">배송비</span>
        <span className="pay-right">{shipmentPrice}원</span>
      </div>
      <div className="pay-list total-price">
        <span className="total-header">예상 결제 금액</span>
        <span className="price">{discount(price) + shipmentPrice}원</span>
      </div>
      {cart.length > 0 && (
        <button className="order-btn" onClick={onClickOrder}>
          전체상품 주문하기
        </button>
      )}
    </form>
  );
}

export default Payment;
