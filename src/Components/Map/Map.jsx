/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.30728689571579,
    longitude: -79.55396962433622,
    zoom: 15.5,
    minZoom: 13,
  });
  const [bounds] = useState({
    maxLong: -79.525452,
    minLong: -79.598397,
    maxLat: 40.336966,
    minLat: 40.28413,
  });

  const onViewportChange = (vp) => {
    if (vp.longitude < bounds.minLong) {
      vp.longitude = bounds.minLong;
    } else if (vp.longitude > bounds.maxLong) {
      vp.longitude = bounds.maxLong;
    } else if (vp.latitude < bounds.minLat) {
      vp.latitude = bounds.minLat;
    } else if (vp.latitude > bounds.maxLat) {
      vp.latitude = bounds.maxLat;
    }
    setViewport({
      viewport, ...vp,
    });
  };

  return (
    <ReactMapGL
      height="100%"
      width="100%"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      {...viewport}
      bearing={300}
      pitch={45}
      onViewportChange={vp => onViewportChange(vp)}
      mapStyle="mapbox://styles/ck108860/cjrjllu0r06rt2sl9y702tkbe"
    />
  );
};

export default Map;
