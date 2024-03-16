import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Carousel from '../../../global_components/Carousel';
import EventCard from '../../../global_components/EventCard';
import SeasonContainer from './SeasonContainer';
import IncomingCard from './IncomingCard';
// import { getAllEvent } from '../../../api/event';
import NavigatorButtonContainer from './NavigatorButtonContainer';
import CarouselHero from '../../../global_components/CarouselHero';
import useHomeContext from '../hooks/useHomeContext';
import 'react-loading-skeleton/dist/skeleton.css';

function HomeContainer() {
  const allEventsObj = useHomeContext();
  const { loading } = allEventsObj;

  const highlightEvent = allEventsObj.event?.filter(
    (event) => event.HighlightEvent != null
  );

  // ================= loading Spinner ====================//
  if (loading) {
    return (
      <div>
        {loading ? (
          <Skeleton height='10rem' />
        ) : (
          <CarouselHero loading={loading} />
        )}
        <div className='w-full p-[0.75rem] pt-[3rem] flex flex-col gap-4'>
          <Carousel title='Highlight' hight='h-[30rem]' loading={loading}>
            <div className='carousel-item flex gap-[2rem]'>
              <EventCard loading={loading} />
              <EventCard loading={loading} />
              <EventCard loading={loading} />
              <EventCard loading={loading} />
              <EventCard loading={loading} />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
  //= ======================================================//

  return (
    <div>
      <CarouselHero />
      <div className='w-full p-[0.75rem] pt-[3rem] flex flex-col gap-4'>
        <NavigatorButtonContainer />
        <Carousel title='HIGHLIGHT' hight='h-[30rem]'>
          {highlightEvent?.map((value) => (
            <div key={value.id} className='carousel-item'>
              <EventCard event={value} />
            </div>
          ))}
        </Carousel>
        <Carousel title='INCOMING'>
          {allEventsObj.event?.map((value) => (
            <div key={value.id} className='carousel-item'>
              <IncomingCard event={value} />
            </div>
          ))}
        </Carousel>
        <SeasonContainer />
      </div>
    </div>
  );
}

export default HomeContainer;
