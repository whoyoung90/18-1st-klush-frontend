import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./Direction.scss";

class Direction extends Component {
  render() {
    return (
      <span className="eachDirection">
        {this.props.folder} <IoIosArrowForward className="arrow" />{" "}
      </span>
    );
  }
}

export default Direction;
