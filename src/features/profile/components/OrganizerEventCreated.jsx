import React from 'react';
import EventCard from '../../../global_components/EventCard';
import EventCardGanX from '../../../global_components/EventCardGanX';
import useProfileContext from '../hook/useProfileContext';

function OrganizerEventCreated() {
  const ProfileContextObject = useProfileContext();
  const { authEvents } = ProfileContextObject;
  console.log(authEvents);
  return (
    <>
      {/* header  */}

      <div className='p-3 gap-3 flex flex-col'>
        <div>Your Event created</div>
        {authEvents?.OrganizerInformation?.Event?.map((event) => (
          <EventCardGanX event={event} key={event.id} />
        ))}
      </div>
    </>
  );
}

export default OrganizerEventCreated;
