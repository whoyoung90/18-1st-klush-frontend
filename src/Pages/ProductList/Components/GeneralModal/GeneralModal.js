import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import ModalButtons from "../ModalButtons/ModalButtons";

import "./GeneralModal.scss";

class GeneralModal extends Component {
  render() {
    return (
      <div className="heartModal modal">
        <div className="heartMain">
          <div className="heartMainHeader">
            <GrClose
              className="closeIcon"
              onClick={() => this.props.clickClose("showGeneralModal")}
            />
          </div>
          <div className="heartMainContent">
            <span className="mainText">
              {`상품이 ${this.props.text}에 담겼습니다.`}
            </span>
            <span className="subText">바로 확인 하시겠습니까?</span>
            <ModalButtons
              clickClose={this.props.clickClose}
              modalName="showGeneralModal"
              leftBtn="계속 쇼핑하기"
              rightBtn="확인하기"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralModal;
