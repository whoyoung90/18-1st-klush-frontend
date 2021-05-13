import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../config";
import ProductContent from "./ProductMenu/ProductContent";
import DropUserMenu from "./ProductMenu/DropUserMenu";
import SearchModal from "./SearchModal";
import { NAV_BAR_API } from "../../config";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Nav.scss";

export default function Nav() {
  const items = useSelector(store => store.cartReducer);
  const [isModalView, setModalView] = useState(false);
  const [dropList, setDropList] = useState([]);

  const getProductTitle = () => {
    axios.get(`${NAV_BAR_API}`).then(res => setDropList(res.data.category));
  };

  useEffect(() => {
    getProductTitle();
  }, []);

  const handleModal = () => {
    setModalView(!isModalView);
  };
  return (
    <>
      {isModalView && <SearchModal handleModal={handleModal} />}
      <div className="nav">
        <div className="lushLogo">
          <Link to="/main">KLUSH</Link>
        </div>
        {/* 배열 데이터가 나타날때마다 map함수 */}
        <ul className="clickMenu">
          {dropList.map(el => (
            <li className="dropDown">
              <Link className="navIntro" to="#">
                {el.navTitle}
              </Link>
              <ProductContent data={el.data} />
            </li>
          ))}
        </ul>

        <ul className="clickButton">
          <li className="dropUser">
            <Link onClick={handleModal} className="dropLink">
              <img src={Config.SEARCH} alt="search" />
            </Link>
          </li>
          <li className="dropUser">
            <Link className="dropLink" to="/cart">
              <img src={Config.CART} alt="cart" />
              <span className="cartNumber">{items.cartList.length}</span>
            </Link>
          </li>
          <li className="dropUser">
            <Link className="dropLink" to="/login">
              <img src={Config.USER} alt="user" />
            </Link>
            <DropUserMenu />
          </li>
        </ul>
      </div>
    </>
  );
}
