import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import Button from '../global_components/Button';
import {
  MapIcon,
  CalendarIcon,
  ExploreIcon,
  ProfileIcon,
  MenuIcon,
} from '../icons';
import useAuth from '../features/auth/hooks/auth';
import DropdownProfile from '../global_components/DropdownProfile';
import { clearToken } from '../utils/local-storage';
import DrawerForNav from '../global_components/Drawer';
import logo from '../asset/pic/OurLogo.png';

function NavBar() {
  const navigate = useNavigate();
  const allAuthObj = useAuth();
  const { authUser, setAuthUser } = allAuthObj;

  const logout = () => {
    setAuthUser(null);
    clearToken();
    toast.success('Logout');
  };

  return (
    <div className='flex items-center justify-between w-full text-base font-semibold bg-primary px-3 py-2'>
      <div className='flex-1 '>
        <DrawerForNav>
          <MenuIcon />
        </DrawerForNav>
      </div>

      <div className='flex justify-center w-[5.5rem]  text-white'>
        <button
          onClick={() => navigate('/home')}
          type='button'
          className='font-bold text-xl'
        >
          {' '}
          <img src={logo} alt='' />
        </button>
      </div>
      <div className='flex flex-1  justify-end pr-3'>
        {authUser ? (
          <DropdownProfile logout={logout} />
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
