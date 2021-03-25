import React, { Component } from "react";

import "./Buttons.scss";

class Buttons extends Component {
  render() {
    return (
      <div className="btnsColumn">
        <button className="cartBtn">장바구니</button>
        <button className="orderBtn">주문하기</button>
      </div>
    );
  }
}

export default Buttons;
