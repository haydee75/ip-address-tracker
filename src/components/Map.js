import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  return (
    <MapContainer
      center={[props.lat, props.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.lng]}>
        <Popup>
          Hello from{" "}
          <a
            href="https://github.com/haydee75"
            target="_blank"
            rel="noreferrer"
          >
            me
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
