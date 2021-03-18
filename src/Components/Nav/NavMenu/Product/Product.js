import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      dropDown: [],
    };
  }

  componentDidMount() {
    fetch("/data/productList.json")
      .then(res => res.json())
      .then(res => this.setState({ dropDown: res.data }));
  }

  render() {
    const { dropDown } = this.state;

    return (
      <li className="dropDown">
        <Link className="navIntro" to="#">
          제품
        </Link>
        <div className="dropDownMenu">
          {dropDown.map(list => (
            <ProductList title={list.title} items={list.items} />
          ))}
        </div>
      </li>
    );
  }
}

export default Product;
