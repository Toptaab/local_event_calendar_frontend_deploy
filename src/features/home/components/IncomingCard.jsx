import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { PinIcon, ToiletIcon } from '../../../icons';
import formatDate from '../../../utils/formatDate';

function IncomingCard({ event }) {
  return (
    <Link to={`/event/${event?.id}`}>
      <div className='w-[16rem] h-[20rem] relative rounded-lg overflow-hidden'>
        <img
          src={event?.coverImage}
          alt=''
          className='object-cover w-full h-full'
        />
        <div className='absolute bottom-0 left-0 text-white p-4'>
          <h2 className='font-bold'>{event?.title}</h2>
          <p className='text-[0.75rem]'>
            <PinIcon className='w-[1rem] h-[1rem] fill-red-600' />{' '}
            {event?.EventAddress?.address}
          </p>
          <p className='text-[0.75rem]'>{formatDate(event?.startDate)}</p>
        </div>
      </div>
    </Link>
  );
}

export default IncomingCard;
