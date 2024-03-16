import React, { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet';
import MapComponent from './MapComponent';
import useEventContext from '../hook/useEventContext';
import Button from '../../../global_components/Button';

function EventMapLocation() {
  const {
    event: { EventAddress },
  } = useEventContext();

  let eventLocation = [];
  if (EventAddress) {
    eventLocation = [EventAddress.lat, EventAddress.long];
  }

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    console.log('click');
    setShowModal(true);
  };

  return (
    <div className='px-4'>
      <div
        onClick={handleOpen}
        role='button'
        onKeyDown={(event) => {
          if (event.keyCode === 13) handleOpen(event);
        }}
        tabIndex={0}
      >
        <span className='text-[1.5rem] font-bold'>Location link:</span>
        <MapContainer
          center={eventLocation}
          zoom={10}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          zoomControl={false}
          touchZoom={false}
          style={{ height: '200px', position: 'relative', zIndex: '0' }}
        >
          <MapComponent eventLocation={eventLocation} />
        </MapContainer>
      </div>

      {showModal && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <button
              className='fixed inset-0 bg-black opacity-50'
              onClick={() => setShowModal(false)}
              type='button'
              aria-label='Save'
            />
            <div className='z-20 bg-white rounded-lg p-8 max-w-md mx-auto'>
              <div className='mb-6'>
                <h2 className='text-xl font-bold mb-2'>To event location</h2>
                <p>This will open a new window, Are you sure?</p>
              </div>
              <Button onClick={() => setShowModal(false)}>
                <a
                  href={`https://maps.google.com/?q=${eventLocation}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  Open in map
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventMapLocation;
