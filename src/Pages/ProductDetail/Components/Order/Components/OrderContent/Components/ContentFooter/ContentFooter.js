import React, { Component } from "react";

import "./ContentFooter.scss";

class ContentFooter extends Component {
  render() {
    return (
      <div className="contentFooter">
        <div className="footerPriceColumn">
          <div className="columnTitle">총 제품 금액</div>
          <div className="columnRight price">&#8361;21,000</div>
        </div>
        <div className="footerPriceColumn">
          <div className="columnTitle">총 합계 금액</div>
          <div className="columnRight price">&#8361;21,000</div>
        </div>
      </div>
    );
  }
}

export default ContentFooter;
