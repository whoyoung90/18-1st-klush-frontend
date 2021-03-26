import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import MainSlide from "./MainSlide";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { COMMON_API } from "../../config.js";

class Main extends Component {
  constructor() {
    super();
    this.state = { mainList: [] };
  }

  componentDidMount() {
    fetch(`${COMMON_API}/product?is_new=True`)
      .then(res => res.json())
      .then(res => this.setState({ mainList: res.product_list_data }));
  }
  render() {
    const { mainList } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <>
        <Nav />
        <div className="siteWrap">
          <div className="main">
            <MainSlide />
            <div className="itemWrap">
              <h2>신상품을 부탁해 KLUSH!</h2>
              <Slider className="myItem" {...settings}>
                {mainList.map((el, idx) => {
                  return (
                    <Link to="/main" key={idx} className="myItemList">
                      <img
                        className="myImg"
                        src={el.image_url}
                        alt="newLabel"
                      />
                      <div className="imgTitle">{el.name}</div>
                      <div className="imgHash">{el.product_label}</div>
                      <div className="cost">
                        ￦{Math.floor(el.price).toLocaleString()}
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
            <div className="tableWrap">
              <img src="/Images/campaign.jpg" alt="campaign" />
              <Link to="/products">
                <img src="/Images/bubbleBar.jpg" alt="bubbleBar" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
