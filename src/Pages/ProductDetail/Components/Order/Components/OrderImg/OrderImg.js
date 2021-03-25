import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SubImage from "./Components/SubImage/SubImage";

import "./OrderImg.scss";

class OrderImg extends Component {
  constructor() {
    super();

    this.state = {
      mainImgSrc: "",
    };
  }

  componentDidMount() {
    this.setState({
      mainImgSrc: this.props.mainImgSrc[0],
    });
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
      <div className="orderimgContainer">
        <img className="mainImage" src={mainImgSrc} alt={mainImgName} />
        <div className="subImgContainer">
          <IoIosArrowBack className="sliderArrow" />
          <div className="subImgSlider">
            {subImages.map((img, idx) => {
              return (
                <SubImage
                  key={idx}
                  subImages={img}
                  name={mainImgName}
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
