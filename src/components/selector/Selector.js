import React, { useState } from "react";
import "./Selector.css";

export const Selector = ({ callback, handleClose }) => {
  const [state, setstate] = useState("95");
  const [attenuation, setAttenuation] = useState(0);
  const splittersValue = {
    95: [0.32, 13.7],
    90: [0.49, 10.0],
    85: [0.76, 8.16],
    80: [1.06, 7.11],
    75: [1.42, 6.29],
    70: [1.56, 5.39],
    65: [1.93, 4.56],
    60: [2.34, 4.01],
    55: [2.71, 3.73],
    50: [3.17, 3.17],
  };

  const handleChange = (e) => {
    setstate(e.target.value);
  };
  const handleAttenuation = (e) => {
    setAttenuation(e.target.value);
  };

  const handleSubmit = (e) => {
    callback(attenuation);
    handleClose();
    e.preventDefault();
  };

  return (
    <div className="selector">
      <form>
        <label htmlFor="splitters">Choose a splitter: </label>

        <select
          name="splitters"
          id="splitters"
          value={state}
          onChange={handleChange}
        >
          <option value="95">95/5</option>
          <option value="90">90/10</option>
          <option value="85">85/15</option>
          <option value="80">80/20</option>
          <option value="75">75/25</option>
          <option value="70">70/30</option>
          <option value="65">65/35</option>
          <option value="60">60/40</option>
          <option value="55">55/45</option>
          <option value="50">50/50</option>
        </select>
      </form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tails">Choose a side: </label>
        <br />
        <input
          type="radio"
          name="attenuation"
          value={splittersValue[state][0]}
          onChange={handleAttenuation}
        />
        <p>Main - {splittersValue[state][0]}</p>
        <input
          type="radio"
          name="attenuation"
          value={splittersValue[state][1]}
          onChange={handleAttenuation}
        />
        <p>Off - {splittersValue[state][1]}</p>
        <input type="submit" value="add" />
      </form>
    </div>
  );
};
