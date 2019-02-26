import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'; //MAP
import "./style.css";

function MapCom(props) {
    const position = [props.data.lat, props.data.lng]
  return (
    <Map
      center={position} zoom={props.zoom}>
      <TileLayer

          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
          <Popup>
              {position} <br /> {props.data.name}
          </Popup>
      </Marker>
    </Map> /*end map */

  );
}

export default MapCom;
