import React, { Component } from "react";

import "./SubCategory.scss";

class SubCategory extends Component {
  render() {
    return (
      <li
        className="categoryItems"
        id={this.props.id}
        onClick={this.props.sortBySubCategory}
      >
        {this.props.category}
      </li>
    );
  }
}

export default SubCategory;
