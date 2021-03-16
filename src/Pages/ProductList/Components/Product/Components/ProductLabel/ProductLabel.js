import React, { Component } from "react";

import "./ProductLabel.scss";

class ProductLabel extends Component {
  render() {
    if (this.props.label === "NEW") {
      return (
        <div className="newLabel labelContainer">
          <div className="label">{this.props.label}</div>
        </div>
      );
    } else if (this.props.label === "VEGAN") {
      return (
        <div className="veganLabel labelContainer">
          <div className="label">{this.props.label}</div>
        </div>
      );
    } else {
      return (
        <div className="soldOutLabel labelContainer">
          <div className="label">{this.props.label}</div>
        </div>
      );
    }
  }
}

export default ProductLabel;
