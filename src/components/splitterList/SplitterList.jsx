import React from "react";
import "./SplitterList.scss";

export const SplitterList = ({ data, change }) => {
  const handleDelete = (id) => {
    change(data.filter((el) => el.id !== id));
  };
  const splitterTemplate = data.map((i) => {
    if (i.label[0] > 1) {
      const highlight0 = i.tailIndex === 0 ? "highLight" : null;
      const highlight1 = i.tailIndex === 1 ? "highLight" : null;
      return (
        <li key={i.id.toFixed()} className="app-attenuation_item">
          <div className="app-attenuation_item_label">
            <div className={highlight0}>{i.label[0]}</div>/
            <div className={highlight1}>{i.label[1]}</div>
          </div>
          <div className="app-attenuation_item_value"> -{i.attenuation}</div>
          <button
            className="app-attenuation_item_button"
            onClick={() => handleDelete(i.id)}
          >
            <svg
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0"
                fill="#f44336"
              />
              <path
                d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                fill="#fafafa"
              />
            </svg>
          </button>
        </li>
      );
    } else {
      return (
        <li key={i.id.toFixed()} className="app-attenuation_item">
          <div className="app-attenuation_item_label">
            <div className="highLight">
              {i.label[0]}/{i.label[1]}
            </div>
          </div>
          <div className="app-attenuation_item_value"> -{i.attenuation}</div>
          <button
            className="app-attenuation_item_button"
            onClick={() => handleDelete(i.id)}
          >
            <svg
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0"
                fill="#f44336"
              />
              <path
                d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                fill="#fafafa"
              />
            </svg>
          </button>
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
