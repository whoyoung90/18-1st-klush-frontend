import React, { Component } from "react";
import "./CartItem.scss";

class CartItem extends Component {
  render() {
    const {
      key,
      rowSpan,
      cartList,
      handleItemCounts,
      handleIncrement,
      handleDecrement,
      handleSelect,
    } = this.props;

    return (
      <tr key={key} className="tableRow">
        <td className="tableCheck">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => handleSelect(cartList)}
            id="checkbox"
            checked={cartList.isChecked}
          />
          <label id={cartList.id} for="checkbox" className="checked ">
            <span></span>
          </label>
        </td>

        <td className="productInfo">
          <span className="productPicture">
            <div>
              <img className="productImg" src={cartList.img} />
            </div>
          </span>
          <div className="productItem">
            <div className="productText">
              <p className="itemName">{cartList.name} </p>
              <p className="itemCategory">{cartList.category} </p>
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
              <input
                className="quantityCount"
                name={cartList.id}
                value={cartList.quantity}
                onChange={handleItemCounts}
              />

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
            ￦ {Math.floor(cartList.price).toLocaleString()}
          </strong>
        </td>
        <td className="itemBenefits"></td>
        <td className="itemTotalPrice">
          ￦ {Math.floor(cartList.price * cartList.quantity).toLocaleString()}
        </td>
        {rowSpan && (
          <td className="itemShipPrice" rowSpan={cartList.length}>
            기본배송비
          </td>
        )}
      </tr>
    );
  }
}

export default CartItem;
