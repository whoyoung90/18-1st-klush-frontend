import React, { Component } from "react";

import "./ImageContainer.scss";

class ImageContainer extends Component {
  render() {
    const { categoryName, categoryDesc } = this.props;
    return (
      <header className="imgContainer">
        <span className="imgContainerTitle">{categoryName}</span>
        <span className="imgContainerDesc">{categoryDesc}</span>
      </header>
    );
  }
}

export default ImageContainer;
