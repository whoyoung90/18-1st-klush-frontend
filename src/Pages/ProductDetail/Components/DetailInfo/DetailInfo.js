import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";

import LinkTab from "./Components/LinkTab/LinkTab";

import "./DetailInfo.scss";

class DetailInfo extends Component {
  render() {
    const { productDetail, reviewCount } = this.props;
    return (
      <section className="detailInfo">
        <div id="detail">
          <LinkTab reviewCount={reviewCount} tabName="detail" />
        </div>
        <div className="infoTitleContainer">
          <span className="categoryName infoTitle">
            {productDetail.category}
          </span>
          <span className="productName infoTitle">{productDetail.name}</span>
          <span className="productEnName infoTitle">
            {productDetail.enName}
          </span>
        </div>
        <div className="infoImgContainer">
          <img
            className="infoMainImg"
            src="https://images.unsplash.com/photo-1505528638251-3ef301e4988e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aCUyMGJvbWJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="main"
          />
          <div className="infoMainImgReview">
            <h1 className="reviewHeader">
              미리 써 본 후기&nbsp;
              {[0, 0, 0, 0, 0].map((x, idx) => (
                <AiFillStar key={idx + 10} />
              ))}
            </h1>
            <article className="reviewContent">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </article>
          </div>
        </div>
        <div className="infoProductDescContainer">
          <p className="infoProductDesc">{productDetail.description}</p>
        </div>
        <img
          className="infoMiddleImg"
          src="https://images.unsplash.com/photo-1505528638251-3ef301e4988e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aCUyMGJvbWJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
          alt={productDetail.name}
        />
        <div className="infoFooter">
          <article className="infoFooterUse">
            <h1 className="useTitle">사용방법</h1>
            <p className="useContent">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </p>
            <div className="useHashTags">
              {[
                "쓰레기없데이",
                "이스터에디션",
                "베쓰밤",
                "BathBomb",
                "HumptyDumpty",
                "험프티덤프티",
              ].map(el => "#" + el + " ")}
            </div>
          </article>
          <img
            className="infoFooterImg"
            src="https://images.unsplash.com/photo-1601215451470-87ebe1d9d57d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aCUyMGJvbWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt={productDetail.name}
          />
        </div>
        <div id="delivery">
          <LinkTab reviewCount={reviewCount} tabName="delivery" />
        </div>
      </section>
    );
  }
}

export default DetailInfo;
