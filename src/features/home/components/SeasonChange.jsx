import { useNavigate } from 'react-router-dom';
import PictureSeason from './PictureSeason';

export function SummerSeason() {
  const navigate = useNavigate();
  return (
    <div className=' grid md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4  md:gap-1 xl:gap-2 py-4'>
      <PictureSeason
        src='https://i.pinimg.com/originals/0e/db/8e/0edb8ece9a0d50a2d255f9d1bb65dd52.jpg'
        month='February'
        onClick={() => navigate('/calendar/02')}
      />
      <PictureSeason
        src='https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        month='March'
        onClick={() => navigate('/calendar/03')}
      />
      <PictureSeason
        src='https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        month='April'
        onClick={() => navigate('/calendar/04')}
      />
      <PictureSeason
        src='https://images.unsplash.com/photo-1580327942498-53a877c6d0ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        month='May'
        onClick={() => navigate('/calendar/05')}
      />
    </div>
  );
}

export function RainingSeason() {
  const navigate = useNavigate();
  return (
    <div className='grid xs:grid-cols-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 xs:gap-1 md:gap-1 xl:gap-2 py-4'>
      <PictureSeason
        src='https://thailand.go.th/uploads/posts/the_post_1684140959.webp'
        month='June'
        onClick={() => navigate('/calendar/06')}
      />
      <PictureSeason
        src='https://cdn-v2.theculturetrip.com/1200x630/wp-content/uploads/2021/05/hbjb4x.webp'
        month='July'
        onClick={() => navigate('/calendar/07')}
      />
      <PictureSeason
        src='https://pbs.twimg.com/media/EeuxedhVAAAFL_C.jpg'
        month='August'
        onClick={() => navigate('/calendar/08')}
      />
      <PictureSeason
        src='https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2021/05/kh6c5d-e1623079677395.webp'
        month='September'
        onClick={() => navigate('/calendar/09')}
      />
    </div>
  );
}

export function WinterSeason() {
  const navigate = useNavigate();
  return (
    <div className='grid xs:grid-cols-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 xs:gap-1 md:gap-1 xl:gap-2 py-4'>
      <PictureSeason
        src='https://www.shutterstock.com/image-photo/scenic-horizon-kew-mae-pan-600nw-530812552.jpg'
        month='October'
        onClick={() => navigate('/calendar/10')}
      />
      <PictureSeason
        src='https://www.pattayamail.com/wp-content/uploads/2022/10/t-02-Thailand-enters-winter-season-while-southern-parts-still-face-heavy-rains.jpg'
        month='November'
        onClick={() => navigate('/calendar/11')}
      />
      <PictureSeason
        src='https://changpuakmagazine.com/images/article/124220travel.jpg'
        month='December'
        onClick={() => navigate('/calendar/12')}
      />
      <PictureSeason
        src='https://www.dusit.com/wp-content/uploads/cache/2022/11/Website-banner_1088x648/1101771657.jpg'
        month='January'
        onClick={() => navigate('/calendar/1')}
      />
    </div>
  );
}
