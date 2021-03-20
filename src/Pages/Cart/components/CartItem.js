import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const {
      category,
      id,
      img,
      name,
      price,
      quantity,
      increaseItem,
      decreaseItem,
    } = this.props;
    console.log(name);
    console.log(category);
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
                <img src={img}></img>
              </a>
            </span>
            <div className="productText">
              <p className="itemName">{name} </p>
              <p className="itemCategory">{category} </p>
            </div>
          </div>
        </td>
        <td className=" listItem itemCount">
          <div className="countQuantity">
            <div className="countBox">
              <button className="btnDecrease" onClick={() => decreaseItem}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btnIncrease" onClick={() => increaseItem}>
                +
              </button>
            </div>
          </div>
        </td>
        <td className="itemPrice">
          <strong className="price">{price} </strong>
        </td>
        <td className="itemBenefits"></td>
        <td className="itemTotalPrice">
          {(price * quantity).toLocaleString()}
        </td>
        <td></td>
      </tr>
    );
  }
}

export default CartItem;
