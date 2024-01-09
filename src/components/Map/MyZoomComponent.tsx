import { useMapEvent } from "react-leaflet";
import { IAdverts } from "@/types/typesAdverts";
import { Dispatch, SetStateAction } from "react";

interface MyZoomComponentProps {
  accommodations: IAdverts[];
  setAccommodationsFilter: Dispatch<IAdverts[]>;
}

export function MyZoomComponent({
  accommodations,
  setAccommodationsFilter,
}: MyZoomComponentProps) {
  const map = useMapEvent("zoomend", () => {
    const bounds = map.getBounds();
    const visibleMarkers = accommodations.filter((el) =>
      bounds.contains([Number(el.latitude), Number(el.longitude)])
    );
    setAccommodationsFilter(visibleMarkers);
  });

  return null;
}
