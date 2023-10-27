import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster'


function OpenStreetMap() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/logs")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const elements = [];
        for (let index = 0; index < data.length; index++) {
          
          elements[index]= {lat:data[index].latitude, lng:data[index].longitude, title:data[index].id};
          
        }
        setLogs(elements);
      });
    }, [])

    const center = [54.7023545, -3.2765753]; 
    const zoom = 5;         

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

    const [isShown, setIsShown] = useState(true);
    const [buttonText, setButtonText] = useState("Hide Map");
    const handleClick = event => {
        setIsShown(current => !current);
        if (buttonText === "Hide Map") {
            setButtonText("Show Map");
          } else {
            setButtonText("Hide Map");
          }
    };

    return (
      <div className="text-center">
            <button 
            className="btn btn-info mt-5 mb-5 text-center"
            onClick={handleClick} >
                {buttonText}
            </button>
        {isShown && (
          <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} className="mb-5">
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MarkerClusterGroup chunkedLoading>
                <MyMarkers data={logs} />
              </MarkerClusterGroup>
          </MapContainer>
          )}
        
          </div>
  );
}

export default OpenStreetMap;
