import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import { Result } from "./components/result/Result";
import "./App.scss";
import { SplitterList } from "./components/splitterList/SplitterList";
import { Inputs } from "./components/inputs/Inputs";

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [childData, setChildData] = useState([]);

  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
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

  const handleChange = (data) => {
    setChildData(data);
  };

  return (
    <div className="App">
      <Inputs
        length={length}
        handleLength={handleLength}
        start={start}
        handleStart={handleStart}
        count={count}
        handleCount={handleCount}
        handleModal={handleModal}
      />
      {modal ? (
        <Modal show={modal}>
          <Selector callback={handleCallback} handleClose={handleAdd} />
        </Modal>
      ) : null}
      <SplitterList data={childData} change={handleChange} />
      <Result data={childData} start={start} length={length} splices={count} />
    </div>
  );
};
