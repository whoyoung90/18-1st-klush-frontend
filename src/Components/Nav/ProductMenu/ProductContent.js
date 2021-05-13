import React from "react";
import { Link } from "react-router-dom";
import "./ProductContent.scss";

export default function ProductContent({ data }) {
  return (
    <div className="dropDownMenu">
      <ul className="productNavBar">
        {/* 배열 데이터가 나타날때마다 map안에 map함수 */}
        {data &&
          data.map(el => (
            <section>
              <li>
                <Link className="barTitle" to={el.title.path}>
                  {el.title.titleName}
                </Link>
              </li>
              {el.items.map(el => (
                <li>
                  <Link className="barItems" to={el.path}>
                    {el.value}
                  </Link>
                </li>
              ))}
            </section>
          ))}
      </ul>
    </div>
  );
}
