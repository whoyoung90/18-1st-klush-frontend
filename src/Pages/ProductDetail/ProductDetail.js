import React, { Component } from "react";

import Nav from "../../Components/Nav/Nav";
import Direction from "./Components/Direction/Direction";
import Order from "./Components/Order/Order";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import Footer from "../../Components/Footer/Footer";

import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      productData: 0,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.0.66:8000/product/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          productData: result.product_detail_data[0],
        })
      );
  }

  render() {
    console.log("data", this.state.productData);
    const { productData } = this.state;

    return (
      productData && (
        <>
          <Nav />
          <div className="productDetailPage">
            <div className="productDetailContainer">
              <header className="productDetailHeader">
                <div className="directionColumn">
                  {this.state.productData &&
                    ["홈", "러쉬", "베쓰", `${productData.sub_category}`].map(
                      (folder, idx) => {
                        return <Direction key={idx} folder={folder} />;
                      }
                    )}
                </div>
              </header>
              <Order
                name={productData.name}
                mainImgSrc={productData.image_url}
                mainImgName={productData.name}
                subImages={productData.image_url}
                productPrice={productData.price}
                reviewCount="0"
                hashTags={productData.product_label}
                weight={productData.weight}
              />

              <DetailInfo
                reviewCount={productData.reviewCount}
                productDetail={productData}
              />
            </div>
          </div>
          <Footer />
        </>
      )
    );
  }
}

export default ProductDetail;
