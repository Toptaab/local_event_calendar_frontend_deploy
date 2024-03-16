import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Drawer } from 'rsuite';
import { CalendarIcon, ExploreIcon, HomeIcon, MapIcon } from '../icons';

function DrawerForNav({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonToolbar>
        <button type='button' aria-label='Save' onClick={() => setOpen(true)}>
          {children}
        </button>
      </ButtonToolbar>

      <Drawer
        style={{ width: '30%', minWidth: '12rem' }}
        placement='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>
            <p className='font-bold'>Menu</p>
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body style={{ padding: '1rem' }}>
          <div className='flex flex-col w-auto md:w-[20rem]'>
            <Link to='/home'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start flex gap-[1rem]'
                type='button'
              >
                <HomeIcon className='w-[2rem] h-[2rem]' iconColor='#000000' />
                Home
              </button>
            </Link>
            <Link to='/map'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start flex gap-[1rem]'
                type='button'
              >
                <MapIcon className='w-[2rem] h-[2rem]' iconColor='#000000' />
                Map
              </button>
            </Link>
            <Link to='/calendar'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start flex gap-[1rem]'
                type='button'
              >
                <CalendarIcon
                  className='w-[2rem] h-[2rem]'
                  iconColor='#000000'
                />
                Calendar
              </button>
            </Link>
            <Link to='/explore'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start flex gap-[1rem]'
                type='button'
              >
                <ExploreIcon
                  className='w-[2rem] h-[2rem]'
                  iconColor='#000000'
                />
                Explore
              </button>
            </Link>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default DrawerForNav;
