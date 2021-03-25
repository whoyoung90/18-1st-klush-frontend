import React, { Component } from "react";

import ImageContainer from "./Components/ImageContainer/ImageContainer";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import GeneralModal from "./Components/GeneralModal/GeneralModal";
import CartModal from "./Components/CartModal/CartModal";

import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      listData: {},
      showGeneralModal: false,
      showCartModal: false,
      dataSetName: "",
      productId: "",
      cartList: [],
      cartProductPrice: "",
      cartTotalPrice: "",
      cartCountNum: "1",
      queryStr: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/listData.json")
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

  clickModal = (e, modal, idNum, text) => {
    e.stopPropagation();
    this.setState(
      {
        productId: idNum,
        dataSetName: text,
        [modal]: !this.state[modal],
        cartProductPrice:
          modal === "showCartModal"
            ? this.state.listData.products.filter(
                product => product.product_id === idNum
              )[0].price
            : "",
      },
      () => {
        this.setState({
          cartTotalPrice:
            modal === "showCartModal"
              ? this.printPrice(Number(this.state.cartProductPrice))
              : "",
        });
      }
    );
  };

  clickClose = modal => {
    this.setState({
      [modal]: !this.state[modal],
      cartCountNum: "1",
    });
  };

  goToGeneralModal = () => {
    this.setState({
      showGeneralModal: !this.state.showGeneralModal,
      showCartModal: !this.state.showCartModal,
    });
  };

  putOnCart = () => {
    this.setState(
      {
        cartList: [
          ...this.state.cartList,
          ...[
            {
              id: this.state.productId,
              count: this.state.cartCountNum,
              totalPrice: this.state.cartTotalPrice,
            },
          ],
        ],
        cartCountNum: "1",
      },
      () => {
        this.goToGeneralModal();
      }
    );
  };

  //contentHeader select box
  checkSelect = e => {
    this.setState({
      queryStr: e.target.value,
    });
  };

  //for Count Box productDetail의 countBox와 중복된 코드
  printPrice = a => {
    a = a.toLocaleString();
    return a;
  };

  changePrice = () => {
    let updatePrice =
      Number(this.state.cartCountNum) * Number(this.state.cartProductPrice);
    this.setState({
      cartTotalPrice: this.printPrice(updatePrice),
    });
  };

  plusBtn = () => {
    this.setState(
      {
        cartCountNum: String(Number(this.state.cartCountNum) + 1),
      },
      () => {
        this.changePrice();
      }
    );
  };

  minusBtn = () => {
    if (this.state.cartCountNum > 1) {
      this.setState(
        {
          cartCountNum: String(Number(this.state.cartCountNum) - 1),
        },
        () => {
          this.changePrice();
        }
      );
    }
  };

  onChangeCountNum = e => {
    this.setState({
      cartCountNum: e.target.value,
    });
  };

  checkEnter = e => {
    if (e.key === "Enter") {
      if (Number(e.target.value) > 20) {
        alert("최대 선택 가능 수량은 20개 입니다!");
        e.target.value = "1";
      }
      this.setState(
        {
          cartCountNum: e.target.value,
        },
        () => {
          this.changePrice();
        }
      );
    }
  };

  render() {
    console.log(this.state.queryStr);
    const {
      categoryName,
      categoryDesc,
      subCategoryList,
      products,
    } = this.state.listData;

    const {
      showGeneralModal,
      showCartModal,
      productId,
      cartTotalPrice,
      cartCountNum,
      dataSetName,
    } = this.state;

    return (
      <div className="productListPage">
        {showGeneralModal && (
          <GeneralModal clickClose={this.clickClose} text={dataSetName} />
        )}
        {showCartModal && Number(productId) && (
          <CartModal
            productInfo={
              products.filter(
                product => product.product_id === Number(productId)
              )[0]
            }
            productId={productId}
            cartTotalPrice={cartTotalPrice}
            cartCountNum={cartCountNum}
            plusBtn={this.plusBtn}
            minusBtn={this.minusBtn}
            onChangeCountNum={this.onChangeCountNum}
            checkEnter={this.checkEnter}
            clickClose={this.clickClose}
            putOnCart={this.putOnCart}
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
            checkSelect={this.checkSelect}
          />
        )}
      </div>
    );
  }
}

export default ProductList;
