import React, { Component } from "react";

import "./ProductLabel.scss";

class ProductLabel extends Component {
  render() {
    return (
      <div
        className={
          `${
            LABEL[this.props.label] ? LABEL[this.props.label] : "soldOutLabel"
          }` + " labelContainer"
        }
      >
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

const LABEL = {
  NEW: "newLabel",
  VEGAN: "veganLabel",
};

export default ProductLabel;
