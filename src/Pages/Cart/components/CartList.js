import React from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import "./CartList.scss";

import { selectAll } from "../../../store/actions/index";
function CartList({
  cartList,
  isAllChecked,
  checkEnter,
  handleItemCounts,
  handleSelect,
}) {
  const dispatch = useDispatch();
  return (
    <table className="cartTable">
      <thead className="cartTableHead">
        <tr className="cartTableRow">
          <th className="cartTableCheck">
            <span className="formCheck">
              <input
                type="checkbox"
                id="allCheck"
                className="allCheck"
                onClick={() => dispatch(selectAll())}
                checked={isAllChecked}
              ></input>
              <label for="allCheck" className="allCheckLabel"></label>
            </span>
          </th>
          <th className="productDetail">제품 정보</th>
          <th className="productCount">수량</th>
          <th className="productPrice">금액</th>
          <th className="productBenefits">복지혜택</th>
          <th className="productTotalPrice">합계금액</th>
          <th className="productShipPrice">배송비</th>
        </tr>
      </thead>
      <tbody>
        {cartList
          ? cartList.map((item, idx) => (
              <CartItem
                rowspan={!idx && cartList.length}
                key={idx}
                cartList={item}
                checkEnter={checkEnter}
                handleItemCounts={handleItemCounts}
                handleSelect={handleSelect}
              />
            ))
          : null}
      </tbody>
    </table>
  );
}

export default CartList;
