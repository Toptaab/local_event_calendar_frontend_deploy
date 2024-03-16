import { TileLayer, useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import React, { useState, useEffect } from 'react';

import useEditEvent from '../hooks/useEditEvent';

export default function EditeventMap({ error, setInput, input, event }) {
  const [marker, setMarker] = useState(null);
  const map = useMap();

  useMapEvent('click', (e) => {
    if (marker) {
      marker.remove();
    }

    // Add a marker at the clicked location
    const newMarker = L.marker(e.latlng).addTo(map);
    // console.log(newMarker);
    // Set the new marker && update input
    setMarker(newMarker);
    delete error.lat;
    setInput({ ...input, lat: e.latlng.lat, long: e.latlng.lng });
  });

  useEffect(() => {
    // Check if event.EventAddress.lat and event.EventAddress.long exist
    if (event) {
      // Set the view to the specified coordinates
      map.setView(
        [event.EventAddress.lat, event.EventAddress.long],
        map.getZoom()
      );

      // Add a marker at the specified location
      const newMarker = L.marker([
        event.EventAddress.lat,
        event.EventAddress.long,
      ]).addTo(map);
      setMarker(newMarker);
    }
  }, [event, map]);

  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </div>
  );
}
