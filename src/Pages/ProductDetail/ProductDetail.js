import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return <div>id: {this.props.match.params.id}</div>;
  }
}

export default ProductDetail;
