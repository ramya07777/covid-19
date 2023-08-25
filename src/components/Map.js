import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "./Map.css";
import { showDataMap } from './Util';

function Map({center, countries, casesType}) {

  


  return (
    <div className='map'>
<MapContainer center={center} zoom={3}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <ChangeCenter position={center} />
  {showDataMap(countries, casesType) }
  </MapContainer>
    </div>
  );
}

function ChangeCenter({position}) {
  const map = useMap();
  map.setView(position);
return null;
}

export default Map;