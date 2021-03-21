import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return <div>hello this page is for id: {this.props.match.params.id}</div>;
  }
}

export default ProductDetail;
