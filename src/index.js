import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  LatLng,
  LatLngBounds,
  Polyline
} from "react-google-maps";
import styles from "./mapStyle.json";
// import {  } from 'react-google-maps';

const TexasToNewYork = [
  { lat: 31.9685988, lng: -99.9018131 },
  { lat: 40.7306458, lng: -73.935242 }
];

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 31.9685988, lng: -99.9018131 }}
    defaultOptions={{
      streetViewControl: false,
      scaleControl: true,
      mapTypeControl: false,
      disableDefaultUI: true, // disable default map UI
      draggable: true, // make map draggable
      keyboardShortcuts: false, // disable keyboard shortcuts
      scrollwheel: true, // allow scroll wheel
      styles // change default map styles
    }}
  >
    {/* {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )} */}
    <Polyline path={TexasToNewYork} />
  </GoogleMap>
));

ReactDOM.render(
  <MyMapComponent isMarkerShown />,
  document.getElementById("root")
);
