import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductNavBar.scss";

class ProductNavBar extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <ul className="productNavBar">
        <li>
          <Link className="barTitle" to={title.path}>
            {title.titleName}
          </Link>
        </li>
        {items.map(item => (
          <li>
            <Link className="barItems" to={item.path}>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductNavBar;
