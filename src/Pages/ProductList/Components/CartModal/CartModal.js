import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import ModalButtons from "../ModalButtons/ModalButtons";

import "./CartModal.scss";

class CartModal extends Component {
  constructor() {
    super();

    this.state = {
      cartProduct: "",
      cartTotalPrice: "",
      cartCountNum: "1",
    };
  }

  componentDidMount() {
    this.setState({
      cartProduct: this.props.productInfo,
      cartTotalPrice: this.printPrice(this.props.productInfo.productPrice),
    });
  }

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
      Number(this.state.cartCountNum) *
        Number(this.props.productInfo.productPrice)
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

  render() {
    const { cartProduct, cartTotalPrice, cartCountNum } = this.state;
    return (
      cartProduct && (
        <div className="cartModal modal">
          <div className="cartMain">
            <div className="cartMainHeader">
              <div className="headerTitle">장바구니 담기</div>
              <GrClose
                className="closeIcon"
                onClick={() => this.props.clickClose("showCartModal")}
              />
            </div>
            <div className="headerBorder" />
            <div className="cartMainContainer">
              <img
                className="cartMainImg"
                src={cartProduct.productImg}
                alt={cartProduct.productName}
              />
              <div className="mainContent">
                <div className="contentHeader">
                  <div className="contentName">{cartProduct.productName}</div>
                  <div className="contentHash">
                    {cartProduct.productHashTag.map(hash => `#` + hash + " ")}
                  </div>
                </div>

                <div className="mainBorder" />
                <div className="countContent">
                  <div className="cartCountBox">
                    <button
                      className="minus btnsElement"
                      onClick={this.minusBtn}
                    >
                      -
                    </button>
                    <input
                      className="countNumScreen btnsElement"
                      type="text"
                      value={cartCountNum}
                      onChange={this.onChangeCountNum}
                    />
                    <button className="plus btnsElement" onClick={this.plusBtn}>
                      +
                    </button>
                  </div>
                  <div className="countBoxPrice">&#8361;{cartTotalPrice}</div>
                </div>
              </div>
            </div>
            <div className="footerBorder" />
            <div className="cartFooter">
              <ModalButtons
                clickClose={this.props.clickClose}
                modalName="showCartModal"
                leftBtn="취소하기"
                rightBtn="담기"
              />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default CartModal;
