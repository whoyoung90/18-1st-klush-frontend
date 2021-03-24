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
      <main className="contentBody">
        <div className="reviewColumn">{reviewCount}개의 후기 보기</div>
        <span className="goodToKnow">Good to Know</span>
        <div className="priceColumn">
          <span className="columnTitle">판매가</span>
          <div className="columnRight price">&#8361;{price}</div>
        </div>
        <div className="weightColumn">
          <span className="columnTitle">상품무게</span>
          <div className="columnRight">{weight}</div>
        </div>
        <form className="buyCountColumn">
          <span className="columnTitle">구매수량</span>
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
        </form>
      </main>
    );
  }
}

export default ContentBody;
