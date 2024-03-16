import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import formatDate from '../utils/formatDate';
import 'react-loading-skeleton/dist/skeleton.css';

function EventCard({ event, loading }) {
  // ================= loading Spinner ====================//
  if (loading) {
    return (
      <div className='card w-[16rem] h-[26rem] bg-base-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div>
          {loading ? <Skeleton height='11rem' /> : <img src='' alt='' />}
        </div>
        <div className='card-body p-[10%] '>
          <h2 className='card-title'>
            {loading ? <Skeleton width={70} /> : 'Fashion Fiesta'}
          </h2>
          <p className='text-[0.75rem] pb-[1rem] border-b  max-h-[2.5rem] overflow-hidden'>
            {loading ? (
              <Skeleton count={3} />
            ) : (
              ' The Pattaya International Fireworks Festival is an annual event held in Pattaya'
            )}
          </p>
          <div className='text-[0.75rem] font-bold'>
            {loading ? <Skeleton /> : 'Category : Music'}
          </div>
          <div className='card-actions flex flex-col'>
            <div className='text-sm font-bold'>
              <span>{loading ? <Skeleton /> : 'Entrance'}</span>
              <span className='text-green-400 text-[0.75rem]'>
                {' '}
                {loading ? <Skeleton /> : ' Free Access'}
              </span>
            </div>
            <div className='text-sm font-bold text-gray-500'>
              {loading ? <Skeleton /> : 'Date : 15-Mar-2024'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  //= ======================================================//

  return (
    <Link to={`/event/${event?.id}`}>
      <div className='card max-w-[16rem] h-[26rem] bg-base-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <figure>
          <img src={event?.coverImage} alt='' />
        </figure>
        <div className='card-body p-[10%] '>
          <h2 className='card-title'>{event?.title}</h2>
          <p className='text-[0.75rem] pb-[1rem] border-b  max-h-[2.5rem] overflow-hidden'>
            {event?.description}
          </p>
          <div className='text-[0.75rem] font-bold'>
            Category : {event?.category?.name}
          </div>
          <div className='card-actions flex flex-col'>
            <div className='text-sm font-bold'>
              Entrance{' '}
              {event?.EventFacility?.entranceFee === true ? (
                <span className='text-amber-500 text-[0.75rem]'>
                  Paid Access{' '}
                </span>
              ) : (
                <span className='text-green-400 text-[0.75rem]'>
                  Free Access
                </span>
              )}
            </div>

            <div className='text-sm font-bold text-gray-500'>
              Date : {formatDate(event?.startDate, true)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
