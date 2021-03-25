import React, { Component } from "react";

import "./ProductContainer.scss";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import Product from "./Components/Product/Product";

class ProductContainer extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      sortKey: "",
    };
  }

  checkSelect = e => {
    this.setState({
      sortKey: e.target.value,
    });
  };

  render() {
    const { productList } = this.state;
    const { categoryName, subCategoryList, products, clickModal } = this.props;
    return (
      <div className="productContainer">
        <div className="productContent">
          {subCategoryList && (
            <ContentHeader
              categoryName={categoryName}
              subCategoryList={subCategoryList}
              products={products}
              checkSelect={this.checkSelect}
            />
          )}
          <div className="contentList">
            {productList &&
              productList.map(product => {
                return (
                  <Product
                    key={product.id}
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
