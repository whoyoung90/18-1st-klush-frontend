import React, { Component } from "react";
import SubCategory from "./Components/SubCategory/SubCategory";

import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    const { categoryName, subCategoryList } = this.props;
    return (
      <div>
        <header className="headerContent">
          <div className="headerLeftColumn">{categoryName}</div>
          <div className="headerRightColumn">
            <select
              name="filter"
              id="radio"
              className="productShowFilter"
              onChange={this.props.checkSelect}
            >
              <option value="recommendation">추천순</option>
              <option value="bestSeller">판매인기순</option>
              <option value="lowerPrice">낮은가격순</option>
              <option value="higherPrice">높은가격순</option>
              <option value="reviewCount">리뷰많은순</option>
              <option value="isNew">신제품순</option>
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
