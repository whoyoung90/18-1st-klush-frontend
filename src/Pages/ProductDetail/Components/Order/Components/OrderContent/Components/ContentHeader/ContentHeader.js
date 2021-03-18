import React, { Component } from "react";
import { BiShareAlt, BiHeart } from "react-icons/bi";

import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    return (
      <div className="contentHeader">
        <div className="headerColumn">
          <div className="columnLeft">골든 에그</div>
          <div className="columnRight">
            <BiShareAlt className="icons" />
            <BiHeart className="icons" />
          </div>
        </div>
        <div className="hashTagColumn">#베쓰밤 #금빛입욕</div>
      </div>
    );
  }
}

export default ContentHeader;
