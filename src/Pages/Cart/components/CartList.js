import React, { Component } from "react";
import CartItem from "./CartItem";
import "./CartList.scss";

class CartList extends Component {
  render() {
    const {
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
                  checked={isAllChecked}
                ></input>
                <label for="allCheck"></label>
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
          {cartList.length &&
            cartList.map((item, idx) => {
              return (
                <CartItem
                  rowspan={idx === 0 ? cartList.length : null}
                  key={idx}
                  cartList={item}
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
