import React, { Component } from "react";
import "./Cart.scss";
import CartItem from "./components/CartItem";
class Cart extends Component {
  state = {
    productData: [],
  };

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
    console.log(this.productData);
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
              <table className="cartTable">
                <thead>
                  <tr>
                    <th>
                      <span className="formCheck">
                        <input
                          type="checkbox"
                          id="allCheck"
                          className="allCheck"
                        ></input>
                        <label for="allCheck"> </label>
                      </span>
                    </th>
                    <th className="productDetail">제품 정보</th>
                    <th className="productCount">수량</th>
                    <th className="productPrice">금액</th>
                    <th className="productBenefits">복지혜택</th>
                    <th className="productTotalPrice">합계금액</th>
                    <th className="productShipPrice">배송비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tableCheck" rowspan="2">
                      <input type="checkbox" className="checkbox" />
                      <label for="checkbox"></label>
                    </td>
                    <td className="productInfo">
                      <div className="productItem">
                        <span className="productPicture">
                          <a href="#">
                            <img
                              src="https://images.unsplash.com/photo-1585349279412-518db7ec7bed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                              width="60"
                            ></img>
                          </a>
                        </span>
                        <div className="productText">
                          <p className="itemName">로즈 아르간</p>
                          <p className="itemCategory">보디 컨디셔너</p>
                        </div>
                      </div>
                    </td>
                    <td className="itemCount" rowspan="2">
                      <div className="countBox">
                        <button
                          className="btnDecrease"
                          onClick={this.decreaseItem}
                        >
                          -
                        </button>
                        <input type="text"></input>
                        <button
                          className="btnIncrease"
                          onClick={this.increaseItem}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="itemPrice" rowspan="2">
                      <strong className="price">\21,000</strong>
                    </td>
                    <td className="itemBenefits"></td>
                    <td className="itemTotalPrice"></td>
                    <td rowspan="2"></td>
                  </tr>
                  <CartItem />
                </tbody>
              </table>
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
