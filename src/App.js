import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import "./App.css";

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [waveLength, setWaveLength] = useState("1310");
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

  const handleWave = (e) => {
    setWaveLength(e.target.value);
  };

  const handleModal = () => {
    setModal(true);
  };
  const handleAdd = () => {
    setModal(false);
  };

  const handleCallback = (data) => {
    setChildData(data);
    console.log(childData);
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

      <form>
        <label htmlFor="wave">Choose a Wave Length: </label>

        <select name="wave" id="wave" onChange={handleWave}>
          <option value="1310">1310</option>
          <option value="1490">1490</option>
          <option value="1550">1550</option>
        </select>
      </form>
      <input type="button" value="add splitter" onClick={handleModal} />
      {modal ? (
        <Modal show={modal} handleClose={handleAdd}>
          <Selector callback={handleCallback} />
        </Modal>
      ) : null}
      <br />
      {(start - (length / 1000) * waveLengths[waveLength]).toFixed(2)}
    </div>
  );
};
