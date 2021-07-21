import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import { Result } from "./components/result/Result";
import "./App.scss";
import { SplitterList } from "./components/splitterList/SplitterList";

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [modal, setModal] = useState(false);
  const [childData, setChildData] = useState([]);

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
      <SplitterList data={childData}/>
      <Result data={childData} start={start} length={length} />
    </div>
  );
};
