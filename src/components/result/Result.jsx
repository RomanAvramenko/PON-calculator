import React from "react";
import "./Result.scss";

export const Result = ({ data, start, length, splices }) => {
  const waveLengths = {
    1310: 0.33,
    1490: 0.24,
    1550: 0.22,
  };
  const result = (waveLength) => {
    let sumOfSplitters = 0;
    if (data.length > 0) {
      sumOfSplitters = data.map((i) => i.attenuation).reduce((a, b) => +a + +b);
    }
    return (
      start -
      sumOfSplitters -
      splices * 0.2 -
      (length / 1000) * waveLengths[waveLength]
    ).toFixed(2);
  };
  return (
    <div className="result">
      <h3 className="result_label">Затухание на длинне волны</h3>
      <ul className="result_list">
        <li className="result_list_item">
          <p className="result_list_item_label">1310</p>
          <div className="result_list_item_value">{result(1310)}</div>
        </li>
        <li className="result_list_item">
          <p className="result_list_item_label">1490</p>
          <div className="result_list_item_value">{result(1490)}</div>
        </li>
        <li className="result_list_item">
          <p className="result_list_item_label">1550</p>
          <div className="result_list_item_value">{result(1550)}</div>
        </li>
      </ul>
    </div>
  );
};
