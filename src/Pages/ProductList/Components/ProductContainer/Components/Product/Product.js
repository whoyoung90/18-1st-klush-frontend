import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import ProductLabel from "./Components/ProductLabel/ProductLabel";
import ProductHashTag from "./Components/ProductHashTag/ProductHashTag";

import "./Product.scss";

class Product extends Component {
  printPrice = () => {
    let result = this.props.productInfo.productPrice.split("").reverse();
    if (result.length > 3) {
      for (let i = 0; i < result.length; i++) {
        if ((i + 1) % 3 === 0 && i !== result.length - 1) {
          result[i + 1] += ",";
        }
      }
      return result.reverse().join("");
    }
  };

  render() {
    const { productInfo } = this.props;
    return (
      <Link className="productListContainer" to="/product_detail">
        <div className="productImgContainer">
          <img
            className="productImg"
            src={productInfo.productImg}
            alt={productInfo.productName}
          />
          <div className="hoverIcons">
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
        <div className="productPrice">{this.printPrice()} &#8361;</div>
      </Link>
    );
  }
}

export default Product;
