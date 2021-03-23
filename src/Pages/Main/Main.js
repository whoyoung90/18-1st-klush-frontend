import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MainSlide from "./MainSlide";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  componentDidMount() {
    fetch("/data/mainData.json")
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  }
  render() {
    const { list } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="main">
        <MainSlide />
        <div className="itemWrap">
          <h2>나만 알고 싶은 KLUSH</h2>
          <Slider className="myItem" {...settings}>
            {list.map((el, idx) => (
              <Link to="/main" key={idx} className="myItemList">
                <img className="myImg" src={el.src} alt="newLabel" />
                <div className="imgTitle">{el.imgTitle}</div>
                <div className="imgHash">{el.imgHash}</div>
                <div className="cost">${el.cost}</div>
              </Link>
            ))}
          </Slider>
        </div>
        <div className="tableWrap">
          <img src="/Images/campaign.jpg" alt="campaign" />
          <Link to="/main">
            <img src="/Images/bubbleBar.jpg" alt="bubbleBar" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
