import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "./Config";
import Product from "./NavMenu/Product/Product";
import LushIntro from "./NavMenu/LushIntro/LushIntro";
import DropUserMenu from "./DropUserMenu";
import "./Nav.scss";

class Nav extends Component {
  render() {
    const NAV_MENU = ["매장안내", "스파", "이벤트"];

    return (
      <div className="nav">
        <div className="lushLogo">
          <Link to="/main">KLUSH</Link>
        </div>
        <ul className="clickMenu">
          <Product />
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
            <Link className="dropLink" to="#">
              <img src={Config.search} alt="search" />
            </Link>
          </li>
          <li className="dropUser">
            <Link className="dropLink" to="/cart">
              <img src={Config.cart} alt="cart" />
              <span className="cartNumber">0</span>
            </Link>
          </li>
          <li className="dropUser">
            <Link className="dropLink" to="login">
              <img src={Config.user} alt="user" />
              <DropUserMenu />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
