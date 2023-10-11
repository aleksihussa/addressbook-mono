import React from "react";
import ContactTable from "../components/Table/ContactTable";
import { TopToolbar } from "../components/TopToolbar";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Helmet } from "react-helmet";
import { ContactWithCoordinates } from "../components/Table/types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const Map = ({
  contactsWithCoordinates,
  setcontactsWithCoordinates,
}: {
  contactsWithCoordinates: ContactWithCoordinates[];
  setcontactsWithCoordinates: (
    contactsWithCoordinates: ContactWithCoordinates[]
  ) => void;
}) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      />
    </Helmet>
    <TopToolbar />
    <MapContainer
      className="full-height-map"
      center={[62, 20]}
      zoom={5}
      minZoom={3}
      maxZoom={30}
      maxBounds={[
        [-85.06, -180],
        [85.06, 180],
      ]}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      {contactsWithCoordinates.map((contact) => (
        <Marker
          key={contact.name}
          position={[contact.coordinates.lat, contact.coordinates.lng]}
          icon={L.divIcon({
            className: "leaflet-div-icon white-marker",
          })}
        >
          <Popup>
            <span>
              <b>{contact.name}</b>
              <br />
              {contact.address}
              <br />
              {contact.phoneNum}
            </span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </>
);
