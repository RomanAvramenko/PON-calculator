import React from "react";
import "./Inputs.scss";

const Inputs = ({
  length,
  handleLength,
  handleMapModal,
  start,
  handleStart,
  count,
  handleCount,
  handleModal,
}) => {
  return (
    <div className="inputs">
      <div className="inputs_item">
        <label htmlFor="signal">начальный сигнал: </label>
        <input
          className="inputs_item_input"
          type="number"
          id="signal"
          name="signal"
          value={start}
          onChange={handleStart}
        />
        dBm
      </div>
      <div className="inputs_item">
        <label htmlFor="length">протяженность линии: </label>
        <div className="inputs_item_length">
          <input
            className="inputs_item_length_input"
            type="number"
            id="length"
            name="length"
            min="0"
            max="30000"
            value={length}
            onChange={handleLength}
          />
          <input
            className="inputs_item_length_map"
            type="button"
            value=""
            onClick={handleMapModal}
          />
        </div>
        метров
      </div>
      <div className="inputs_item">
        <label htmlFor="splices">количество сварок: </label>
        <input
          className="inputs_item_input"
          min="0"
          type="number"
          id="splices"
          name="splices"
          value={count}
          onChange={handleCount}
        />
        штук
      </div>
      <input
        className="inputs_button"
        type="button"
        value="добавить делитель"
        onClick={handleModal}
      />
    </div>
  );
};

export default Inputs;
