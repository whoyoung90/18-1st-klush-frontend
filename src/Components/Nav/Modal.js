import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { open, close, children } = this.props;

    return (
      <div className={open && "openModal modal"}>
        {open && (
          <section>
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
            <main className="innerText">{children}</main>
          </section>
        )}
      </div>
    );
  }
}
export default Modal;
