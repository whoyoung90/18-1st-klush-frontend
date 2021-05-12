import React from "react";
import "./SearchModal.scss";

export default function SearchModal({ handleModal }) {
  return (
    <div className="modalWrapper">
      <div className="modalInput">
        <input
          className="modalSearch"
          type="search"
          placeholder="오늘은 거품입욕 하는 날?"
        />
        <button className="closeBtn" onClick={handleModal}>
          x
        </button>
      </div>
    </div>
  );
}
