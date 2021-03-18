import React, { Component } from "react";

import "./ContentBody.scss";

class ContentBody extends Component {
  render() {
    return (
      <div className="contentBody">
        <div className="reviewColumn">0개의 후기 보기</div>
        <div className="goodToKnow">Good to Know</div>
        <div className="priceColumn">
          <div className="columnTitle">판매가</div>
          <div className="columnRight price">&#8361;21,000</div>
        </div>
        <div className="weightColumn">
          <div className="columnTitle">상품무게</div>
          <div className="columnRight">90g</div>
        </div>
        <div className="buyCountColumn">
          <div className="columnTitle">구매수량</div>
          <div className="countBox">
            <button className="minus btnsElement">-</button>
            <div className="countNumScreen btnsElement">1</div>
            <button className="plus btnsElement">+</button>
          </div>
          <div className="buyPrice price">&#8361;21,000</div>
        </div>
      </div>
    );
  }
}

export default ContentBody;
