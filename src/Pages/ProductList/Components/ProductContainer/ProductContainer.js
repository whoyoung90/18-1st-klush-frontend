import React, { Component } from "react";

import "./ProductContainer.scss";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import Product from "./Components/Product/Product";

class ProductContainer extends Component {
  // this.props.products.sort(a => (a.is_soldout ? 1 : -1));

  render() {
    const productList = this.props.products;
    const {
      categoryName,
      subCategoryList,
      products,
      clickModal,
      checkSelect,
    } = this.props;
    return (
      <div className="productContainer">
        <div className="productContent">
          {subCategoryList && (
            <ContentHeader
              categoryName={categoryName}
              subCategoryList={subCategoryList}
              products={products}
              checkSelect={checkSelect}
              sortBySubCategory={this.props.sortBySubCategory}
            />
          )}
          <div className="contentList">
            {productList &&
              productList.map(product => {
                return (
                  <Product
                    key={product.product_id}
                    productInfo={product}
                    clickModal={clickModal}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
