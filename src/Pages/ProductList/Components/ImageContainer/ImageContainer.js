import React, { Component } from "react";

import "./ImageContainer.scss";

class ImageContainer extends Component {
  render() {
    return (
      <header className="imgContainer">
        <span className="imgContainerTitle">배쓰</span>
        <span className="imgContainerDesc">
          "당신에게 향기로운 입욕을 선물합니다"
        </span>
      </header>
    );
  }
}

export default ImageContainer;
