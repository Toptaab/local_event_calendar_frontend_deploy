import EventCard from '../../../global_components/EventCard';
import useProfileContext from '../hook/useProfileContext';

function ProfileEvent() {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-semibold text-[1.5rem]'>My Event</p>
      <div className='grid grid-cols-2 gap-2'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default ProfileEvent;
