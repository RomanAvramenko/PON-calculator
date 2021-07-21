import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import "./App.scss";

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [modal, setModal] = useState(false);
  const [childData, setChildData] = useState([]);
  const waveLengths = {
    1310: 0.33,
    1490: 0.24,
    1550: 0.22,
  };
  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleModal = () => {
    setModal(true);
  };
  const handleAdd = () => {
    setModal(false);
  };

  const handleCallback = (data) => {
    setChildData([...childData, data]);
  };

  const result = (waveLength) => {
    let sumOfSplitters = 0;
    if (childData.length > 0) {
      sumOfSplitters = childData
        .map((i) => i.attenuation)
        .reduce((a, b) => +a + +b);
    }
    return (
      start -
      sumOfSplitters -
      (length / 1000) * waveLengths[waveLength]
    ).toFixed(2);
  };

  return (
    <div className="App">
      <label>Введите начальный сигнал: </label>
      <input
        type="number"
        id="length"
        name="length"
        value={start}
        onChange={handleStart}
      ></input>
      <br />
      <label>Введите протяженность линии: </label>
      <input
        type="number"
        id="length"
        name="length"
        value={length}
        onChange={handleLength}
      ></input>
      <br />
      <input type="button" value="добавить делитель" onClick={handleModal} />
      {modal ? (
        <Modal show={modal}>
          <Selector callback={handleCallback} handleClose={handleAdd} />
        </Modal>
      ) : null}
      <br />
      <div className="app-table">
        <ul className="app-attenuation">
          {childData.map((i) => {
            const highlight0 = i.tailIndex === 0 ? "highLight" : null;
            const highlight1 = i.tailIndex === 1 ? "highLight" : null;
            return (
              <li key={i.id.toFixed()} className="app-attenuation_item">
                <div className={highlight0}>{i.label[0]}</div>/
                <div className={highlight1}>{i.label[1]}</div> -{i.attenuation}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <ul>
        <li>1310:{result(1310)}</li>
        <li>1490:{result(1490)}</li>
        <li>1550:{result(1550)}</li>
      </ul>
    </div>
  );
};
