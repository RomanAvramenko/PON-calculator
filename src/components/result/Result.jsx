import React from "react";

export const Result = ({ data, start, length }) => {
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
      (length / 1000) * waveLengths[waveLength]
    ).toFixed(2);
  };
  return (
    <>
      <ul>
        <li>Затухание на длинне волны 1310: {result(1310)}</li>
        <li>Затухание на длинне волны 1490: {result(1490)}</li>
        <li>Затухание на длинне волны 1550: {result(1550)}</li>
      </ul>
    </>
  );
};
