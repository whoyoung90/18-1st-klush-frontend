import React, { Component } from "react";

import "./SubImage.scss";

class SubImage extends Component {
  render() {
    const { subImgOnClick } = this.props;
    return (
      <div className="eachSubImg">
        <img
          className="subImage"
          src={this.props.subImages}
          alt={this.props.name}
          onClick={subImgOnClick}
        />
      </div>
    );
  }
}

export default SubImage;
