import React from "react";
import { Link } from "react-router-dom";
import "./DropUserMenu.scss";

const NAV_USER_LIST = [
  { path: "/login", value: "로그인" },
  { path: "/signup", value: "회원가입" },
  { path: "#", value: "스카우트" },
  { path: "#", value: "고객센터" },
];

export default function DropUserMenu() {
  return (
    <ul className="dropUserMenu">
      {NAV_USER_LIST.map((obj, idx) => {
        return (
          <li key={idx} className="userList">
            <Link className="userLink" to={obj.path}>
              {obj.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
