import React, { Component } from "react";
import "./Cart.scss";
import CartList from "./components/CartList";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  decreaseItem = e => {};
  increaseItem = e => {};
  componentDidMount() {
    fetch("data/cartData.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          productData: res,
        })
      );
  }
  render() {
    const { productData } = this.state;
    console.log(productData.length);
    return (
      <div className="cart">
        <div className="container">
          <div className="content">
            <div className="stepTop">
              <h2>SHOPPING CART</h2>
              <div className="stepStage">
                <span className="this">Cart</span>
                <span className="stepIcon">></span>
                <span className="order">Order</span>
                <span className="stepIcon">></span>
                <span className="end">Order confirmed</span>
              </div>
            </div>
          </div>
          <form className="itemCart" method="post">
            <div className="cartContainer">
              <h3 className="cartTitle">제품</h3>
              <CartList />
            </div>
          </form>
          <div className="calcAmount">
            <p>
              <span className="calcDetail">3개</span>
              <span className="calcDelivery">2500원</span>
              <span className="calcTotal">3만원</span>
            </p>
          </div>
          <div className="bottomButton">
            <div className="buttonSub">
              <button className="btnDelete">삭제 하기</button>
              <button className="btnSave">찜하기</button>
            </div>
            <div className="buttonMain">
              <button className="btnMoreShopping">쇼핑 계속하기</button>
              <button className="btnOrder">주문하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
