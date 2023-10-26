import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from "react-leaflet";



function OpenStreetMap() {

    const center = [52.22977, -0.19117];

    const points = [
        {
          lat: 51.489096,
          lng: -0.19117,
          title: 'point 1'
        },
        {
          lat: 53.803634,
          lng: -1.532749,
          title: 'point 2'
        },
        {
          lat: 50.455596,
          lng: -4.756545,
          title: 'point 3'
        },
        {
          lat: 52.217726,
          lng: -0.897892,
          title: 'point 4'
        },
      ];
      
      const MyMarkers = ({ data }) => {
        return data.map(({ lat, lng, title }, index) => (
          <CircleMarker
            key={index}
            center={{ lat, lng }}
            radius={7}
            color="red"
          >
            <Popup>{title}</Popup>
          </CircleMarker>
        ));
      }

    return (
        <MapContainer center={center} zoom={5} scrollWheelZoom={true} className="mt-5">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkers data={points} />
        </MapContainer>
  );
}

export default OpenStreetMap;
