import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

import { GeoJSONLayer } from "./GeoJSONLayer";
import { ModalWindow } from "../ModalWindow";
import { FormComponent } from "../FormComponent";
import { MyZoomComponent } from "./MyZoomComponent";
import { Loader } from "../Loader";

import { IAdverts } from "@/types/typesAdverts";
import { IMAPProps } from "@/types/typeProps";
import { useMapComponent } from "@/hooks/useMapComponent";
import { useScreen } from "@/hooks/useScreen";

function Map({
  setAccommodationsFilter,
  accommodationType = "",
  cost = "",
}: IMAPProps) {
  const {
    showModal,
    onModalClose,
    handleModal,
    accommodations,
    loading,
    setRepeat,
  } = useMapComponent(setAccommodationsFilter, accommodationType, cost);

  const { isMobile, isTablet } = useScreen();

  const zoom = isMobile ? 4.5 : isTablet ? 5.4 : 6;

  const handleMarkerClick = (advert: IAdverts) => {
    setAccommodationsFilter([advert]);
  };

  return (
    <div className="h-screen relative">
      <button
        type="button"
        onClick={handleModal}
        className="absolute  z-[1] text-black w-full bg-slate-400/70 p-4"
      >
        Додати оголошення
      </button>
      <MapContainer
        className="h-[100%] relative z-0"
        center={[48.9, 31.024]}
        zoom={zoom}
        minZoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSONLayer />
        {accommodations.length > 0 &&
          accommodations.map((el, ind) => {
            const position = [
              Number(el.latitude),
              Number(el.longitude),
            ] as LatLngExpression;
            return (
              <Marker
                position={position}
                key={ind}
                eventHandlers={{
                  click: () => handleMarkerClick(el),
                }}
              >
                <Popup>{el.accommodation}</Popup>
              </Marker>
            );
          })}
        <MyZoomComponent
          accommodations={accommodations}
          setAccommodationsFilter={setAccommodationsFilter}
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
      <ModalWindow
        onModalClose={onModalClose}
        showModal={showModal}
        className=" "
      >
        <FormComponent setRepeat={setRepeat} />
      </ModalWindow>
      {loading && <Loader />}
    </div>
  );
}
export default Map;
