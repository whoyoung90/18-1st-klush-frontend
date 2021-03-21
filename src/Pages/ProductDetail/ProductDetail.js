import React, { Component } from "react";

import Direction from "./Components/Direction/Direction";
import Order from "./Components/Order/Order";
import DetailInfo from "./Components/DetailInfo/DetailInfo";

import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      productData: 0,
    };
  }

  componentDidMount() {
    fetch("data/detailData.json")
      .then(res => res.json())
      .then(result =>
        this.setState({
          productData: result,
        })
      );
  }

  render() {
    const { productDetail, productOrder } = this.state.productData;
    return (
      <div className="productDetailPage">
        <div className="productDetailContainer">
          <header className="productDetailHeader">
            <div className="directionColumn">
              {this.state.productData &&
                productOrder.direction.map((folder, idx) => {
                  return <Direction key={idx} folder={folder} />;
                })}
            </div>
          </header>
          {productOrder && (
            <Order
              name={productOrder.name}
              mainImgSrc={productOrder.mainImg}
              mainImgName={productOrder.name}
              subImages={productOrder.subImages}
              productPrice={productOrder.price}
              reviewCount={productOrder.reviewCount}
              hashTags={productOrder.hashTags}
              weight={productOrder.weight}
            />
          )}
          {productDetail && (
            <DetailInfo
              reviewCount={productOrder.reviewCount}
              productDetail={productDetail}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
