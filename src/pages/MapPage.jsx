import Map from '../features/map/components/Map';
import MapContextProvider from '../features/map/context/mapContext';

function MapPage() {
  return (
    <MapContextProvider>
      <Map />
    </MapContextProvider>
  );
}

export default MapPage;
