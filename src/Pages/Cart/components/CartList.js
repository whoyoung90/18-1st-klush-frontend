import React, { Component } from "react";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    const { productData, handleDecrement, handleIncrement } = this.props;

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
          {productData.map(item => {
            return (
              <CartItem
                productData={item} // item도 매개변수로 전달 !! item 파일에서 일하고 productData 다시 돌려받자
                id={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                price={item.price}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CartList;
