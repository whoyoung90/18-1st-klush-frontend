import React, { Component } from "react";

import Nav from "../../Components/Nav/Nav";
import GeneralModal from "../../Pages/ProductList/Components/GeneralModal/GeneralModal";
import Direction from "./Components/Direction/Direction";
import Order from "./Components/Order/Order";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import Footer from "../../Components/Footer/Footer";

import "./ProductDetail.scss";

import { COMMON_API } from "../../config.js";

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      product: "",
      productData: 0,
      showGeneralModal: false,
    };
  }

  componentDidMount() {
    fetch(`${COMMON_API}`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          product: result.products.filter(
            item => item.product_id === Number(this.props.match.params.id)
          )[0],
          productData: result.products.filter(
            item => item.product_id === Number(this.props.match.params.id)
          )[0].productDetail,
        })
      );
  }

  componentDidUpdate() {
    this.state.showGeneralModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  goToGeneralModal = () => {
    this.setState({
      showGeneralModal: !this.state.showGeneralModal,
    });
  };

  goToCart = () => {
    this.setState(
      {
        showGeneralModal: !this.state.showGeneralModal,
      },
      this.props.history.push("/cart")
    );
  };

  clickClose = modal => {
    this.setState({
      [modal]: !this.state[modal],
      cartCountNum: "1",
    });
  };

  render() {
    const { productData, product, showGeneralModal } = this.state;

    return (
      productData && (
        <>
          <Nav />
          <div className="productDetailPage">
            {showGeneralModal && (
              <GeneralModal
                clickClose={this.clickClose}
                goToCart={this.goToCart}
              />
            )}
            <div className="productDetailContainer">
              <header className="productDetailHeader">
                <div className="directionColumn">
                  {this.state.productData &&
                    ["홈", "러쉬", "배쓰", `${productData.sub_category}`].map(
                      (folder, idx) => {
                        return <Direction key={idx} folder={folder} />;
                      }
                    )}
                </div>
              </header>
              <Order
                id={product.produc_id}
                name={product.name}
                mainImgSrc={product.image_url}
                mainImgName={productData.name}
                subImages={productData.subImages}
                productPrice={product.price}
                reviewCount="0"
                hashTags={product.product_label}
                weight={productData.weight}
                goToGeneralModal={this.goToGeneralModal}
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
