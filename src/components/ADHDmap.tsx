// components/ADHDMap.tsx
"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import { adhdStats } from "@/data/adhdData";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function ADHDMap() {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <ComposableMap
        projectionConfig={{ scale: 160 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => {
                const countryCode = geo.properties.ISO_A3;
                const countryName = geo.properties.name || geo.properties.NAME || "Unknown";
                const data = adhdStats[countryCode];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() =>
                    setTooltip(
                        data ? `${countryName}: ${data.prevalence}` : `${countryName}: No data`
                    )
                  }
                  onMouseLeave={() => setTooltip("")}
                  onClick={() => {
                    if (data) alert(`${geo.properties.NAME}: ${data.info}`);
                  }}
                  style={{
                    default: {
                      fill: data ? "#69b3a2" : "#d3d3d3",
                      outline: "none",
                    },
                    hover: {
                      fill: "#2a9d8f",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#e76f51",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div className="absolute top-0 left-0 bg-black text-white text-sm px-2 py-1 rounded shadow-lg pointer-events-none z-10">
          {tooltip}
        </div>
      )}
    </div>
  );
}
