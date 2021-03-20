import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td className="tableCheck">
          <input type="checkbox" className="checkbox" />
          <label for="checkbox"></label>
        </td>
        <td className="listItem productInfo">
          <div className="productItem">
            <span className="productPicture">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1585349279412-518db7ec7bed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  width="60"
                ></img>
              </a>
            </span>
            <div className="productText">
              <p className="itemName">로즈 아르간</p>
              <p className="itemCategory">보디 컨디셔너</p>
            </div>
          </div>
        </td>
        <td className=" listItem itemCount">
          <div className="countQuantity">
            <div className="countBox">
              <button className="btnDecrease" onClick={this.decreaseItem}>
                -
              </button>
              <input type="text"></input>
              <button className="btnIncrease" onClick={this.increaseItem}>
                +
              </button>
            </div>
          </div>
        </td>
        <td className="itemPrice">
          <strong className="price">\21,000</strong>
        </td>
        <td className="itemBenefits"></td>
        <td className="itemTotalPrice"></td>
        <td></td>
      </tr>
    );
  }
}

export default CartItem;
