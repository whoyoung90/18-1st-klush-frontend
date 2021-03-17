import React, { Component } from "react";

import "./ProductLabel.scss";

class ProductLabel extends Component {
  render() {
    return (
      <div
        className={
          `${
            this.props.label === "NEW"
              ? "newLabel"
              : this.props.label === "VEGAN"
              ? "veganLabel"
              : "soldOutLabel"
          }` + " labelContainer"
        }
      >
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default ProductLabel;
