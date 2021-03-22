import React, { Component } from "react";

import "./ModalButtons.scss";

class ModalButtons extends Component {
  render() {
    return (
      <div className="modalButtons">
        <button
          className="continue"
          onClick={() => this.props.clickClose(this.props.modalName)}
        >
          {this.props.leftBtn}
        </button>
        <button className="confirm">{this.props.rightBtn}</button>
      </div>
    );
  }
}

export default ModalButtons;
