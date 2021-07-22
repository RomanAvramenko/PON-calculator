import React from "react";
import './Inputs.scss'

export const Inputs = ({
  length,
  handleLength,
  start,
  handleStart,
  count,
  handleCount,
  handleModal,
}) => {
  return (
    <div className="inputs">
      <div className="inputs_item">
        <label>начальный сигнал: </label>
        <input
          type="number"
          id="length"
          name="length"
          value={start}
          onChange={handleStart}
        />
        dBm
      </div>
      <div className="inputs_item">
        <label>протяженность линии: </label>
        <input
          type="number"
          id="length"
          name="length"
          min="0"
          max="30000"
          value={length}
          onChange={handleLength}
        />
        метров
      </div>
      <div className="inputs_item">
        <label>количество сварок: </label>
        <input
          type="number"
          id="length"
          name="length"
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
