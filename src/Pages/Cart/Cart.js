import React, { Component } from "react";
import CartList from "./components/CartList";
import "./Cart.scss";

const MIN_PRICE = 30000;
const SHIP_PRICE = 2500;

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      isAllChecked: true,
      deleteModal: false,
    };
  }

  componentDidMount() {
    fetch("/data/cartData.json")
      //fetch("http://10.58.5.223:8000/product?is_new=True")
      .then(res => res.json())
      .then(res => {
        //const tmpArr = res.new_product_list.map(item => {
        const tmpArr = res.cartList.map(item => {
          return { ...item, isChecked: true };
        });
        this.setState({
          cartList: tmpArr,
        });
      });
  }

  handleDecrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    const quantity = cartList[index].quantity - 1;
    cartList[index].quantity = quantity < 0 ? 0 : quantity;
    this.setState({ cartList });
  };

  handleIncrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    cartList[index].quantity++;
    this.setState({ cartList });
  };

  handleDelete = () => {
    const { cartList } = this.state;
    //const countItems = cartList.filter(check => check.isChecked).length;
    //   alert(`선택하신 ${countItems}개상품을 장바구니에서 삭제 하시겠습니까?`);
    this.setState({
      cartList: cartList.filter(check => !check.isChecked),
    });
  };

  handleSelectAll = () => {
    const { cartList, isAllChecked } = this.state;
    const tmpArr = cartList.map(item => {
      item.isChecked = isAllChecked ? false : true;
      return item;
    });
    this.setState({
      cartList: tmpArr,
      isAllChecked: !isAllChecked,
    });
  };

  handleCheckbox = () => {
    const { cartList } = this.state;
    let bool = true;
    for (let i = 0; i < cartList.length; i++) {
      if (!cartList[i].isChecked) bool = false;
      this.setState({ isAllChecked: bool });
    }
  };

  handleSelect = item => {
    const { cartList } = this.state;
    const changeCheck = cartList.map((check, idx) => {
      if (check.id === item.id) check.isChecked = !check.isChecked;
      return check;
    });
    console.log(item.id);
    this.setState(
      {
        cartList: changeCheck,
      },
      () => this.handleCheckbox()
    );
  };

  handleItemCounts = e => {
    const { cartList } = this.state;
    const insertNum = /^[0-9]*$/;
    //const obj = cartList.find(item=>item.id===Number(e.target.value))
    const idx = cartList.findIndex(item => item.id === Number(e.target.name));
    const tmpArr = [...cartList];
    if (!insertNum.test(e.target.value)) return;
    if (Number(e.target.value) > 20) {
      alert("최대 선택 가능 수량은 20개 입니다!");
      e.target.value = 20;
    }
    tmpArr[idx] = {
      ...tmpArr[idx],
      quantity: Number(e.target.value),
    };
    this.setState({ cartList: tmpArr });
  };

  render() {
    const { cartList, isAllChecked } = this.state;
    const {
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleSelect,
      handleSelectAll,
      handleItemCounts,
      handlePay,
      handleCalcPrice,
    } = this;

    const totalPrice =
      cartList.length > 0 &&
      cartList.filter(item => item.isChecked === true).length > 0 &&
      cartList
        .filter(item => item.isChecked === true)
        .map(item => item.quantity * item.price)
        .reduce((acc, cur) => acc + cur);

    const deleveryPrice = totalPrice >= MIN_PRICE ? 0 : SHIP_PRICE;
    const shipPrice =
      cartList.filter(item => item.isChecked).length === 0 ? 0 : deleveryPrice;

    const payFee = totalPrice + shipPrice;
    const checkItemCount = cartList.filter(check => check.isChecked === true)
      .length;

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
              {cartList.length && (
                <CartList
                  cartList={cartList}
                  isAllChecked={isAllChecked}
                  handleItemCounts={handleItemCounts}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleSelect={handleSelect}
                  handleSelectAll={handleSelectAll}
                />
              )}
            </div>
          </form>
          <div className="calcAmount">
            <p>
              <span className="calcDetail">
                <p className="detailCount">
                  총 <p>{checkItemCount}</p> 개의 금액
                </p>

                <em> ￦ {Math.floor(payFee).toLocaleString()}</em>
              </span>
              <span className="addIcon">+</span>
              <span className="calcDelivery">
                <p className="Delivery">배송비 </p>
                <em> {Math.floor(shipPrice).toLocaleString()}</em>
              </span>
              <span className="calcTotal">
                <p className="resultSign">=</p>
                <p className="TotalPriceWon">총 주문금액 </p>
                <em> ￦ {Math.floor(payFee).toLocaleString()}</em>
              </span>
            </p>
          </div>
          <div className="bottomButton">
            <div className="buttonSub">
              <button className="btnDelete" onClick={() => handleDelete()}>
                삭제 하기
              </button>
              <button className="btnSave">찜하기</button>
            </div>
            <div className="buttonMain">
              <button
                className="btnMoreShopping"
                onClick={() => handleCalcPrice()}
              >
                쇼핑 계속하기
              </button>
              <button className="btnOrder" onClick={() => handlePay()}>
                주문하기
              </button>
            </div>
          </div>

          <div className="modalTotal">
            <div className="modalTotalcomment">
              <span className="modalTotalicon">localhost:3000 내용:</span>
              <span className="modalTotalCash">
                선택하신 {checkItemCount}개 상품을 장바구니에서 삭제
                하시겠습니까?
              </span>
            </div>
          </div>
          <div className="button">
            <button className="goCancel">취소</button>
            <button className="goCheck">확인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
