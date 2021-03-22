import React, { Component } from "react";
import CartItem from "./CartItem";
import "./CartList.scss";

class CartList extends Component {
  render() {
    const {
      checkList,
      cartList,
      isAllChecked,
      handleDecrement,
      handleIncrement,
      handleSelect,
      handleSelectAll,
    } = this.props;

    return (
      <table className="cartTable">
        <thead>
          <tr>
            <th>
              <span className="formCheck">
                <input
                  type="checkbox"
                  id="allCheck"
                  className="allCheck"
                  onClick={() => handleSelectAll()}
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
          {cartList.map(item => {
            return (
              <CartItem
                key={item.id}
                cartList={item}
                id={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                price={item.price}
                checkList={checkList}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleSelect={handleSelect}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CartList;
