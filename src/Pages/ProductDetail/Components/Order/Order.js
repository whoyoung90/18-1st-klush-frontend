import React, { Component } from "react";

import OrderImg from "./Components/OrderImg/OrderImg";
import OrderContent from "./Components/OrderContent/OrderContent";

import "./Order.scss";

class Order extends Component {
  render() {
    const {
      mainImgSrc,
      mainImgName,
      subImages,
      productPrice,
      reviewCount,
      hashTags,
      weight,
      name,
      id,
      goToGeneralModal,
    } = this.props;

    return (
      <div className="orderContainer">
        <OrderImg
          mainImgSrc={mainImgSrc}
          mainImgName={mainImgName}
          subImages={subImages}
        />
        <OrderContent
          goToGeneralModal={goToGeneralModal}
          id={id}
          mainImgSrc={mainImgSrc}
          productPrice={productPrice}
          reviewCount={reviewCount}
          hashTags={hashTags}
          weight={weight}
          name={name}
        />
      </div>
    );
  }
}

export default Order;
