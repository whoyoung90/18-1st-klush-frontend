import React, { Component } from "react";
import * as Config from "./Config";
import Bath from "./Images/bath.png";
import BathFun1 from "./Images/bath_fun1.jpg";
import Campaign from "./Images/campaign.png";
import BubbleBar from "./Images/bubbleBar.png";
import Event from "./Images/event.png";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  componentDidMount() {
    fetch("/data/mainData.json")
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  }
  render() {
    console.log(this.state.list);
    return (
      <div className="main">
        <div className="mainImg">
          <img src={Bath} />
        </div>
        <div className="itemWrap">
          <h2>나만 알고 싶은 KLUSH</h2>
          <ul className="myItem">
            {this.state.list.map(el => (
              <li className="myList">
                <a href="#" id={el.id} className="myItemList">
                  <img className="myImg" src={el.src} />
                  <span className="imgTitle">{el.imgTitle}</span>
                  <span className="imgHash">{el.imgHash}</span>
                </a>
                <div className="cost">${el.cost}</div>
              </li>
            ))}
          </ul>
          <div className="listButton">
            <a href="#num1" className="button">
              <img className="dot" src={Config.dot} />
            </a>
            <a href="#num2" className="button">
              <img className="dot" src={Config.dot} />
            </a>
          </div>
        </div>
        <div className="tableWrap">
          <div className="leftTable">
            <img src={Campaign} />
          </div>
          <div className="rightTable">
            <a className="right1" href="/main">
              <img src={BubbleBar} />
            </a>
            <img className="right2" src={Event} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
