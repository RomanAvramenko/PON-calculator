import React, { useState } from "react";
import "./Selector.scss";

export const Selector = ({ callback, handleClose }) => {
  const [splitter, setSplitter] = useState("95/5");
  const [attenuation, setAttenuation] = useState(0);
  const splittersValue = {
    "95/5": [0.32, 13.7],
    "90/10": [0.49, 10.0],
    "85/15": [0.76, 8.16],
    "80/20": [1.06, 7.11],
    "75/25": [1.42, 6.29],
    "70/30": [1.56, 5.39],
    "65/35": [1.93, 4.56],
    "60/40": [2.34, 4.01],
    "55/45": [2.71, 3.73],
    "50/50": [3.15, 3.17],
  };
  const handleChange = (e) => {
    setSplitter(e.target.value);
  };
  const handleAttenuation = (e) => {
    setAttenuation(e.target.value);
  };

  const handleSubmit = (e) => {
    const tailIndex = splittersValue[splitter].findIndex(
      (i) => i === +attenuation
    );
    callback({
      id: Date.now(),
      label: splitter.split('/'),
      attenuation: attenuation,
      tailIndex,
    });
    handleClose();
    e.preventDefault();
  };

  return (
    <div className="selector">
      <form>
        <label htmlFor="splitters">Выберете делитель: </label>
        <select
          name="splitters"
          id="splitters"
          value={splitter}
          onChange={handleChange}
        >
          <option value="95/5">95/5</option>
          <option value="90/10">90/10</option>
          <option value="85/15">85/15</option>
          <option value="80/20">80/20</option>
          <option value="75/25">75/25</option>
          <option value="70/30">70/30</option>
          <option value="65/35">65/35</option>
          <option value="60/40">60/40</option>
          <option value="55/45">55/45</option>
          <option value="50/50">50/50</option>
        </select>
      </form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tails">Выберете сторону: </label>
        <br />
        <input
          type="radio"
          name="attenuation"
          value={splittersValue[splitter][0]}
          onChange={handleAttenuation}
        />
        <p>Несущая сторона - {splittersValue[splitter][0]}</p>
        <input
          type="radio"
          name="attenuation"
          value={splittersValue[splitter][1]}
          onChange={handleAttenuation}
        />
        <p>Сброс - {splittersValue[splitter][1]}</p>
        <input type="submit" value="добавить" />
      </form>
    </div>
  );
};
