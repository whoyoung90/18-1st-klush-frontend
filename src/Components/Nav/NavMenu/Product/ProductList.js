import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    const {
      title,
      items,
      items1,
      items2,
      items3,
      items4,
      items5,
      item6,
      item7,
    } = this.props;

    return (
      <ul className="productList">
        <li>
          <Link to="#">{title}</Link>
        </li>
        <li>
          <Link to="#">{items}</Link>
        </li>
        <li>
          <Link to="#">{items1}</Link>
        </li>
        <li>
          <Link to="#">{items2}</Link>
        </li>
        <li>
          <Link to="#">{items3}</Link>
        </li>
        <li>
          <Link to="#">{items4}</Link>
        </li>
        <li>
          <Link to="#">{items5}</Link>
        </li>
      </ul>
    );
  }
}

export default ProductList;
