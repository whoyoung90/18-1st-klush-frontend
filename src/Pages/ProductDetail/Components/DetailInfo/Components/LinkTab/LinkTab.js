import React, { Component } from "react";

import "./LinkTab.scss";

class LinkTab extends Component {
  constructor() {
    super();

    this.state = {
      tabObj: {
        detail: "상품상세정보",
        review: "상품후기",
        delivery: "배송/교환 및 반품안내",
      },
    };
  }

  render() {
    const { tabObj } = this.state;
    return (
      this.props.reviewCount !== undefined && (
        <div className="linkTab">
          {Object.keys(tabObj).map((tab, idx) => {
            return (
              <a
                href={`#${tab}`}
                key={idx}
                className={
                  "tabBtn" + `${this.props.tabName === tab ? " focusBtn" : ""}`
                }
              >
                {tab === "review"
                  ? tabObj[tab] + ` (${this.props.reviewCount})`
                  : tabObj[tab]}
              </a>
            );
          })}
        </div>
      )
    );
  }
}

export default LinkTab;
