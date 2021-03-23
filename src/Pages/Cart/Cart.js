import React, { Component } from "react";
import CartList from "./components/CartList";
import "./Cart.scss";

const SHIP_CHARGE = 2500;
const MIN_PURCHASE = 30000;

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      checkList: [],
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
          checkList: new Array(res.length).fill(true),
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

  handleDelete = item => {
    const { cartList, checkList } = this.state;
    console.log(item);
    const countItems = checkList.filter(check => check).length;
    alert(`선택하신 ${countItems}개상품을 장바구니에서 삭제 하시겠습니까?`);
    this.setState({ cartList });
  };

  handleSelectAll = () => {
    const { checkList, isAllChecked } = this.state;
    const tmpArr = checkList.map(item => {
      item = isAllChecked ? false : true;
      return item;
    });
    this.setState({
      checkList: tmpArr,
      isAllChecked: !isAllChecked,
    });
  };

  handleSelect = item => {
    const { itemList, checkList } = this.state;
    const tmp = [{ ...this.state.cartList, checked: true }];
    console.log(tmp);
    const changeCheck = checkList.map((check, idx) => {
      if (idx === item.id - 1) check = !check;
      return check;
    });

    this.setState({
      checkList: changeCheck,
      itemList: tmp,
    });

    //   const tmp = [{ ...this.state.cartList, checked: true }];
    // });
  };

  handleCalcPrice = item => {
    const { cartList, checkList } = this.state;
    let total = 0;
    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i]) {
        total += Number(cartList[i]["price"] * cartList[i]["quantity"]);
      }
    }
    console.log(total);
  };

  render() {
    const { cartList, checkList, isAllChecked } = this.state;
    // console.log(cartList[1].price);
    const {
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleSelect,
      handleSelectAll,
      handleCalcPrice,
    } = this;

    let total = 0;
    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i]) {
        total += Number(cartList[i]["price"] * cartList[i]["quantity"]);
      }
    }

    // const {selectProducts = cartList.filter(product => product);
    // const itemPrice = this.state.cartList.map(item => {
    //   return item.price * item.quantity;
    // });
    //   const { totalPrice } = itemPrice.reduce((a, b) => a + b, 0);

    // const deleveryPrice =
    //checkList.length > 0 && checkList.filter(check => check).length>0&&cartList.filter;
    const checkItemCount = checkList.filter(check => check === true).length;
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
                isAllChecked={isAllChecked}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleSelect={handleSelect}
                handleSelectAll={handleSelectAll}
              />
            </div>
          </form>
          <div className="calcAmount">
            <p>
              <span className="calcDetail">
                <p className="detailCount">
                  총 <p>{checkItemCount}</p> 개의 금액
                </p>
                <em> ￦ {Math.floor(total).toLocaleString()}</em>
              </span>
              <span className="addIcon">+</span>
              <span className="calcDelivery">
                <p className="Delivery">배송비 </p>
                <em> ￦ {Math.floor(0).toLocaleString()}</em>
              </span>
              <span className="calcTotal">
                <p className="resultSign">=</p>
                <p className="TotalPriceWon">총 주문금액 </p>
                <em> ￦ {Math.floor(total).toLocaleString()}</em>
              </span>
            </p>
          </div>
          <div className="bottomButton">
            <div className="buttonSub">
              <button
                className="btnDelete"
                onClick={() => handleDelete(checkList)}
              >
                삭제 하기
              </button>
              <button className="btnSave">찜하기</button>
            </div>
            <div className="buttonMain">
              <button
                className="btnMoreShopping"
                onClick={() => handleCalcPrice(checkList)}
              >
                쇼핑 계속하기
              </button>
              <button className="btnOrder">주문하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
