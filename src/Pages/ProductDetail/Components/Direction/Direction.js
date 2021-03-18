import React, { Component } from "react";

import "./Direction.scss";

class Direction extends Component {
  render() {
    return (
      <span className="eachDirection">
        {this.props.folder} <span className="arrow"> > </span>
      </span>
    );
  }
}

export default Direction;
