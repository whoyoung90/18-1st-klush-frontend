import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SubImage from "./Components/SubImage/SubImage";

import "./OrderImg.scss";

class OrderImg extends Component {
  constructor() {
    super();

    this.state = {
      mainImgSrc: this.props.mainImgSrc,
    };
  }

  subImgOnClick = e => {
    this.setState({
      mainImgSrc: e.target.src,
    });
  };

  render() {
    const { subImages, mainImgName } = this.props;
    const { mainImgSrc } = this.state;
    return (
      <div className="imgContainer">
        <img
          className="mainImage"
          src={mainImgSrc && mainImgSrc}
          alt={mainImgName.name && mainImgName.name}
        />
        <div className="subImgContainer">
          <IoIosArrowBack className="sliderArrow" />
          <div className="subImgSlider">
            {subImages.map((img, idx) => {
              return (
                <SubImage
                  key={idx}
                  subImages={img}
                  name={mainImgName.name}
                  subImgOnClick={this.subImgOnClick}
                />
              );
            })}
          </div>
          <IoIosArrowForward className="sliderArrow" />
        </div>
      </div>
    );
  }
}

export default OrderImg;
