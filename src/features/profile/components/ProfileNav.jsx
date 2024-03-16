import { useState } from 'react';
import ProfileCalendar from './ProfileCalendar';
import OrganizerEventCreated from './OrganizerEventCreated';
import useAuth from '../../auth/hooks/auth';
import EventCardGanX from '../../../global_components/EventCardGanX';

function ProfileNav() {
  const [toggleCtoE, setToggleCtoE] = useState('calendar');
  const allAuthObj = useAuth();

  if (allAuthObj.authUser) {
    const {
      authUser: { role, Reminder },
    } = allAuthObj;

    console.log(allAuthObj);

    return (
      <>
        <div className='flex justify-between py-4'>
          <button
            className={
              toggleCtoE === 'calendar'
                ? 'text-center  text-[0.75rem] w-full border-b-2 p-2'
                : 'text-center text-[0.75rem] w-full p-2'
            }
            onClick={() => setToggleCtoE('calendar')}
            type='button'
          >
            Calendar
          </button>
          {role === 'ORGANIZER' ? (
            <button
              className={
                toggleCtoE === 'event'
                  ? 'text-center text-[0.75rem] w-full border-b-2 p-2'
                  : 'text-center text-[0.75rem] w-full p-2'
              }
              onClick={() => setToggleCtoE('event')}
              type='button'
            >
              Your Event Created
            </button>
          ) : null}
        </div>
        {toggleCtoE === 'calendar' ? (
          <div>
            <ProfileCalendar />
            <div className='p-[1rem]'>
              <h1 className='font-semibold pb-[1rem]'>Your Event Reminded</h1>
              {Reminder.map((el) => (
                <div className='pb-2'>
                  <EventCardGanX event={el.event} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <OrganizerEventCreated />
        )}
      </>
    );
  }
}

export default ProfileNav;
