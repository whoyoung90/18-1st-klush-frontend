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
    e.stopPropagation();
    this.setState(
      {
        productId: idNum,
        dataSetName: e.target.dataset.name,
      },
      () => {
        if (modal === "showCartModal") {
          this.setState(
            {
              cartProductPrice: this.state.listData.products.filter(
                product => product.id === this.state.productId
              )[0].productPrice,
              [modal]: !this.state[modal],
            },
            () => {
              this.setState({
                cartTotalPrice: this.printPrice(this.state.cartProductPrice),
              });
            }
          );
        } else {
          this.setState({
            [modal]: !this.state[modal],
          });
        }
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
      },
      () => {
        this.setState({
          cartCountNum: "1",
        });
        this.goToGeneralModal();
      }
    );
  };

  //for Count Box productDetail의 countBox와 중복된 코드
  printPrice = a => {
    let result = a.split("").reverse();
    if (result.length > 3) {
      for (let i = 0; i < result.length; i++) {
        if ((i + 1) % 3 === 0 && i !== result.length - 1) {
          result[i + 1] += ",";
        }
      }
      return result.reverse().join("");
    }
  };

  changePrice = () => {
    let updatePrice = String(
      Number(this.state.cartCountNum) * Number(this.state.cartProductPrice)
    );
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
          <GeneralModal
            productInfo={products}
            clickClose={this.clickClose}
            text={dataSetName}
          />
        )}
        {showCartModal && Number(productId) && (
          <CartModal
            productInfo={
              products.filter(product => product.id === Number(productId))[0]
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
          />
        )}
      </div>
    );
  }
}

export default ProductList;
