import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "../Product/ProductList";
import "../Product/Product.scss";

class LushIntro extends Component {
  constructor() {
    super();
    this.state = {
      dropDown: [],
    };
  }

  componentDidMount() {
    fetch("/data/lushIntroList.json")
      .then(res => res.json())
      .then(res => this.setState({ dropDownn: res.data }));
  }

  render() {
    const { dropDown } = this.state;

    return (
      <li className="dropDown">
        <Link className="navIntro" to="#">
          러쉬 소개
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

export default LushIntro;
