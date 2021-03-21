import React, { Component } from "react";
import "./CartPrice.scss";

class cartPrice extends Component {
  render() {
    const { totalPrice } = this.props;
    return (
      <div className="calcAmount">
        <p>
          <span className="calcDetail">
            <p>총 3 개의 금액</p>
            <p>
              ￦<em>106000</em>
            </p>
          </span>
          <span className="addIcon">+</span>
          <span className="calcDelivery">
            <p>
              배송비
              <strong>2500</strong>원
            </p>
          </span>
          <span className="calcTotal">
            <p>
              총 주문금액 <strong> {totalPrice}</strong>원
            </p>
          </span>
        </p>
      </div>
    );
  }
}

export default cartPrice;
