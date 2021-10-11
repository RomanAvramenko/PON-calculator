import { useState, lazy, Suspense } from "react";
import "./App.scss";

const Modal = lazy(() => import("./components/modal/Modal"));
const Selector = lazy(() => import("./components/selector/Selector"));
const Result = lazy(() => import("./components/result/Result"));
const SplitterList = lazy(() =>
  import("./components/splitterList/SplitterList")
);
const Inputs = lazy(() => import("./components/inputs/Inputs"));
const Map = lazy(() => import("./components/map/Map"));

const renderLoader = () => <p>Loading</p>;

export const App = () => {
  const [start, setStart] = useState(0);
  const [length, setLength] = useState(0);
  const [splices, setSplices] = useState(0);
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
    setLength(+mapLength);
    setMapModal(false);
  };

  const handleCount = (e) => {
    setSplices(e.target.value);
  };

  const handleModal = () => {
    setModal(true);
  };
  const handleAdd = () => {
    setModal(false);
  };

  const handleCallback = (data) => {
    setChildData([...childData, data]);
    setSplices(+splices + 1);
  };

  const handleChange = (data) => {
    setChildData(data);
  };

  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
        {modal && (
          <Modal show={modal}>
            <Selector callback={handleCallback} handleClose={handleAdd} />
          </Modal>
        )}
        {mapModal ? (
          <Modal show={mapModal}>
            <Map handleMapLength={handleMapLength} />
          </Modal>
        ) : null}
        <Inputs
          length={length}
          handleLength={handleLength}
          handleMapModal={handleMapModal}
          start={start}
          handleStart={handleStart}
          count={splices}
          handleCount={handleCount}
          handleModal={handleModal}
        />
        <SplitterList data={childData} change={handleChange} />
        <Result
          data={childData}
          start={start}
          length={length}
          splices={splices}
        />
      </Suspense>
    </div>
  );
};
