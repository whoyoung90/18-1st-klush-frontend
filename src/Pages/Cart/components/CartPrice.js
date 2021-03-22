import React, { Component } from "react";
import "./CartPrice.scss";

class cartPrice extends Component {
  render() {
    const { totalPrice, itemPrice } = this.props;
    return (
      <div className="calcAmount">
        <p>
          <span className="calcDetail">
            <p className="detailCount">총 3 개의 금액</p>
            <em> ￦ {Math.floor(10000).toLocaleString()}</em>
          </span>
          <span className="addIcon">+</span>
          <span className="calcDelivery">
            <p className="Delivery">배송비 </p>
            <em> ￦ {Math.floor(0).toLocaleString()}</em>
          </span>
          <span className="calcTotal">
            <p className="resultSign">=</p>
            <p className="TotalPriceWon">총 주문금액 </p>
            <em> ￦ {Math.floor(12000).toLocaleString()}</em>
          </span>
        </p>
      </div>
    );
  }
}

export default cartPrice;
