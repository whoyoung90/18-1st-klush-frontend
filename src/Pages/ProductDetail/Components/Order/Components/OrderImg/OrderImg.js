import React, { Component } from "react";

import "./OrderImg.scss";

class OrderImg extends Component {
  render() {
    return (
      <div className="imgContainer">
        <img
          src={this.props.mainImgSrc && this.props.mainImgSrc}
          alt={this.props.mainImgName.name && this.props.mainImgName.name}
        />
        <div className="subImgContainer"></div>
      </div>
    );
  }
}

export default OrderImg;
