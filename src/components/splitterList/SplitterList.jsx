import React from "react";

export const SplitterList = ({ data }) => {
  const splitterTemplate = data.map((i) => {
    if (i.label[0] > 1) {
      const highlight0 = i.tailIndex === 0 ? "highLight" : null;
      const highlight1 = i.tailIndex === 1 ? "highLight" : null;
      return (
        <li key={i.id.toFixed()} className="app-attenuation_item">
          <div className={highlight0}>{i.label[0]}</div>/
          <div className={highlight1}>{i.label[1]}</div>: -{i.attenuation}
        </li>
      );
    } else {
      return (
        <li key={i.id.toFixed()} className="app-attenuation_item">
          <div className="highLight">
            {i.label[0]}/{i.label[1]}
          </div>
          : -{i.attenuation}
        </li>
      );
    }
  });
  return (
    <div className="app-table">
      <ul className="app-attenuation">{splitterTemplate}</ul>
    </div>
  );
};
