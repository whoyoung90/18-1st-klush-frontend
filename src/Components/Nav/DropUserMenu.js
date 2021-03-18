import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DropUserMenu.scss";

class DropUserMenu extends Component {
  render() {
    return (
      <div className="dropUserMenu">
        <li>
          <Link to="#">로그인</Link>
        </li>
        <li>
          <Link to="#">회원가입</Link>
        </li>
        <li>
          <Link to="#">스카우트</Link>
        </li>
        <li>
          <Link to="#">고객센터</Link>
        </li>
      </div>
    );
  }
}
export default DropUserMenu;
