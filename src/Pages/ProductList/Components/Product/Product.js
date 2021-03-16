import React, { Component } from "react";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import ProductLabel from "./Components/ProductLabel/ProductLabel";
import ProductHashTag from "./Components/ProductHashTag/ProductHashTag";

import "./Product.scss";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      isHover: false,
    };
  }
  render() {
    const { isHover } = this.state;
    const { productInfo } = this.props;
    return (
      <div className="productListContainer">
        <div className="productImgContainer">
          <img
            className="productImg"
            src={productInfo.productImg}
            alt="productImg"
          />
          <div className={isHover ? "hoverIconsAble" : "hoverIconsDisable"}>
            <BiHeart />
            <BiShoppingBag />
          </div>
        </div>
        <div className="labelColumn">
          {productInfo.productLabel &&
            productInfo.productLabel.map((label, idx) => {
              return <ProductLabel key={idx + 5} label={label} />;
            })}
        </div>
        <div className="nameColumn">{productInfo.productName}</div>
        <div className="hashTagColumn">
          {productInfo.productHashTag &&
            productInfo.productHashTag.map((hashTag, idx) => {
              return <ProductHashTag key={idx} hashTag={hashTag} />;
            })}
        </div>
        <div className="productPrice">{productInfo.productPrice} &#8361;</div>
      </div>
    );
  }
}

export default Product;
