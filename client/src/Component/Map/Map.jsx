import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-40.0, -42.0, -5],
        center: [-5, -3],
        scale: 2500
      }}
      style= {{width:"100%",height: "100%", borderRadius:"5px"}}
    >
      <Geographies
        geography="/features.json"
        fill= '#22A2D1'
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[ 34.734802, 39.467987]}
        dx={0}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2 ,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Kayserideyiz"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
