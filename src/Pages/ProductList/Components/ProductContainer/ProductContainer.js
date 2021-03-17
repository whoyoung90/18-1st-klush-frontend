import React, { Component } from "react";

import "./ProductContainer.scss";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import Product from "./Components/Product/Product";

class ProductContainer extends Component {
  render() {
    const { categoryName, subCategoryList, products } = this.props;
    return (
      <div className="productContainer">
        <div className="productContent">
          {subCategoryList && (
            <ContentHeader
              categoryName={categoryName}
              subCategoryList={subCategoryList}
              products={products}
            />
          )}
          <div className="contentList">
            {products &&
              products.map((product, idx) => {
                return <Product key={idx} productInfo={product} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
