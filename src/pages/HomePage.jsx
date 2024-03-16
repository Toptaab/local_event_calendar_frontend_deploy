import HomeContainer from '../features/home/components/HomeContainer';
import HomeContextProvider from '../features/home/context/HomeContext';

function HomePage() {
  return (
    <div className=''>
      <HomeContextProvider>
        <HomeContainer />
      </HomeContextProvider>
    </div>
  );
}

export default HomePage;
