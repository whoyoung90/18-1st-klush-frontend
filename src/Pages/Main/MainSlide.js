import React, { Component } from "react";
import "./Main.scss";

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      img: ["/Images/trans1.jpg", "/Images/trans2.png", "/Images/trans3.png"],
      selectedImg: "/Images/trans1.jpg",
    };
  }

  timeChange = () => {
    this.setState(prevState => {
      if (prevState.selectedImg === this.state.img[0]) {
        return {
          selectedImg: this.state.img[1],
        };
      } else if (prevState.selectedImg === this.state.img[1]) {
        return {
          selectedImg: this.state.img[2],
        };
      } else {
        return { selectedImg: this.state.img[0] };
      }
    });
  };

  componentDidMount() {
    setInterval(() => this.timeChange(), 1500);
  }

  render() {
    const { selectedImg } = this.state;
    return (
      <div className="mainImg">
        <img src={selectedImg} alt="mainFeed" />
      </div>
    );
  }
}

export default MainSlide;
