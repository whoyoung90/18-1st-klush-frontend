import React, { Component } from "react";
import { CHECK_IMG } from "../../../config";
import "./CartItem.scss";
class CartItem extends Component {
  render() {
    const {
      item,
      category,
      key,
      id,
      img,
      name,
      price,
      quantity,
      cartList,
      checkList,
      isChecked,
      handleIncrement,
      handleDecrement,
      handleSelect,
    } = this.props;

    return (
      <tr>
        <td className="tableCheck">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => handleSelect(cartList)}
            id="checkbox"
            checked={checkList[cartList.id - 1]}
          />
          <label for="checkbox" className="checked on "></label>
        </td>

        <td className="productInfo">
          <span className="productPicture">
            <div>
              <img src={img} />
            </div>
          </span>
          <div className="productItem">
            <div className="productText">
              <p className="itemName">{name} </p>
              <p className="itemCategory">{category} </p>
            </div>
          </div>
        </td>
        <td className="itemCount">
          <div className="countQuantity">
            <div className="countBox">
              <button
                className="btnDecrease"
                type="button"
                onClick={() => handleDecrement(cartList)}
              >
                -
              </button>
              <input className="quantityCount" value={quantity} />

              <button
                className="btnIncrease"
                type="button"
                onClick={() => handleIncrement(cartList)}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td className="itemPrice">
          <strong className="price">
            ￦ {Math.floor(price).toLocaleString()}
          </strong>
        </td>
        <td className="itemBenefits"></td>
        <td className="itemTotalPrice">
          ￦ {Math.floor(price * quantity).toLocaleString()}
        </td>
        <td></td>
      </tr>
    );
  }
}

export default CartItem;
