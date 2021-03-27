import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import ProductLabel from "./Components/ProductLabel/ProductLabel";
import ProductHashTag from "./Components/ProductHashTag/ProductHashTag";

import "./Product.scss";

class Product extends Component {
  state = {
    labelList: [],
  };

  componentDidMount() {
    this.setState({
      labelList: this.getLabelList(),
    });
  }

  getLabelList = () => {
    let labels = [];
    if (this.props.productInfo.is_new) {
      labels.push("NEW");
    }
    if (this.props.productInfo.is_vegan) {
      labels.push("VEGAN");
    }
    if (this.props.productInfo.is_soldout) {
      labels.push("품절");
    }
    return labels;
  };

  goToDetailPage = () => {
    this.props.history.push(`/product/${this.props.productInfo.product_id}`);
  };

  printPrice = () => {
    let result = this.props.productInfo.price.split(".")[0];
    result = Number(result).toLocaleString();
    return result;
  };

  render() {
    const { labelList } = this.state;
    const { productInfo, clickModal } = this.props;
    return (
      labelList && (
        <div className="productListContainer" onClick={this.goToDetailPage}>
          <div className="productImgContainer">
            <img
              className={productInfo.is_soldout ? "disable" : "productImg"}
              src={productInfo.image_url[0]}
              alt={productInfo.name}
            />
            <div
              className={
                productInfo.is_soldout ? "noneHoverIcons" : "hoverIcons"
              }
            >
              {productInfo.product_id && (
                <BiShoppingBag
                  onClick={e =>
                    clickModal(
                      e,
                      "showCartModal",
                      productInfo.product_id,
                      "장바구니"
                    )
                  }
                />
              )}
            </div>
          </div>
          <div className="labelColumn">
            {labelList.map((label, idx) => {
              return <ProductLabel key={idx + 5} label={label} />;
            })}
          </div>
          <div className="nameColumn">{productInfo.name}</div>
          <div className="hashTagColumn">
            {productInfo.product_label &&
              productInfo.product_label.map((hashTag, idx) => {
                return <ProductHashTag key={idx} hashTag={hashTag} />;
              })}
          </div>
          <div className="productPrice">{this.printPrice()} &#8361;</div>
        </div>
      )
    );
  }
}

export default withRouter(Product);
