import React, { Component } from "react";
import SubCategory from "./Components/SubCategory/SubCategory";

import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    const { categoryName, subCategoryList, checkSelect } = this.props;
    return (
      <div>
        <header className="headerContent">
          <div className="headerLeftColumn">{categoryName}</div>
          <div className="headerRightColumn">
            <select
              name="filter"
              id="radio"
              className="productShowFilter"
              onChange={checkSelect}
            >
              <option value="" defaultValue>
                정렬기준을 선택해주세요
              </option>
              <option value="?is_new=True">신제품순</option>
              <option value="?sort=-price">낮은가격순</option>
              <option value="?sort=price">높은가격순</option>
            </select>
          </div>
        </header>
        <hr />
        <div className="subCategoryList">
          <ul>
            {subCategoryList &&
              subCategoryList.map((category, idx) => {
                return <SubCategory key={idx} category={category} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
