"use client";

import { World, type GlobeConfig, type Position } from "@/components/ui/globe";

const globeConfig: GlobeConfig = {
  pointSize: 3,
  globeColor: "#0b1734",
  showAtmosphere: true,
  atmosphereColor: "#60a5fa",
  atmosphereAltitude: 0.16,
  emissive: "#10244d",
  emissiveIntensity: 0.35,
  shininess: 0.75,
  polygonColor: "rgba(147, 197, 253, 0.72)",
  ambientLight: "#bfdbfe",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#60a5fa",
  pointLight: "#facc15",
  arcTime: 1800,
  arcLength: 0.72,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.75,
};

const routes: Position[] = [
  { order: 1, startLat: 22.5431, startLng: 114.0579, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.34, color: "#facc15" },
  { order: 2, startLat: 22.5431, startLng: 114.0579, endLat: 40.7128, endLng: -74.006, arcAlt: 0.42, color: "#60a5fa" },
  { order: 3, startLat: 22.5431, startLng: 114.0579, endLat: 41.8781, endLng: -87.6298, arcAlt: 0.39, color: "#38bdf8" },
  { order: 4, startLat: 22.5431, startLng: 114.0579, endLat: 51.9244, endLng: 4.4777, arcAlt: 0.3, color: "#facc15" },
  { order: 5, startLat: 22.5431, startLng: 114.0579, endLat: 53.5511, endLng: 9.9937, arcAlt: 0.28, color: "#60a5fa" },
  { order: 6, startLat: 22.5431, startLng: 114.0579, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.32, color: "#38bdf8" },
  { order: 7, startLat: 22.5431, startLng: 114.0579, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.29, color: "#facc15" },
  { order: 8, startLat: 22.5431, startLng: 114.0579, endLat: 52.2297, endLng: 21.0122, arcAlt: 0.31, color: "#60a5fa" },
];

export default function LogisticsGlobeCanvas() {
  return <World globeConfig={globeConfig} data={routes} />;
}
