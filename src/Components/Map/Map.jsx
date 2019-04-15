/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { getBuildings } from '../../Store/Actions/mapActions';

let map = null;

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
      maxBounds: bounds,
      doubleClickZoom: true,
      keyboard: true,
    });
};

const getTable = (buildings) => {
  if(buildings !== undefined){
    var jsx = buildings.map((building, index) => {
      return (
        <tr key={index} className={""}>
          <td className={""} onClick={() => goToCoords(building.coordinates)}>
            <h5>{ building.name } <br/><small style={{color: "grey"}}>{ building.description }</small></h5>
          </td>
        </tr> 
      );
    });
    return jsx;
  } else {
    return (<tr><td>Loading...</td></tr>);
  }
};

const goToCoords = (coords) => {
  console.log(coords);
  if(map){
    map.flyTo({
      center: [coords._long, coords._lat],
      zoom: 18,
    });
  }
};

const Map = (props) => {
  useEffect(()=>{
    map = getMap();
  });

  const { buildings } = props;

  return (
    <div className={"container-fluid"} style={{height: "100%", width: "100%", padding: 0}}>
      <div className={"row"} style={{height: "100%", width: "100%", margin: 0, padding: 0}}>
        <div 
          className={"col-md-3"}
          id="legend" 
          style={{height: "auto",
            backgroundColor: "white", zIndex: 99, 
            overflow: "auto", left: 0, paddingRight: 0, paddingLeft: 0, boxShadow: "1px 1px 1px 1px lightgrey"
          }}
        >
          <table className={"table table-hover table-bordered table-responsive-md"}>
            <tbody>
              { getTable(buildings) }
            </tbody>
          </table>
        </div>
        <div className={"col-md-9"} id="mapContainer" style={{height: "100%", width: "100%", paddingLeft: 0}}></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  buildings: state.firestore.ordered.buildings,
});

const mapDispatchToProps = dispatch => ({
  getAllBuildings: () => dispatch(getBuildings()),
});

Map.defaultProps = {
  getAllBuildings: () => null,
  authError: null,
};

Map.propTypes = {
  getAllBuildings: PropTypes.func,
};

export default compose(
  firestoreConnect(() => [{collection: 'buildings', orderBy: 'name'}]),
  connect(mapStateToProps, mapDispatchToProps),
)(Map);
