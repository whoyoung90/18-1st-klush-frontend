import React, { Component } from "react";

import "./SubCategory.scss";

class SubCategory extends Component {
  render() {
    return <li className="categoryItems">{this.props.category}</li>;
  }
}

export default SubCategory;
