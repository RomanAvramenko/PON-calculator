import React, { useState } from "react";
import { splittersValue } from "../../splittersValue";
import "./Selector.scss";

export const Selector = ({ callback, handleClose }) => {
  const [splitter, setSplitter] = useState(0);
  const [attenuation, setAttenuation] = useState(0);

  const handleChange = (e) => {
    setSplitter(e.target.value);
  };
  const handleAttenuation = (e) => {
    setAttenuation(e.target.value);
  };

  const handleSubmit = (e) => {
    if (attenuation > 0) {
      const tailIndex = splittersValue[splitter].tails.findIndex(
        (i) => i === +attenuation
      );

      callback({
        id: Date.now(),
        label: splittersValue[splitter].label.split("/"),
        attenuation: attenuation,
        tailIndex,
      });
    }
    handleClose();
    e.preventDefault();
  };

  return (
    <div className="selector">
      <form className="selector_splitter">
        <label className="selector_splitter_label" htmlFor="splitters">
          Выберете делитель
        </label>
        <select
          className="selector_splitter_select"
          name="splitters"
          id="splitters"
          value={splitter}
          onChange={handleChange}
        >
          {splittersValue.map((i, idx) => (
            <option key={idx} value={idx}>
              {i.label}
            </option>
          ))}
        </select>
      </form>
      <form className="selector_tails" onSubmit={handleSubmit}>
        <label className="selector_tails_label" htmlFor="tails">
          Выберете сторону:
        </label>
        {splittersValue[splitter].tails.length === 1 ? (
          <div key="0" className="selector_tails_side">
            <p className="selector_tails_side_name">
              {splittersValue[splitter].label}: -
              {splittersValue[splitter].tails[0]}
            </p>
            <input
              className="selector_tails_side_radio"
              type="radio"
              name="attenuation"
              value={splittersValue[splitter].tails[0]}
              onChange={handleAttenuation}
            />
          </div>
        ) : (
          splittersValue[splitter].tails.map((i, idx) => (
            <div key={idx} className="selector_tails_side">
              <p className="selector_tails_side_name">
                {splittersValue[splitter].label.split("/")[idx]}: -{i}
              </p>
              <input
                className="selector_tails_side_radio"
                type="radio"
                name="attenuation"
                value={i}
                onChange={handleAttenuation}
              />
            </div>
          ))
        )}
        <input
          className="selector_tails_button"
          type="submit"
          value="добавить"
        />
      </form>
    </div>
  );
};
