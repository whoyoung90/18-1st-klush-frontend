import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductContent from "./ProductContent";
import "./ProductTitle.scss";

export default function ProductTitle() {
  const [title, setTitle] = useState([]);

  const getProductTitle = () => {
    axios.get("/data/productNavBar.json").then(res => setTitle(res.data.data));
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
