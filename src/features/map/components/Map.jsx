import { MapContainer } from 'react-leaflet';
import MapComponent from './MapComponent';
import EventCardGanX from '../../../global_components/EventCardGanX';
import useMapContext from '../hooks/useMapContext';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  const { events } = useMapContext();

  return (
    <div>
      <MapContainer
        center={BkkLatLon}
        zoom={13}
        style={{ height: '400px', zIndex: '0' }}
      >
        <MapComponent />
      </MapContainer>
      {events?.length > 0 && (
        <div className='font-bold text-[1.5rem] p-4'>Event Around Here</div>
      )}
      {events?.length > 0 ? (
        events.map((event) => (
          <div className='p-4' key={event.id}>
            <EventCardGanX event={event} key={event.id} />
          </div>
        ))
      ) : (
        <div className='w-full h-[20rem] flex justify-center items-center font-bold text-gray-500'>
          No Event around here
        </div>
      )}
    </div>
  );
}

export default Map;
