import React from "react";
import "./Modal.css";

export const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="children">{children}</div>
      </section>
    </div>
  );
};
