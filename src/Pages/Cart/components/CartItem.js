import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const {
      item,
      category,
      id,
      img,
      name,
      price,
      quantity,
      productData,
      handleIncrement,
      handleDecrement,
      handleSelect,
    } = this.props;

    return (
      <tr>
        <td className="tableCheck">
          <input type="checkbox" className="checkbox" />
          <label for="checkbox"></label>
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
                onClick={() => handleDecrement(this.props.productData)}
              >
                -
              </button>
              <input className="quantityCount" value={quantity} />

              <button
                className="btnIncrease"
                type="button"
                onClick={() => handleIncrement(productData)}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td className="itemPrice">
          <strong className="price">{price}</strong>
        </td>
        <td className="itemBenefits"></td>
        <td className="itemTotalPrice">
          ${Number({ price } * { quantity }).toLocaleString()}원
        </td>
        <td></td>
      </tr>
    );
  }
}

export default CartItem;
