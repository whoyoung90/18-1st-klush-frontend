import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DropUserMenu.scss";

class DropUserMenu extends Component {
  render() {
    const NAV_USER_LIST = [
      { key: "/login", value: "로그인" },
      { key: "/signup", value: "회원가입" },
      { key: "#", value: "스카우트" },
      { key: "#", value: "고객센터" },
    ];

    return (
      <div className="dropUserMenu">
        {NAV_USER_LIST.map(function (obj) {
          return (
            <li>
              <Link to={obj.key}>{obj.value}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}
export default DropUserMenu;
