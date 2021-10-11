import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Ruler } from "../ruler/Ruler";
import "./Map.scss";

const Map = ({ handleMapLength }) => {
  const [length, setLength] = useState(0);

  const callback = (data) => {
    setLength(data);
  };

  return (
    <div id="mapid">
      <MapContainer
        center={[50.4421237150998, 30.520453831008716]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
        <Ruler callback={callback} />
      </MapContainer>
      <input
        className="map-button"
        type="button"
        value="добавить"
        onClick={() => handleMapLength(length)}
      />
    </div>
  );
};

export default Map;
