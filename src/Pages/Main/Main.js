import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import MainSlide from "./MainSlide";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { COMMON_API } from "../../config.js";
import axios from "axios";

export default function Main() {
  const [mainList, setMainList] = useState([]);

  const getNewItem = () => {
    axios.get(`${COMMON_API}`).then(res => setMainList(res.data.products));
  };

  useEffect(() => {
    getNewItem();
  }, []);

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
              {mainList.map((el, idx) => (
                <Link to="/main" key={idx} className="myItemList">
                  <img className="myImg" src={el.image_url} alt="newLabel" />
                  <div className="imgTitle">{el.name}</div>
                  <div className="imgHash">{el.product_label}</div>
                  <div className="cost">
                    ￦{Math.floor(el.price).toLocaleString()}
                  </div>
                </Link>
              ))}
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
