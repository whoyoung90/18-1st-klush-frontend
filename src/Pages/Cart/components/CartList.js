import React, { Component } from "react";

class CartList extends Component {
  render() {
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
          <CartList />
        </tbody>
      </table>
    );
  }
}

export default CartList;
