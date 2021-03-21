import React, { Component } from "react";
import footerImg from "./lush-footer.png";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const FOOTER_INFO = [
      { key: "logoInfo", value: "고객센터" },
      { key: "logoInfo", value: "1644-2357" },
      { key: "logoInfo", value: "KlushGroup@klush.co.kr" },
    ];
    const FOOTER_MENU = [
      { key: "footerLink", value: "스카우트" },
      { key: "footerLink", value: "회사소개" },
      { key: "footerLink", value: "개인정보처리방침" },
      { key: "footerLink", value: "영상정보관리지침" },
      { key: "footerLink", value: "이용약관" },
      { key: "footerLink", value: "고객센터" },
    ];

    return (
      <footer className="footers">
        <img src={footerImg} className="icons" />
        <ul className="footerLeftWrap">
          <a href="/main" className="footerLogo">
            KLUSH
          </a>
          {FOOTER_INFO.map(el => (
            <li className={el.key}>{el.value}</li>
          ))}
        </ul>
        <div className="footerRightWrap">
          <ul className="footerWrap">
            {FOOTER_MENU.map(el => (
              <li className={el.key}>
                <a href="#">{el.value}</a>
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
