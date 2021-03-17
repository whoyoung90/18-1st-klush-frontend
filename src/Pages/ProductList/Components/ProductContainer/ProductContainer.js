import React, { Component } from "react";

import "./ProductContainer.scss";

import ContentHeader from "./Components/ContentHeader/ContentHeader";
import Product from "./Components/Product/Product";

class ProductContainer extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      sortKey: "recommendation",
    };
  }

  componentDidMount() {
    this.listSort();
  }

  checkSelect = e => {
    this.setState(
      {
        sortKey: e.target.value,
      },
      () => {
        this.listSort();
      }
    );
  };

  listSort = () => {
    if (this.state.sortKey === "isNew") {
      this.setState({
        productList: this.props.products.sort(
          (a, b) =>
            b.productLabel.includes("NEW") - a.productLabel.includes("NEW")
        ),
      });
    } else if (
      this.state.sortKey === "recommendation" ||
      this.state.sortKey === "bestSeller"
    ) {
      this.setState({
        productList: this.props.products.sort(
          (a, b) => a[this.state.sortKey] - b[this.state.sortKey]
        ),
      });
    } else if (this.state.sortKey === "reviewCount") {
      this.setState({
        productList: this.props.products.sort(
          (a, b) => b[this.state.sortKey] - a[this.state.sortKey]
        ),
      });
    } else {
      if (this.state.sortKey === "lowerPrice") {
        this.setState({
          productList: this.props.products.sort(
            (a, b) => Number(a.productPrice) - Number(b.productPrice)
          ),
        });
      } else {
        this.setState({
          productList: this.props.products.sort(
            (a, b) => Number(b.productPrice) - Number(a.productPrice)
          ),
        });
      }
    }
  };

  sortByisNew = a => {
    a = a.filter(b => b.productLabel.includes("NEW"));
    return a;
  };

  render() {
    const { productList } = this.state;
    const { categoryName, subCategoryList, products } = this.props;
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
              productList.map((product, idx) => {
                return <Product key={idx} productInfo={product} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
