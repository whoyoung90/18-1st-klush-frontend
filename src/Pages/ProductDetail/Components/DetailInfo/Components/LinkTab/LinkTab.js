import React, { Component } from "react";

import "./LinkTab.scss";

class LinkTab extends Component {
  render() {
    return (
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
              {TAB_OBJ[tab]}
            </a>
          );
        })}
      </div>
    );
  }
}

const TAB_OBJ = {
  detail: "상품상세정보",
  delivery: "배송/교환 및 반품안내",
};

export default LinkTab;
