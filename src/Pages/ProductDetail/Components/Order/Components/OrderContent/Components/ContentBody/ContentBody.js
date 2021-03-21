import React, { Component } from "react";

import "./ContentBody.scss";

class ContentBody extends Component {
  render() {
    const {
      price,
      totalPrice,
      countNum,
      reviewCount,
      weight,
      plusBtn,
      minusBtn,
      checkEnter,
      onChangeCountNum,
    } = this.props;

    return (
      <div className="contentBody">
        <div className="reviewColumn">{reviewCount}개의 후기 보기</div>
        <div className="goodToKnow">Good to Know</div>
        <div className="priceColumn">
          <div className="columnTitle">판매가</div>
          <div className="columnRight price">&#8361;{price}</div>
        </div>
        <div className="weightColumn">
          <div className="columnTitle">상품무게</div>
          <div className="columnRight">{weight}</div>
        </div>
        <div className="buyCountColumn">
          <div className="columnTitle">구매수량</div>
          <div className="countBox">
            <button className="minus btnsElement" onClick={minusBtn}>
              -
            </button>
            <input
              className="countNumScreen btnsElement"
              type="text"
              value={countNum}
              onKeyPress={checkEnter}
              onChange={onChangeCountNum}
            />
            <button className="plus btnsElement" onClick={plusBtn}>
              +
            </button>
          </div>
          <div className="buyPrice price">&#8361;{totalPrice}</div>
        </div>
      </div>
    );
  }
}

export default ContentBody;
