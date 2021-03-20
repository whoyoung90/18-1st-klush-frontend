import React, { Component } from "react";

class cartPrice extends Component {
  render() {
    return (
      <div className="calcAmount">
        <p>
          <span className="calcDetail">
            <p>
              총 3개의 금액
              <strong>106.000</strong>원
            </p>
          </span>
          <span className="addIcon">+</span>
          <span className="calcDelivery">
            <p>
              배송비
              <strong>2,500</strong>원
            </p>
          </span>
          <span className="calcTotal">
            <p>
              총 주문금액 <strong>108,500</strong>원
            </p>
          </span>
        </p>
      </div>
    );
  }
}

export default cartPrice;
