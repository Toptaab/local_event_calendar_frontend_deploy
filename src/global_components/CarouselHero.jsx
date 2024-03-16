import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Carousel } from 'rsuite';
import testPic from '../asset/pic/test1.png';
import 'rsuite/Carousel/styles/index.css';

function CarouselHero({ children }) {
  return (
    <Carousel autoplay className='custom-slider'>
      <img
        src='https://images.unsplash.com/photo-1589896013356-e85c60cebd5f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='250'
        alt=''
        className=' object-cover'
      />
      <img
        src='https://images.unsplash.com/photo-1608133012727-bb59ac0ae862?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='200'
        alt=''
        className=' object-cover'
      />
      <img
        src='https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='200'
        alt=''
        className=' object-cover'
      />
      <img
        src='https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='200'
        alt=''
        className=' object-cover'
      />
      <img
        src='https://images.unsplash.com/photo-1590117865731-d01c9f4560c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='200'
        alt=''
        className=' object-cover'
      />
    </Carousel>
  );
}

export default CarouselHero;
