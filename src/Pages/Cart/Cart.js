import React, { useEffect, useState } from "react";
import CartList from "./components/CartList";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleDelete, changeCheck } from "../../store/actions/index";
//import { COMMON_API } from "../../config.js";

const MIN_PRICE = 30000;
const SHIP_PRICE = 2500;

function Cart() {
  // const handleDecrement = item => {
  //   const tmpArr = [...this.state.cartList];
  //   const index = tmpArr.indexOf(item);
  //   const quantity = tmpArr[index].quantity - 1;
  //   tmpArr[index].quantity = quantity < 0 ? 0 : quantity;
  //   this.setState({ cartList: tmpArr });
  // };
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartList, isAllChecked } = useSelector(state => state.cartReducer);

  useSelector(state => state.cartReducer);
  // const handleDelete = () => {
  //   dispatch(handleDelete);
  // };
  // const handleIncrement = item => {
  //   const tmpArr = [...this.state.cartList];
  //   const index = tmpArr.indexOf(item);
  //   tmpArr[index].quantity++;
  //   this.setState({ cartList: tmpArr });
  // };

  // const handleDelete = () => {
  //   const countSort = cartList
  //     .map(check => Number(check.isChecked))
  //     .reduce((acc, cur) => acc + cur);

  //   const countItems = cartList
  //     .map(check => Number(check.isChecked * check.quantity))
  //     .reduce((acc, cur) => acc + cur);
  //   if (
  //     window.confirm(
  //       `선택하신 ${countSort}종류 , 총 ${countItems}개 상품을 장바구니에서 삭제 하시겠습니까?`
  //     )
  //   ) {
  //     this.setState({
  //       cartList: cartList.filter(check => !check.isChecked),
  //     });
  //   }
  // };

  // const handleSelectAll = () => {
  //   const tmpArr = cartList.map(item => {
  //     item.isChecked = isAllChecked ? false : true;
  //     return item;
  //   });
  //   this.setState({
  //     cartList: tmpArr,
  //     isAllChecked: !isAllChecked,
  //   });
  // };

  useEffect(() => {
    handleCheck();
  }, [cartList]);

  // const handleSelect = item => {
  //   const changeCheck = cartList.map(check => {
  //     if (check.id === item.id) check.isChecked = !check.isChecked;
  //     return check;
  //   });
  //   this.setState(
  //     {
  //       cartList: changeCheck,
  //     },
  //     () => this.handleCheckbox()
  //   );
  // };

  const handleCheck = () => {
    let bool = (cartList.isAllChecked = cartList.every(check => check.isChecked)
      ? true
      : false);
    dispatch(changeCheck(bool));
  };

  // const handleItemCounts = e => {
  //   const insertNum = /^[0-9]*$/;
  //   const idx = cartList.findIndex(item => item.id === Number(e.target.name));
  //   const tmpArr = [...cartList];
  //   if (!insertNum.test(e.target.value)) return;
  //   if (Number(e.target.value) > 20) {
  //     alert("최대 선택 가능 수량은 20개 입니다!");
  //     e.target.value = 20;
  //   }
  //   tmpArr[idx] = {
  //     ...tmpArr[idx],
  //     quantity: Number(e.target.value),
  //   };
  //   this.setState({ cartList: tmpArr });
  // };

  const handlePay = () => {
    const countSort = cartList
      .map(check => Number(check.isChecked))
      .reduce((acc, cur) => acc + cur);

    const payList = cartList.filter(item => item.isChecked);
    if (window.confirm(`선택하신  ${countSort}개상품만 주문합니다.`)) {
      history.push({
        pathname: "/payment",
        cartList: payList,
      });
    }
  };

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
              <h2 className="stepTitle">SHOPPING CART</h2>
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
                  //handleItemCounts={handleItemCounts}
                />
              )}
            </div>
          </form>
          <div className="calcAmount">
            <p className="calcInfo">
              <span className="calcDetail">
                <p className="detailCount">
                  총 <p>{checkItemCount}</p> 개의 금액
                </p>

                <em className="detailPrice">
                  ￦ {Math.floor(payFee).toLocaleString()}
                </em>
              </span>
              <span className="addIcon">+</span>
              <span className="calcDelivery">
                <p className="delivery">배송비 </p>
                <em className="deliveryPay">
                  {Math.floor(shipPrice).toLocaleString()}
                </em>
              </span>
              <span className="calcTotal">
                <p className="resultSign">=</p>
                <p className="TotalPriceWon">총 주문금액 </p>
                <em className="totalPriceResult">
                  ￦ {Math.floor(payFee).toLocaleString()}
                </em>
              </span>
            </p>
          </div>
          <div className="bottomButton">
            <div className="buttonSub">
              <button
                className="btnDelete"
                onClick={() => dispatch(handleDelete())}
              >
                삭제 하기
              </button>
              <button className="btnSave">찜하기</button>
            </div>
            <div className="buttonMain">
              <button
                className="btnMoreShopping"
                onClick={() => history.push("/productlist")}
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

export default Cart;
