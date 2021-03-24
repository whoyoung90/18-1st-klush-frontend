import React, { Component } from "react";

import "./LinkTab.scss";

class LinkTab extends Component {
  render() {
    return (
      this.props.reviewCount !== undefined && (
        <div className="linkTab">
          {Object.keys(TAB_OBJ).map((tab, idx) => {
            return (
              <a
                href={`#${tab}`}
                key={idx}
                className={
                  "tabBtn" + `${this.props.tabName === tab ? " focusBtn" : ""}`
                }
              >
                {tab === "review"
                  ? TAB_OBJ[tab] + ` (${this.props.reviewCount})`
                  : TAB_OBJ[tab]}
              </a>
            );
          })}
        </div>
      )
    );
  }
}

const TAB_OBJ = {
  detail: "상품상세정보",
  review: "상품후기",
  delivery: "배송/교환 및 반품안내",
};

export default LinkTab;
