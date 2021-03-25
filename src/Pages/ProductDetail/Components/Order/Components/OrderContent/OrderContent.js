import React, { Component } from "react";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import ContentBody from "./Components/ContentBody/ContentBody";
import ContentFooter from "./Components/ContentFooter/ContentFooter";
import Buttons from "./Components/Buttons/Buttons";

import "./OrderContent.scss";

class OrderContent extends Component {
  constructor() {
    super();

    this.state = {
      price: 0,
      countNum: "1",
      totalPrice: "",
    };
  }

  componentDidMount() {
    this.setState({
      price: this.props.productPrice,
      totalPrice: this.printPrice(String(this.props.productPrice)),
    });
  }

  //가격 쉼표 추가
  printPrice = priceStr => {
    let priceList = priceStr.split("");
    let dotIndex = priceList.indexOf(".");
    priceStr = priceList.splice(0, dotIndex).join("");
    return priceStr.toLocaleString();
  };

  changePrice = () => {
    let updatePrice = String(Number(this.state.countNum) * this.state.price);
    this.setState({
      totalPrice: this.printPrice(updatePrice),
    });
  };

  plusBtn = () => {
    this.setState(
      {
        countNum: String(Number(this.state.countNum) + 1),
      },
      () => {
        this.changePrice();
      }
    );
  };

  minusBtn = () => {
    if (this.state.countNum > 1) {
      this.setState(
        {
          countNum: String(Number(this.state.countNum) - 1),
        },
        () => {
          this.changePrice();
        }
      );
    }
  };

  checkEnter = e => {
    if (e.key === "Enter") {
      if (Number(e.target.value) > 20) {
        alert("최대 선택 가능 수량은 20개 입니다!");
        e.target.value = "1";
      }
      this.setState(
        {
          countNum: e.target.value,
        },
        () => {
          this.changePrice(this.state.price);
        }
      );
    }
  };

  onChangeCountNum = e => {
    if (!Number(e.target.value) && e.target.value !== "") {
      alert("상품 수량은 숫자로 입력해 주세요!");
      e.target.value = "1";
    } else {
      this.setState({
        countNum: e.target.value,
      });
    }
  };

  render() {
    const { price, countNum, totalPrice } = this.state;
    const { reviewCount, hashTags, weight, name } = this.props;
    return (
      <div className="contentContainer">
        <ContentHeader hashTags={hashTags} name={name} />
        <div className="devideLine" />
        <ContentBody
          price={this.printPrice(String(price))}
          totalPrice={totalPrice}
          countNum={countNum}
          reviewCount={reviewCount}
          weight={weight}
          plusBtn={this.plusBtn}
          minusBtn={this.minusBtn}
          checkEnter={this.checkEnter}
          onChangeCountNum={this.onChangeCountNum}
        />
        <div className="devideLine" />
        <ContentFooter totalPrice={totalPrice} />
        <Buttons />
      </div>
    );
  }
}

export default OrderContent;
