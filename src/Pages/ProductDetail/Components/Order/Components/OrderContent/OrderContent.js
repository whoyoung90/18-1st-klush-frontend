import React, { Component } from "react";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import ContentBody from "./Components/ContentBody/ContentBody";
import ContentFooter from "./Components/ContentFooter/ContentFooter";
import Buttons from "./Components/Buttons/Buttons";

import "./OrderContent.scss";

class OrderContent extends Component {
  render() {
    return (
      <div className="contentContainer">
        <ContentHeader />
        <div className="devideLine" />
        <ContentBody />
        <div className="devideLine" />
        <ContentFooter />
        <Buttons />
      </div>
    );
  }
}

export default OrderContent;
