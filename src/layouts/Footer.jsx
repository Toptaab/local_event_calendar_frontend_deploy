import { useNavigate } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';
import logo from '../asset/pic/OurLogo.png';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col grow'>
      <div className='grow' />
      <div className='text-center flex flex-col gap-2 pb-6 pt-2 justify-center items-center bg-primary text-white'>
        <div className='flex justify-center  w-[5.5rem]'>
          <button
            onClick={() => navigate('/home')}
            type='button'
            className='font-bold text-xl'
          >
            {' '}
            <img src={logo} alt='' />
          </button>
        </div>
        <div className='text-[0.7rem]'>
          <span>Copyright 2024 </span>
          <span>All Rights © | Reserved</span>
        </div>
        <div className='flex justify-center gap-3'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
  );
}
