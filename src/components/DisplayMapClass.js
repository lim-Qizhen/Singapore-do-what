// src/DisplayMapClass.js
import { map } from "@here/maps-api-for-javascript";
import * as React from "react";

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null,
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "PQXjrqipEq_9dEtEbGpmnSBXUOOhjS20oZb1DrTlSY",
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Singapore
        center: { lat: 1.34, lng: 103.82 },
        // pixelRatio: window.devicePixelRatio || 1,
      }
    );
    map.setZoom(11.35);
    this.setState({ map });
  }

  componentDidUpdate() {
    const H = window.H;
    //removes all previous ones in case of changes
    this.state.map.removeObjects(this.state.map.getObjects());
    console.log(this.props.plan);
    this.props.plan.map((element, index) => {
      // console.log(element);
      if (element.activity.length > 1) {
        console.log(element);
        if (
          this.state.map.getObjects().some((marker) => {
            marker.b.lat === element.lat;
          })
        ) {
          element.lat = element.lat + 0.1;
        }

        const svgMarkup =
          '<svg width="24" height="24" ' +
          'xmlns="http://www.w3.org/2000/svg">' +
          '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
          'height="22" /><text x="12" y="18" font-size="12pt" ' +
          'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
          `fill="white">${index + 1}</text></svg>`;
        const icon = new H.map.Icon(svgMarkup);
        const coords = { lat: element.lat, lng: element.long };
        const marker = new H.map.Marker(coords, { icon: icon });
        this.state.map.addObject(marker);
        console.log(this.state.map.getObjects()[0].b.lat);
        console.log(this.state.map.getObjects()[0].b.lng);
      }
    });
  }

  //   componentWillUnmount() {
  //     // Cleanup after the map to avoid memory leaks when this component exits the page
  //     this.state.map.dispose();
  //   }

  render() {
    return (
      // Set a height on the map so it will display
      <div
        ref={this.mapRef}
        style={{ margin: "0 auto", width: "809px", height: "500px" }}
      />
    );
  }
}
