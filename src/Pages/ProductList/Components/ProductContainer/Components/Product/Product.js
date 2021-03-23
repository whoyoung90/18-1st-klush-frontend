import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import ProductLabel from "./Components/ProductLabel/ProductLabel";
import ProductHashTag from "./Components/ProductHashTag/ProductHashTag";

import "./Product.scss";

class Product extends Component {
  goToDetailPage = () => {
    this.props.history.push(`/product_detail/${this.props.productInfo.id}`);
  };

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
    const { productInfo, clickModal } = this.props;
    return (
      <div className="productListContainer" onClick={this.goToDetailPage}>
        <div className="productImgContainer">
          <img
            className="productImg"
            src={productInfo.productImg}
            alt={productInfo.productName}
          />
          <div className="hoverIcons">
            <BiHeart
              onClick={e => {
                clickModal(e, "showGeneralModal", productInfo.id, "찜 리스트");
              }}
            />
            {productInfo.id && (
              <BiShoppingBag
                onClick={e =>
                  clickModal(e, "showCartModal", productInfo.id, "장바구니")
                }
              />
            )}
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
      </div>
    );
  }
}

export default withRouter(Product);
