import React, { Component } from "react";

import ImageContainer from "./Components/ImageContainer/ImageContainer";
import ProductContainer from "./Components/ProductContainer/ProductContainer";

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
      <div className="ProductListPage">
        <ImageContainer
          categoryName={categoryName}
          categoryDesc={categoryDesc}
        />
        {products && (
          <ProductContainer
            categoryName={categoryName}
            subCategoryList={subCategoryList}
            products={products}
          />
        )}
      </div>
    );
  }
}

export default ProductList;
