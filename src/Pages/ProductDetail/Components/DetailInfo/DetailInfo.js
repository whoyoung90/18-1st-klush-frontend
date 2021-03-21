import React, { Component } from "react";

import LinkTab from "./Components/LinkTab/LinkTab";

import "./DetailInfo.scss";

class DetailInfo extends Component {
  render() {
    const { productDetail, reviewCount } = this.props;
    return (
      <div className="detailInfo">
        <div id="detail">
          <LinkTab reviewCount={reviewCount} tabName="detail" />
        </div>
        <div className="infoTitleContainer">
          <span className="categoryName infoTitle">
            {productDetail.category}
          </span>
          <span className="productName infoTitle">{productDetail.name}</span>
          <span className="productEnName infoTitle">
            {productDetail.enName}
          </span>
        </div>

        <div id="review">
          <LinkTab reviewCount={reviewCount} tabName="review" />
        </div>
        <div id="delivery">
          <LinkTab reviewCount={reviewCount} tabName="delivery" />
        </div>
      </div>
    );
  }
}

export default DetailInfo;
