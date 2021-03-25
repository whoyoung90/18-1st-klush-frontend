import React, { Component } from "react";
import "./Main.scss";
const IMAGE = [
  "/Images/trans1.jpg",
  "/Images/trans2.png",
  "/Images/trans3.png",
];

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      selectedImg: "/Images/trans1.jpg",
      intervalID: "",
      index: 0,
    };
  }
  change = () => {
    const { index } = this.state;
    if (index === IMAGE.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  };

  componentDidMount() {
    setInterval(() => this.change(), 1500);
    const id = setInterval(() => this.change(), 1500);
    this.setState({ intervalID: id });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return (
      <div className="mainImg">
        <img className="realImg" src={IMAGE[this.state.index]} alt="mainFeed" />
      </div>
    );
  }
}

export default MainSlide;
