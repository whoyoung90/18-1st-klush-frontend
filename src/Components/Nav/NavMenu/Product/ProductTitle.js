import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductContent from "./ProductContent";
import "./ProductTitle.scss";
import { NAV_BAR_API } from "../../../../config";

export default function ProductTitle() {
  const [title, setTitle] = useState([]);

  const getProductTitle = () => {
    axios.get(`${NAV_BAR_API}`).then(res => setTitle(res.data.data));
  };

  useEffect(() => {
    getProductTitle();
  }, []);

  return (
    <li className="dropDown">
      <Link className="navIntro" to="/product_list">
        제품
      </Link>
      <div className="dropDownMenu">
        {title.map(list => (
          <ProductContent title={list.title} items={list.items} />
        ))}
      </div>
    </li>
  );
}
