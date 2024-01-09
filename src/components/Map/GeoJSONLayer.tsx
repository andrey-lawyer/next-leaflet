import L from "leaflet";
import { useMap } from "react-leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import geoJSONData from "@/data/geoBoundaries-UKR-ADM0_simplified.json";

const I: any = L;

delete I.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const typedGeoJSONData: any = geoJSONData;

export function GeoJSONLayer() {
  const map = useMap();

  L.geoJSON(typedGeoJSONData, {
    style: {
      color: "green",
      weight: 2,
      fillOpacity: 0,
    },
  }).addTo(map);

  return null;
}
