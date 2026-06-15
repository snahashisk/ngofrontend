"use client";
import React, { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

interface MapsProps {
  lat: number;
  lng: number;
}

const Maps = ({ lat, lng }: MapsProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      console.log("Map init");

      // 1. Configure the global loader options
      setOptions({
        key: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        v: "weekly",
      });

      try {
        // 2. Fetch both required libraries simultaneously
        const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
          importLibrary("maps"),
          importLibrary("marker"),
        ]);

        if (!mapRef.current) return;

        // 3. Clean up any existing map rendering to prevent memory leaks or dual instances
        if (!mapInstance.current) {
          mapInstance.current = new Map(mapRef.current, {
            center: { lat, lng },
            zoom: 14,
            mapId: "DEMO_MAP_ID", // Required for modern AdvancedMarkerElements to show up!
          });
        } else {
          // If the map exists but props changed, just shift the camera center smoothly
          mapInstance.current.setCenter({ lat, lng });
        }

        // 4. Place a modern Advanced Marker on the map instance
        new AdvancedMarkerElement({
          map: mapInstance.current,
          position: { lat, lng },
          title: "Selected Location",
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, [lat, lng]); // Re-runs cleanly when latitude or longitude variables update

  return (
    <div
      className="rounded-md"
      ref={mapRef}
      style={{ width: "100%", height: "200px" }}
    />
  );
};

export default Maps;
