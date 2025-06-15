"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import { adhdStats } from "@/data/adhdData2"; // Make sure this contains alpha-3 country codes like "IND", "USA"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function ADHDMap() {
  const [tooltip, setTooltip] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <ComposableMap
        projectionConfig={{ scale: 160 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => {
              const countryCode = geo.id?.trim();
              const countryName = geo.properties.name || geo.properties.NAME || "Unknown";
              const data = adhdStats[countryCode];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event: React.MouseEvent) => {
                    const { clientX, clientY } = event;
                    setPosition({ x: clientX, y: clientY });

                    setTooltip(
                      data
                        ? `${countryName}<br/>Prevalence: ${data.prevalence}<br/>Info: ${data.info}`
                        : `${countryName}: No data`
                    );
                  }}
                  onMouseMove={(event: React.MouseEvent) => {
                    const { clientX, clientY } = event;
                    setPosition({ x: clientX, y: clientY });
                  }}
                  onMouseLeave={() => setTooltip("")}
                  onClick={() => {
                    if (data) alert(`${countryName}: ${data.info}`);
                  }}
                  style={{
                    default: {
                        fill: data ? "#fed02d" : "#d3d3d3",
                        stroke: "#000",
                        strokeWidth: 0.5,
                        outline: "none",
                    },
                    hover: {
                        fill: "#2a9d8f",
                        stroke: "#000",
                        strokeWidth: 0.5,
                        outline: "none",
                    },
                    pressed: {
                        fill: "#e76f51",
                        stroke: "#000",
                        strokeWidth: 0.5,
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
        <div
          className="fixed bg-yellow-500 text-black text-sm px-2 py-1 rounded shadow-lg pointer-events-none z-10"
          style={{ top: position.y + 10, left: position.x + 10 }}
          dangerouslySetInnerHTML={{ __html: tooltip }}
        />
      )}
    </div>
  );
}
