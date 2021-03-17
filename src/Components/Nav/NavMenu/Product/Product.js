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
    fetch("/data/data.json")
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
          {dropDown.map(list => {
            return (
              <ProductList
                title={list.title}
                items={list.items}
                items1={list.items1}
                items2={list.items2}
                items3={list.items3}
                items4={list.items4}
                items5={list.items5}
              />
            );
          })}
        </div>
      </li>
    );
  }
}

export default Product;
