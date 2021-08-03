import { useState } from "react";
import { Selector } from "./components/selector/Selector";
import { Modal } from "./components/modal/Modal";
import { Result } from "./components/result/Result";
import { SplitterList } from "./components/splitterList/SplitterList";
import { Inputs } from "./components/inputs/Inputs";
import { Map } from "./components/map/Map";
import "./App.scss";

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const [childData, setChildData] = useState([]);

  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleMapModal = () => {
    setMapModal(true);
  };

  const handleMapLength = (mapLength) => {
    setLength(mapLength)
    setMapModal(false);
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
        handleMapModal={handleMapModal}
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
      {mapModal ? (
        <Modal show={mapModal}>
          <Map handleMapLength={handleMapLength}/>
        </Modal>
      ) : null}
      <SplitterList data={childData} change={handleChange} />
      <Result data={childData} start={start} length={length} splices={count} />
    </div>
  );
};
