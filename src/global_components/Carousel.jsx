import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Carousel({ children, title, hight, loading }) {
  // ================= loading Spinner ====================//
  if (loading) {
    return (
      <div className='max-w-[100vw] w-full '>
        <div className='font-bold text-[1.5rem] font-Jua'>
          {loading ? <Skeleton width={200} /> : 'Highlight'}
        </div>
        <div className='grid grid-row-1 items-center '>
          <div
            className={`max-w-[100vw] w-full carousel carousel-center pt-4 space-x-3 bg-base ${hight}`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
  //= =======================================================//

  return (
    <div className='max-w-[100vw] w-full '>
      <div className='font-bold text-[1.5rem] w-fit tracking-wide font-Jua border-b border-primary   px-1 '>
        {title}
      </div>
      <div className='grid grid-row-1 items-center '>
        <div
          className={`max-w-[100vw] w-full carousel carousel-center pt-4 space-x-3 bg-base ${hight}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
