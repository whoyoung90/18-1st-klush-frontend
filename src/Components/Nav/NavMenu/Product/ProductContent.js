import React from "react";
import { Link } from "react-router-dom";
import "./ProductContent.scss";

export default function ProductContent({ title, items }) {
  return (
    <ul className="productNavBar">
      <li>
        <Link className="barTitle" to={title.path}>
          {title.titleName}
        </Link>
      </li>
      {items.map(item => (
        <li>
          <Link className="barItems" to={item.path}>
            {item.value}
          </Link>
        </li>
      ))}
    </ul>
  );
}
