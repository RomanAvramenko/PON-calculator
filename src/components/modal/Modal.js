import React from "react";
import "./Modal.css";

export const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="children">{children}</div>
        <button onClick={handleClose}>add</button>
      </section>
    </div>
  );
};
