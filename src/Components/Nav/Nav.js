import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../config";
import ProductTitle from "./NavMenu/Product/ProductTitle";
import LushIntro from "./NavMenu/LushIntro/LushIntro";
import DropUserMenu from "./DropUserMenu";
import SearchModal from "./SearchModal";
import { useSelector } from "react-redux";
import "./Nav.scss";

const NAV_MENU = ["매장안내", "스파", "이벤트"];

export default function Nav() {
  const items = useSelector(store => store.cartReducer);
  const [isModalView, setModalView] = useState(false);

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
        <ul className="clickMenu">
          <ProductTitle />
          <LushIntro />
          {NAV_MENU.map(name => (
            <li className="dropDown">
              <Link className="navIntro" to="#">
                {name}
              </Link>
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
