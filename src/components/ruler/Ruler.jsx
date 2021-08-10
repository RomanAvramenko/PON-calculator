import { useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "./Ruler.scss";

export const Ruler = ({ callback }) => {
  const map = useMap();
  const mapEvents = useMapEvents({
    click: () => {
      const lengthValue = mapEvents._container.textContent
        .slice(-16, -10)
        .match(/\d+/g);
      callback(!!lengthValue && lengthValue.join(""));
    },
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.panTo(
          new L.LatLng(position.coords.latitude, position.coords.longitude)
        );
      });
    } else {
      map.panTo(new L.LatLng(50.4421237150998, 30.520453831008716));
    }
  }, [map]);

  useEffect(() => {
    if (!map) return;
    L.control.ruler().addTo(map);
  }, [map]);

  return null;
};

(function (factory, window) {
  if (typeof exports === "object") {
    module.exports = factory(require("leaflet"));
  }
  if (typeof window !== "undefined" && window.L) {
    window.L.Ruler = factory(L);
  }
})(function (L) {
  L.Control.Ruler = L.Control.extend({
    options: {
      position: "topleft",
      circleMarker: {
        color: "black",
        radius: 2,
      },
      lineStyle: {
        color: "black",
        dashArray: "1,6",
      },
    },
    onAdd: function (map) {
      this._map = map;
      this._container = L.DomUtil.create("div", "leaflet-bar");
      this._container.classList.add("leaflet-ruler");
      L.DomEvent.disableClickPropagation(this._container);
      L.DomEvent.on(this._container, "click", this._toggleMeasure, this);
      this._choice = false;
      this._defaultCursor = this._map._container.style.cursor;
      this._allLayers = L.layerGroup();
      return this._container;
    },
    onRemove: function () {
      L.DomEvent.off(this._container, "click", this._toggleMeasure, this);
    },
    _toggleMeasure: function () {
      this._choice = !this._choice;
      this._clickedLatLong = null;
      this._clickedPoints = [];
      this._totalLength = 0;

      if (this._choice) {
        this._map.doubleClickZoom.disable();
        L.DomEvent.on(this._map._container, "keydown", this._escape, this);
        L.DomEvent.on(this._map._container, "dblclick", this._closePath, this);
        this._container.classList.add("leaflet-ruler-clicked");
        this._clickCount = 0;
        this._tempLine = L.featureGroup().addTo(this._allLayers);
        this._tempPoint = L.featureGroup().addTo(this._allLayers);
        this._pointLayer = L.featureGroup().addTo(this._allLayers);
        this._polylineLayer = L.featureGroup().addTo(this._allLayers);
        this._allLayers.addTo(this._map);
        this._map._container.style.cursor = "crosshair";
        this._map.on("click", this._clicked, this);
        this._map.on("mousemove", this._moving, this);
      } else {
        this._map.doubleClickZoom.enable();
        L.DomEvent.off(this._map._container, "keydown", this._escape, this);
        L.DomEvent.off(this._map._container, "dblclick", this._closePath, this);
        this._container.classList.remove("leaflet-ruler-clicked");
        this._map.removeLayer(this._allLayers);
        this._allLayers = L.layerGroup();
        this._map._container.style.cursor = this._defaultCursor;
        this._map.off("click", this._clicked, this);
        this._map.off("mousemove", this._moving, this);
      }
    },
    _clicked: function (e) {
      this._clickedLatLong = e.latlng;
      this._clickedPoints.push(this._clickedLatLong);
      L.circleMarker(this._clickedLatLong, this.options.circleMarker).addTo(
        this._pointLayer
      );
      if (
        this._clickCount > 0 &&
        !e.latlng.equals(this._clickedPoints[this._clickedPoints.length - 2])
      ) {
        if (this._movingLatLong) {
          L.polyline(
            [this._clickedPoints[this._clickCount - 1], this._movingLatLong],
            this.options.lineStyle
          ).addTo(this._polylineLayer);
        }
        var text;
        this._totalLength += this._result.Distance;
        if (this._clickCount > 1) {
          this.options.distaneValue = this._totalLength.toFixed();

          text = this._totalLength.toFixed() + " m";
        } else {
          this.options.distaneValue = this._result.Distance.toFixed();

          text = this._result.Distance.toFixed() + " m";
        }
        L.circleMarker(this._clickedLatLong, this.options.circleMarker)
          .bindTooltip(text, { permanent: true, className: "result-tooltip" })
          .addTo(this._pointLayer)
          .openTooltip();
      }
      this._clickCount++;
    },
    _moving: function (e) {
      if (this._clickedLatLong) {
        L.DomEvent.off(this._container, "click", this._toggleMeasure, this);
        this._movingLatLong = e.latlng;
        if (this._tempLine) {
          this._map.removeLayer(this._tempLine);
          this._map.removeLayer(this._tempPoint);
        }
        var text;
        this._addedLength = 0;
        this._tempLine = L.featureGroup();
        this._tempPoint = L.featureGroup();
        this._tempLine.addTo(this._map);
        this._tempPoint.addTo(this._map);
        this._calculateBearingAndDistance();
        this._addedLength = this._result.Distance + this._totalLength;
        L.polyline(
          [this._clickedLatLong, this._movingLatLong],
          this.options.lineStyle
        ).addTo(this._tempLine);
        if (this._clickCount > 1) {
          text = this._addedLength.toFixed() + " m";
        } else {
          text = this._result.Distance.toFixed() + " m";
        }
        L.circleMarker(this._movingLatLong, this.options.circleMarker)
          .bindTooltip(text, {
            sticky: true,
            offset: L.point(0, 0),
            className: "moving-tooltip",
          })
          .addTo(this._tempPoint)
          .openTooltip();
      }
    },
    _escape: function (e) {
      if (e.keyCode === 27) {
        if (this._clickCount > 0) {
          this._closePath();
        } else {
          this._choice = true;
          this._toggleMeasure();
        }
      }
    },
    _calculateBearingAndDistance: function () {
      var f1 = this._clickedLatLong.lat,
        l1 = this._clickedLatLong.lng,
        f2 = this._movingLatLong.lat,
        l2 = this._movingLatLong.lng;
      var toRadian = Math.PI / 180;
      // haversine formula
      // distance
      var R = 6371000; // metres original value was 6371 for kilometers
      var deltaF = (f2 - f1) * toRadian;
      var deltaL = (l2 - l1) * toRadian;
      var a =
        Math.sin(deltaF / 2) * Math.sin(deltaF / 2) +
        Math.cos(f1 * toRadian) *
          Math.cos(f2 * toRadian) *
          Math.sin(deltaL / 2) *
          Math.sin(deltaL / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c;
      this._result = {
        Distance: distance,
      };
    },
    _closePath: function () {
      this._map.removeLayer(this._tempLine);
      this._map.removeLayer(this._tempPoint);
      if (this._clickCount <= 1) this._map.removeLayer(this._pointLayer);
      this._choice = false;
      L.DomEvent.on(this._container, "click", this._toggleMeasure, this);
      this._toggleMeasure();
    },
  });

  L.control.ruler = function (options) {
    return new L.Control.Ruler(options);
  };
}, window);
