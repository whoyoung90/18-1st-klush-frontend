import React, { Component } from "react";

import OrderImg from "./Components/OrderImg/OrderImg";
import OrderContent from "./Components/OrderContent/OrderContent";

import "./Order.scss";

class Order extends Component {
  render() {
    const { mainImgSrc, mainImgName } = this.props;
    return (
      <div className="orderContainer">
        <OrderImg mainImgSrc={mainImgSrc} mainImgName={mainImgName} />
        <OrderContent />
      </div>
    );
  }
}

export default Order;
