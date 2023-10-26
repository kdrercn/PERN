import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster'


function OpenStreetMap() {

    const [logs, setLogs] = useState([]);

    const getLogs = async () => {
      try {
          const response = await fetch("http://localhost:5000/logs")
          const jsonData = await response.json();
          
          setLogs(jsonData);
          console.log(logs)
          if (jsonData.length > 0) {
            // Access properties for the first object in the array
            console.log(jsonData[0].longitude, jsonData[0].latitude, jsonData[0].id);
          }
      } catch (err) {
          console.error(err.message);            
      }
  }
    useEffect(() => {
      getLogs();
    }, [])

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
        {
          lat: 52.217726,
          lng: -2.239895,
          title: 'point 5'
        },
        {
          lat: 51.489096,
          lng: -0.19117,
          title: 'point 6'
        }
      ];
      
      
    const MyMarkers = ({ data }) => {
        return data.map(({ lat, lng, title }, index) => (
          <CircleMarker
            key={index}
            center={{ lat, lng }}
            radius={2}
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
            <MarkerClusterGroup chunkedLoading>
              <MyMarkers data={points} />
            </MarkerClusterGroup>
        </MapContainer>
  );
}

export default OpenStreetMap;
