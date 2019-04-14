/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'

const getMap = () => {
  const bounds = new mapboxgl.LngLatBounds(
    new mapboxgl.LngLat(-79.598397, 40.28413),
    new mapboxgl.LngLat(-79.525452, 40.336966)
  );

    return new mapboxgl.Map({ 
      center: [-79.5539696243362, 40.30728689571579],
      container: 'mapContainer',
      bearing: 300,
      pitch: 45,
      zoom: 15.5,
      style: 'mapbox://styles/ck108860/cjrjllu0r06rt2sl9y702tkbe',
      minZoom: 14.5,
      maxBounds: bounds
    });
};

const Map = () => {

  useEffect(()=>{
    getMap();
  });

  // const onDoubleClick = (e) => {
  //   console.log(e);
  // };

  return (
    <div id="mapContainer" style={{height: "100%", width: "100%"}}></div>
  );
};

export default Map;
