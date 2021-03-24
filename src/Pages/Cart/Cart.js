import React, { Component } from "react";
import CartList from "./components/CartList";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Cart.scss";

const MIN_PRICE = 30000;
const SHIP_PRICE = 2500;

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      isAllChecked: true,
    };
  }

  componentDidMount() {
    fetch("/data/cartData.json")
      //    fetch("http://10.58.2.56:8000/order/cart'")
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
    const tmpArr = [...this.state.cartList];
    const index = tmpArr.indexOf(item);
    const quantity = tmpArr[index].quantity - 1;
    tmpArr[index].quantity = quantity < 0 ? 0 : quantity;
    this.setState({ cartList: tmpArr });
  };

  handleIncrement = item => {
    const tmpArr = [...this.state.cartList];
    const index = tmpArr.indexOf(item);
    tmpArr[index].quantity++;
    this.setState({ cartList: tmpArr });
  };

  handleDelete = () => {
    const { cartList } = this.state;
    const countSort = cartList
      .map(check => Number(check.isChecked))
      .reduce((acc, cur) => acc + cur);

    const countItems = cartList
      .map(check => Number(check.isChecked * check.quantity))
      .reduce((acc, cur) => acc + cur);
    if (
      window.confirm(
        `선택하신 ${countSort}종류 , 총 ${countItems}개 상품을 장바구니에서 삭제 하시겠습니까?`
      )
    ) {
      this.setState({
        cartList: cartList.filter(check => !check.isChecked),
      });

      //      JSON.stringify(cartList.map(item => ({ ...item, isChecked: true })));
    }
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
    let bool = cartList.every(check => check.isChecked);
    this.setState({ isAllChecked: bool });
  };

  handleSelect = item => {
    const { cartList } = this.state;
    const changeCheck = cartList.map(check => {
      if (check.id === item.id) check.isChecked = !check.isChecked;
      return check;
    });
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
    //const obj = cartList.find(item=>item.id===Number(e.target.name))
    // if (Number(e.target.value) > obj.quantity) {
    //   alert('선택 가능한 수량을 초과했습니다');
    //   return;
    // }
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

  handlePay = () => {
    const { cartList } = this.state;
    const countSort = cartList
      .map(check => Number(check.isChecked))
      .reduce((acc, cur) => acc + cur);

    const payList = cartList.filter(item => item.isChecked);
    if (window.confirm(`선택하신  ${countSort}개상품만 주문합니다.`)) {
      this.props.history.push({
        pathname: "/login",
        cartList: payList,
      });
    }
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
    } = this;

    const totalPrice =
      cartList.length > 0 &&
      cartList.filter(item => item.isChecked).length > 0 &&
      cartList
        .filter(item => item.isChecked)
        .map(item => item.quantity * item.price)
        .reduce((acc, cur) => acc + cur);

    const deleveryPrice = totalPrice >= MIN_PRICE ? 0 : SHIP_PRICE;
    const shipPrice = cartList.some(item => item.isChecked) ? deleveryPrice : 0;
    const payFee = totalPrice + shipPrice;
    const checkItemCount = cartList.filter(check => check.isChecked).length;

    return (
      <>
        <Nav />
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
                  onClick={() => this.props.history.push("/productlist")}
                >
                  쇼핑 계속하기
                </button>
                <button className="btnOrder" onClick={() => handlePay()}>
                  주문하기
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;
