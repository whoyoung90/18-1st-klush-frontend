import React, { Component } from "react";
import "./Cart.scss";
import CartList from "./components/CartList";
import CartPrice from "./components/CartPrice";

// 배송비 3만 이상이면 free
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/cartData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => this.setState({ productData: res }));
  }

  handleDecrement = item => {
    console.log(`감소하려고 한 아이템 수량:  ${item.quantity}`);
    const productData = [...this.state.productData];
    const index = productData.indexOf(item);
    const quantity = productData[index].quantity - 1;
    productData[index].quantity = quantity < 1 ? 1 : quantity;
    this.setState({ productData });
    console.log(this.state);
  };
  handleIncrement = item => {
    console.log(`증가하려고 한 아이템 수량:  ${item.quantity}`);
    const productData = [...this.state.productData];
    const index = productData.indexOf(item);
    productData[index].quantity++;
    this.setState({ productData });
    console.log(this.state);
  };
  handleDelete = () => {
    alert("선택하신 3개상품을 장바구니에서 삭제 하시겠습니까?");
  };

  render() {
    const { productData } = this.state;
    const { handleDecrement, handleIncrement } = this;
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
              <CartList
                productData={productData}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />
            </div>
          </form>
          <CartPrice productData={productData} />
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
