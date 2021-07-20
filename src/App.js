import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import "./App.css";

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
      sumOfSplitters = childData.reduce((a, b) => +a + +b);
    }
    return (
      start -
      sumOfSplitters -
      (length / 1000) * waveLengths[waveLength]
    ).toFixed(2);
  };
  return (
    <div className="App">
      <label>Enter start signal: </label>
      <input
        type="number"
        id="length"
        name="length"
        value={start}
        onChange={handleStart}
      ></input>
      <br />
      <label>Enter length of line: </label>
      <input
        type="number"
        id="length"
        name="length"
        value={length}
        onChange={handleLength}
      ></input>

      <input type="button" value="add splitter" onClick={handleModal} />
      {modal ? (
        <Modal show={modal}>
          <Selector callback={handleCallback} handleClose={handleAdd} />
        </Modal>
      ) : null}
      <br />
      <ul>
        {childData.map((i, idx) => (
          <li key={(i * idx).toFixed()}>-{i}</li>
        ))}
      </ul>
      <br />
      <ul>
        <li>1310:{result(1310)}</li>
        <li>1490:{result(1490)}</li>
        <li>1550:{result(1550)}</li>
      </ul>
    </div>
  );
};
