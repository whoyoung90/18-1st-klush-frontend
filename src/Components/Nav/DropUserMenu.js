import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DropUserMenu.scss";

class DropUserMenu extends Component {
  render() {
    const NAV_USER_LIST = [
      { path: "/login", value: "로그인" },
      { path: "/signup", value: "회원가입" },
      { path: "/main", value: "스카우트" },
      { path: "#", value: "고객센터" },
    ];

    return (
      <div className="dropUserMenu">
        {NAV_USER_LIST.map((obj, idx) => {
          console.log(obj.path);
          return (
            <Link key={idx} className="userList">
              <a className="userLink" to={obj.path}>
                {obj.path}
              </a>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default DropUserMenu;
