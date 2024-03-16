import Skeleton from 'react-loading-skeleton';

import { MapIcon, CalendarIcon, ExploreIcon } from '../../../icons';
import NavigatorButton from './NavigatorButton';
import 'react-loading-skeleton/dist/skeleton.css';

function NavigatorButtonContainer() {
  return (
    <div className='flex justify-evenly md:px-[9.5rem] md:gap-2 pb-8'>
      <NavigatorButton link='/map'>
        <MapIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Map
        </p>
      </NavigatorButton>
      <NavigatorButton link='/calendar'>
        <CalendarIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Calendar
        </p>
      </NavigatorButton>
      <NavigatorButton link='/explore'>
        <ExploreIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Explore
        </p>
      </NavigatorButton>
    </div>
  );
}

export default NavigatorButtonContainer;
