import { useState } from 'react';
import { RainIcon, SunIcon, WinterIcon } from '../../../icons';
import { RainingSeason, SummerSeason, WinterSeason } from './SeasonChange';

function SeasonContainer() {
  const [season, setSeason] = useState('summer');

  let seasonComponent;

  if (season === 'summer') {
    seasonComponent = <SummerSeason />;
  } else if (season === 'raining') {
    seasonComponent = <RainingSeason />;
  } else {
    seasonComponent = <WinterSeason />;
  }

  return (
    <div className='w-full'>
      <div className='font-bold text-[1.5rem]   font-Jua  border-b border-primary w-fit'>
        SEASONING
      </div>
      <div className='flex justify-center items-center pt-4'>
        {/* summer */}
        <button
          className={
            season === 'summer'
              ? 'flex items-center gap-1 px-2 md:px-4  border-e-2 underline'
              : 'flex items-center gap-1 px-2 md:px-4  border-e-2'
          }
          onClick={() => setSeason('summer')}
          type='button'
        >
          <span>
            <SunIcon
              className={
                season === 'summer'
                  ? 'fill-amber-500 w-[1.5rem] h-[1.5rem]'
                  : 'w-[1.5rem] h-[1.5rem]'
              }
            />
          </span>
          Summer
        </button>
        {/* raining */}
        <button
          className={
            season === 'raining'
              ? 'flex items-center gap-2 px-2 md:px-4 border-e-2 underline'
              : 'flex items-center gap-2 px-2 md:px-4 border-e-2'
          }
          onClick={() => setSeason('raining')}
          type='button'
        >
          <span>
            <RainIcon
              className={
                season === 'raining'
                  ? 'fill-blue-500 w-[1.5rem] h-[1.5rem]'
                  : 'w-[1.5rem] h-[1.5rem]'
              }
            />
          </span>
          Raining
        </button>
        {/* winter */}
        <button
          className={
            season === 'winter'
              ? 'flex items-center gap-2 px-2 md:px-4 underline'
              : 'flex items-center gap-2 px-2 md:px-4'
          }
          onClick={() => setSeason('winter')}
          type='button'
        >
          <span>
            <WinterIcon
              className={
                season === 'winter'
                  ? 'fill-blue-400 w-[1.5rem] h-[1.5rem]'
                  : 'w-[1.5rem] h-[1.5rem]'
              }
            />
          </span>
          Winter
        </button>
      </div>
      {seasonComponent}
    </div>
  );
}

export default SeasonContainer;
