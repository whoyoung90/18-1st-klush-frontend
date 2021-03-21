import React, { Component } from "react";
import { BiShareAlt, BiHeart } from "react-icons/bi";

import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    const { hashTags, name } = this.props;
    return (
      <div className="contentHeader">
        <div className="headerColumn">
          <div className="columnLeft">{name}</div>
          <div className="columnRight">
            <BiShareAlt className="icons" />
            <BiHeart className="icons" />
          </div>
        </div>
        <div className="hashTagColumn">
          {hashTags.map(tag => "#" + tag + " ")}
        </div>
      </div>
    );
  }
}

export default ContentHeader;
