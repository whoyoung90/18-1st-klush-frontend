import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Product/ProductList.scss";

class LushIntro extends Component {
  render() {
    return (
      <li className="dropDown">
        <Link className="navIntro" to="#">
          러쉬 소개
        </Link>
        <div className="dropDownMenu">작업중</div>
      </li>
    );
  }
}

export default LushIntro;
