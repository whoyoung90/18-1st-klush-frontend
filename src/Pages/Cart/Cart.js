import React, { Component } from "react";
import CartList from "./components/CartList";
import CartPrice from "./components/CartPrice";
import "./Cart.scss";

const SHIP_CHARGE = 2500;
const MIN_PURCHASE = 30000;

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      sumPrice: 0,
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
  };
  handleIncrement = item => {
    console.log(`증가하려고 한 아이템 수량:  ${item.quantity}`);
    const productData = [...this.state.productData];
    const index = productData.indexOf(item);
    productData[index].quantity++;
    this.setState({ productData });
  };
  handleAdd = item => {
    // 체크박스가 선택되면 체크박스의 아이템의 요소를 체크박스 배열에 추가 (필요한가 ?) 나중에 질문
    //    const checkData = [...this.state.productData];
    const checkData = this.state.productData.filter(
      product => product.checked === true
    );
    this.setState({ productData: checkData });
  };

  handleDelete = item => {
    alert(`선택하신 ${item.count}개상품을 장바구니에서 삭제 하시겠습니까?`);
  };

  handleSelectAll = () => {};

  handleSelect = event => {
    console.log(event.target.checked);
    // event.target.checked
    //   ? (event.target.checked = false)
    //   : (event.target.checked = true);
  };

  render() {
    const { productData } = this.state;
    const {
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleSelect,
    } = this;
    const selectProducts = productData.filter(product => product.quantity);
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
                handleSelect={handleSelect}
              />
            </div>
          </form>
          <CartPrice
            productData={productData}
            quantity={productData.quantity}
          />
          <div className="bottomButton">
            <div className="buttonSub">
              <button className="btnDelete" onClick={handleDelete}>
                삭제 하기
              </button>
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
