import React, { Component } from "react";
import "./CartItem.scss";

class CartItem extends Component {
  render() {
    const {
      key,
      rowSpan,
      cartList,
      handleIncrement,
      handleDecrement,
      handleSelect,
    } = this.props;

    return (
      <tr key={key}>
        <td className="tableCheck">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => handleSelect(cartList)}
            id="checkbox"
            checked={cartList.isChecked}
          />
          <label for="checkbox" className="checked ">
            <span></span>
          </label>
        </td>

        <td className="productInfo">
          <span className="productPicture">
            <div>
              <img src={cartList.img} />
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
              <input className="quantityCount" value={cartList.quantity} />

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
        {rowSpan ? (
          <td className="itemShipPrice" rowSpan={rowSpan}>
            기본배송비
            <br />
            2,500원
            <br />
            (택배-선결제)
          </td>
        ) : null}
      </tr>
    );
  }
}

export default CartItem;
