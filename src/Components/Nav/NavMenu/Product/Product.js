import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductNavBar from "./ProductNavBar";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      dropDown: [],
    };
  }

  componentDidMount() {
    fetch("/data/productNavBar.json")
      .then(res => res.json())
      .then(res => this.setState({ dropDown: res.data }));
  }

  render() {
    const { dropDown } = this.state;

    return (
      <li className="dropDown">
        <Link className="navIntro" to="/product_list">
          제품
        </Link>
        <div className="dropDownMenu">
          {dropDown.map(list => (
            <ProductNavBar title={list.title} items={list.items} />
          ))}
        </div>
      </li>
    );
  }
}

export default Product;
