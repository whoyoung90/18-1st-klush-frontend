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
      cartList: [],
      checkList: [true, false, true, false],
      itemPrice: 0,
      totalPrice: 0,
      isAllChecked: true,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/cartData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          cartList: res,
          //        checkList: new Array(res.length + 1).fill(true), // 인덱스 0번부터라 +1 해도되나?
        })
      );
  }

  handleDecrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    const quantity = cartList[index].quantity - 1;
    cartList[index].quantity = quantity < 1 ? 1 : quantity;
    this.setState({ cartList });
  };

  handleIncrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    cartList[index].quantity++;
    this.setState({ cartList });
  };

  handleAdd = item => {
    const checkData = [...this.state.checkList];
    this.setState({ cartList: checkData });
  };

  // select 된걸로 수정하자
  handleDelete = item => {
    console.log(item);
    alert(`선택하신 ${item.length}개상품을 장바구니에서 삭제 하시겠습니까?`);
  };

  // 수정 필요
  handleSelectAll = () => {
    console.log("hiu");
    const { cartList, isAllChecked } = this.state;
    const tmpArr = cartList.map(item => {
      isAllChecked ? (item.isChecked = false) : (item.isChecked = true);
      return item;
    });
    this.setState({ cartList: tmpArr, isAllChecked: !isAllChecked });
  };
  handleDelete = shoppingData => {
    // const tmpArr = this.state.shoppings.filter(
    //   item => item.id !== shoppingData.id
    // );
    // this.setState({ shoppings: tmpArr });
  };

  handleSelect = item => {
    const { checkList } = this.state;
    const changeCheck = checkList.map((check, idx) => {
      if (idx === item.id - 1) check = !check;
      return check;
    });
    this.setState({ checkList: changeCheck });
  };

  handleCalcPrice = item => {
    const itemPrice = this.state.cartList.map(item => {
      return item.price * item.quantity;
    });
    this.setState({ itemPrice });
  };

  render() {
    const { cartList, checkList } = this.state;
    const {
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleSelect,
      handleSelectAll,
    } = this;
    //    const {selectProducts = cartList.filter(product => product.isChecked);
    const itemPrice = this.state.cartList.map(item => {
      return item.price * item.quantity;
    });
    const { totalPrice } = itemPrice.reduce((a, b) => a + b, 0);
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
                cartList={cartList}
                checkList={checkList}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleSelect={handleSelect}
                handleSelectAll={handleSelectAll}
              />
            </div>
          </form>
          <CartPrice
            cartList={cartList}
            quantity={cartList.quantity}
            totalPrice={totalPrice}
            itemPrice={itemPrice}
          />
          <div className="bottomButton">
            <div className="buttonSub">
              <button
                className="btnDelete"
                onClick={() => handleDelete(cartList)}
              >
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
