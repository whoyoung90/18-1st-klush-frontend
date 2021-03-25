import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "./Config";
import Product from "./NavMenu/Product/Product";
import LushIntro from "./NavMenu/LushIntro/LushIntro";
import DropUserMenu from "./DropUserMenu";
import Modal from "./Modal";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

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
            <Link onClick={this.openModal} className="dropLink" to="#">
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
            <Link className="dropLink" to="/login">
              <img src={Config.user} alt="user" />
            </Link>
            <DropUserMenu />
          </li>
        </ul>
        <Modal open={this.state.modalOpen} close={this.closeModal}>
          <input
            className="modalInput"
            type="text"
            placeholder="오늘은 거품입욕 하는 날?"
          />
        </Modal>
      </div>
    );
  }
}

export default Nav;
