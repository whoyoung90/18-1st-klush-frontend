import React, { Component } from "react";
import footerImg from "./lush-footer.png";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const FOOTER = {
      Info: ["고객센터", "02-521-8238", "KlushGroup@klush.co.kr"],
      Menu: [
        "스카우트",
        "회사소개",
        "개인정보처리방침",
        "영상정보관리지침",
        "이용약관",
        "고객센터",
      ],
    };

    return (
      <footer className="footerAll">
        <img src={footerImg} className="icons" />
        <ul className="footerLeftWrap">
          <a href="/main" className="footerLogo">
            KLUSH
          </a>
          {FOOTER.Info.map(el => (
            <li className="logoInfo">{el}</li>
          ))}
        </ul>
        <div className="footerRightWrap">
          <ul className="footerWrap">
            {FOOTER.Menu.map(el => (
              <li className="footerLink">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <span className="footerLinkInfo">
            매주 금요일 오후, 구독자님을 위한
            <br />
            제품과 브랜드 이야기를 전해드립니다.
            <br />
            <li>구독은 언제든지 해지하실 수 있습니다.</li>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
