import { TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MarkerIcon } from '../../../icons';
import formatDate from '../../../utils/formatDate';
import useMapContext from '../hooks/useMapContext';

function MapComponent() {
  const { events, setEvents, fetchData, user, setUser } = useMapContext();
  const map = useMap();

  const handleMapChange = async () => {
    // Check if the zoom level is 9 or above
    if (map.getZoom() >= 9) {
      const bounds = map.getBounds();
      const result = await fetchData(bounds);
      setEvents(result.data);
    } else {
      setEvents(null);
    }
  };

  // Attach event listener to the map
  useMapEvents({
    zoomend: handleMapChange,
    moveend: handleMapChange,
  });

  useEffect(() => {
    map.on('locationfound', (e) => {
      setUser(e.latlng);
      map.flyTo(e.latlng);
    });

    map.locate();
    handleMapChange();

    window.scrollTo(0, 0);

    return () => {
      map.off('locationfound', (e) => {
        setUser(e.latlng);
      });
    };
  }, [map]);

  const customIcon = (className, fill) =>
    L.divIcon({
      className: 'custom-div-icon',
      html: ReactDOMServer.renderToString(
        <MarkerIcon className={className} fill={fill} />
      ),
      iconSize: [25, 41],
    });

  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {user && (
        <Marker
          position={[user.lat, user.lng]}
          icon={customIcon('size-10', 'red')}
        >
          <Popup>
            <MarkerIcon className='w-[1rem] h-[1rem]' />
            Mock up Location
          </Popup>
        </Marker>
      )}
      {events &&
        events.map((event) => (
          <Marker
            position={[event.EventAddress.lat, event.EventAddress.long]}
            key={event.id}
            icon={customIcon('size-10 border', 'green')}
          >
            <Popup>
              <div className='p-3'>
                <div className='pb-2'>
                  <img src={event?.coverImage} alt='' />
                </div>
                <div className='w-full text-center font-bold text-[1rem]'>
                  {event?.title}
                </div>
                <p className='m-0'>
                  <span className='font-bold'>Start at : </span>
                  {formatDate(event?.startDate)}
                </p>
                <p>
                  <span className='font-bold'>Time : </span> {event.timePeriod}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
    </div>
  );
}

export default MapComponent;
