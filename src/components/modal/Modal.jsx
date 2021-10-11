import React from "react";
import "./Modal.scss";

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal_main">
        <div className="children">{children}</div>
      </section>
    </div>
  );
};

export default Modal
