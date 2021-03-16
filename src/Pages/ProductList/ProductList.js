import React, { Component } from "react";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import Product from "./Components/Product/Product";

import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      listData: {},
    };
  }

  componentDidMount() {
    fetch("data/listData.json")
      .then(res => res.json())
      .then(result =>
        this.setState({
          listData: result,
        })
      )
      .catch(e => console.log(e));
  }

  render() {
    const {
      categoryName,
      categoryDesc,
      subCategoryList,
      products,
    } = this.state.listData;
    return (
      <div>
        <header className="imgContainer">
          <span className="imgContainerTitle">{categoryName}</span>
          <span className="imgContainerDesc">{categoryDesc}</span>
        </header>
        <div className="productContainer">
          <div className="productContent">
            {this.state.listData.subCategoryList && (
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
      </div>
    );
  }
}

export default ProductList;
