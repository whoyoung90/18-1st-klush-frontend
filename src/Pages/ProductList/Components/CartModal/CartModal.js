import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import ModalButtons from "../ModalButtons/ModalButtons";

import "./CartModal.scss";

class CartModal extends Component {
  render() {
    const {
      cartTotalPrice,
      cartCountNum,
      plusBtn,
      minusBtn,
      onChangeCountNum,
      checkEnter,
      clickClose,
      putOnCart,
      productInfo,
    } = this.props;

    return (
      productInfo && (
        <div className="cartModal modal">
          <div className="cartMain">
            <div className="cartMainHeader">
              <div className="headerTitle">장바구니 담기</div>
              <GrClose
                className="closeIcon"
                onClick={() => clickClose("showCartModal")}
              />
            </div>
            <div className="headerBorder" />
            <div className="cartMainContainer">
              <img
                className="cartMainImg"
                src={productInfo.productImg}
                alt={productInfo.productName}
              />
              <div className="mainContent">
                <div className="contentHeader">
                  <div className="contentName">{productInfo.productName}</div>
                  <div className="contentHash">
                    {productInfo.productHashTag.map(hash => `#` + hash + " ")}
                  </div>
                </div>

                <div className="mainBorder" />
                <div className="countContent">
                  <div className="cartCountBox">
                    <button className="minus btnsElement" onClick={minusBtn}>
                      -
                    </button>
                    <input
                      className="countNumScreen btnsElement"
                      type="text"
                      value={cartCountNum}
                      onChange={onChangeCountNum}
                      onKeyPress={checkEnter}
                    />
                    <button className="plus btnsElement" onClick={plusBtn}>
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
                clickClose={clickClose}
                putOnCart={putOnCart}
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
