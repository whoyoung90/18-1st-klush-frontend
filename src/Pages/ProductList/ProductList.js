import React, { Component } from "react";

import ImageContainer from "./Components/ImageContainer/ImageContainer";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import HeartModal from "./Components/HeartModal/HeartModal";
import CartModal from "./Components/CartModal/CartModal";

import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      listData: {},
      showHeartModal: false,
      showCartModal: false,
      productId: "",
    };
  }

  componentDidMount() {
    fetch("data/listData.json")
      .then(res => res.json())
      .then(result =>
        this.setState({
          listData: result,
        })
      )
      .catch(e => console.log(e));
  }

  componentDidUpdate() {
    this.state.showHeartModal || this.state.showCartModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  clickModal = (e, modal, idNum) => {
    console.log("in Function", e.target.id);
    e.stopPropagation();
    this.setState(
      {
        productId: idNum,
      },
      () => {
        this.setState({
          [modal]: !this.state[modal],
        });
      }
    );
  };

  clickClose = modal => {
    this.setState({
      [modal]: !this.state[modal],
    });
  };

  render() {
    const {
      categoryName,
      categoryDesc,
      subCategoryList,
      products,
    } = this.state.listData;
    const { showHeartModal, showCartModal, productId } = this.state;

    return (
      <div className="productListPage">
        {showHeartModal && (
          <HeartModal productInfo={products} clickClose={this.clickClose} />
        )}
        {showCartModal && Number(productId) && (
          <CartModal
            productInfo={
              products.filter(product => product.id === Number(productId))[0]
            }
            productId={productId}
            clickClose={this.clickClose}
          />
        )}
        <ImageContainer
          categoryName={categoryName}
          categoryDesc={categoryDesc}
        />
        {products && (
          <ProductContainer
            categoryName={categoryName}
            subCategoryList={subCategoryList}
            products={products}
            clickModal={this.clickModal}
          />
        )}
      </div>
    );
  }
}

export default ProductList;
