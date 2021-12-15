import React from "react";
import H from "@here/maps-api-for-javascript";

const DisplayMapFunction = () => {
  const mapRef = React.createRef("");

  const state = {map: null}

  console.log(mapRef); //null
  const platform = new H.service.Platform({
    apikey: "PQXjrqipEq_9dEtEbGpmnSBXUOOhjS20oZb1DrTlSYE",
  });

  const defaultLayers = platform.createDefaultLayers();
  console.log(defaultLayers);

  const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
    center: { lat: 50, lng: 5 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1,
  });
  // console.log(map);
  
  return <div ref={mapRef} style={{ width: "300px", height: "500px" }}></div>;
};

export default DisplayMapFunction;
