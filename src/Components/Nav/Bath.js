import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Bath extends Component {
  render() {
    return (
      <li>
        <Link to="#">베쓰</Link>
        <ul>
          <li>
            <Link to="#">베쓰 밤</Link>
          </li>
          <li>
            <Link to="#">버블 바</Link>
          </li>
          <li>
            <Link to="#">배쓰 오일</Link>
          </li>
          <li>
            <Link to="#">펀</Link>
          </li>
          <li>
            <Link to="#">젤리 밤</Link>
          </li>
        </ul>
      </li>
    );
  }
}

export default Bath;
