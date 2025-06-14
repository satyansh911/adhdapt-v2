// Example usage in a component
"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MyMap = () => (
  <ComposableMap>
    <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
      {(props: { geographies: any[] }) =>
        props.geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export default MyMap;
