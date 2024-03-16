import { TileLayer, Marker } from 'react-leaflet';

function MapComponent({ eventLocation = [] }) {
  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={eventLocation} />
    </div>
  );
}

export default MapComponent;
