import React, { Component } from "react";

import "./ProductHashTag.scss";

class ProductHashTag extends Component {
  render() {
    return <div className="hashTagContainer">#{this.props.hashTag}</div>;
  }
}

export default ProductHashTag;
