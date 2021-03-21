import React, { Component } from "react";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    const {
      productData,
      handleDecrement,
      handleIncrement,
      handleSelect,
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
                  checked
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
          {productData.map(item => {
            return (
              <CartItem
                productData={item}
                id={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                price={item.price}
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
