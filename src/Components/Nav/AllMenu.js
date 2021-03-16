import React, { Component } from "react";
import Bath from "./Bath";
import { Link } from "react-router-dom";
import "./Nav.scss";

class AllMenu extends Component {
  render() {
    return (
      <li>
        <Link to="#">제품</Link>
        <ul className="allMenu">
          <Bath />
        </ul>
      </li>
    );
  }
}

export default AllMenu;
