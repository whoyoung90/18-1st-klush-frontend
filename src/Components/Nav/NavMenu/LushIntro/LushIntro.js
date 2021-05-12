import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductContent from "../Product/ProductContent";
import "../Product/ProductTitle.scss";

export default function LushIntro() {
  const [dropDown, setDropDown] = useState([]);

  const getLushIntro = () => {
    axios
      .get("/data/productNavBar.json")
      .then(res => setDropDown(res.data.intro));
  };

  useEffect(() => {
    getLushIntro();
  }, []);

  return (
    <li className="dropDown">
      <Link className="navIntro" to="#">
        러쉬 소개
      </Link>
      <div className="dropDownMenu">
        {dropDown.map(list => (
          <ProductContent title={list.title} items={list.items} />
        ))}
      </div>
    </li>
  );
}
