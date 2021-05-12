import React, { Component } from "react";

import "./Buttons.scss";

class Buttons extends Component {
  render() {
    const { onClickEvent } = this.props;
    return (
      <div className="btnsColumn">
        <button className="cartBtn" onClick={onClickEvent}>
          장바구니
        </button>
        <button className="orderBtn">주문하기</button>
      </div>
    );
  }
}

export default Buttons;
