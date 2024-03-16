import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import formatDate from '../utils/formatDate';

function EventCardGanX({ event }) {
  return (
    <Link to={`/event/${event?.id}`}>
      <div className='flex rounded-lg overflow-hidden h-[10rem] gap-2 shadow-lg border w-full'>
        {/* image */}
        <div className=' w-3/6 min-w-[32%]'>
          <img
            src={event?.coverImage}
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        {/* detail */}
        <div className='flex flex-col p-2 w-full justify-between '>
          <div>
            <div>
              {/* event title */}
              <h1 className='font-bold text-[1rem]'>
                <Truncate ellipsis={<span>...</span>} width={180}>
                  {event?.title}
                </Truncate>
              </h1>

              {/* event description */}
              <p className='text-[0.8rem] h-[3.5rem] w-full] text-wrap truncate'>
                <Truncate
                  lines={2}
                  ellipsis={
                    <span>
                      ...{' '}
                      <span
                        className='text-gray-600 font-bold text-[0.7rem]'
                        href='/link/to/article'
                      >
                        Read more
                      </span>
                    </span>
                  }
                >
                  {event?.description}
                </Truncate>
              </p>
            </div>
          </div>

          {/* facility detail */}
          <div>
            <p className='font-semibold text-[0.75rem]'>
              category :{' '}
              <span className=' font-normal'>{event?.category?.name}</span>
            </p>
            <p className='font-semibold text-[0.75rem]'>
              Entrance :{' '}
              {event?.EventFacility?.entranceFee ? (
                <span className='text-amber-500'>Paid</span>
              ) : (
                <span className='text-green-500'>Free</span>
              )}
            </p>
            <p className='font-semibold text-[0.75rem]'>
              date : {formatDate(event?.startDate, true)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCardGanX;
