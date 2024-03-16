import ExploreContainer from '../features/explore/components/ExploreContainer';
import { ExploreContextProvider } from '../features/explore/context/ExploreContext';

export default function ExplorePage() {
  return (
    <div className='w-dvw'>
      <div>
        <img
          className='w-[100vw] h-[20vh] object-cover overflow-clip'
          src='https://cdn.kimkim.com/files/a/images/a42fbf058788fbd7e37a09df95e594fbc30ed09d/original-f4be04b08a3412d584657db34c4c58d8.jpg'
          alt='cover'
        />
        <div />
        <ExploreContextProvider>
          <ExploreContainer />
        </ExploreContextProvider>
      </div>
    </div>
  );
}
