import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import {
  CreateEventIcon,
  LogOutIcon,
  ProfileIcon,
  SettingIcon,
} from '../icons';
import 'rsuite/Dropdown/styles/index.css';

import useAuth from '../features/auth/hooks/auth';

export default function DropdownProfile({ logout }) {
  const allAuthObj = useAuth();

  const {
    authUser: { role },
  } = allAuthObj;

  // console.log(allAuthObj, ';;;;;;;;;;;;;');
  const navigate = useNavigate();

  return (
    <Dropdown
      icon={<ProfileIcon />}
      // title={allAuthObj?.userName}
      placement='bottomEnd'
    >
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<ProfileIcon />}
          onClick={() => navigate('/profile')}
        >
          Profile
        </Dropdown.Item>
      </div>
      {role === 'ORGANIZER' ? (
        <div className='p-1 border-b'>
          <Dropdown.Item
            style={{ display: 'flex', gap: '8px' }}
            icon={<CreateEventIcon />}
            onClick={() => navigate('/create-event')}
          >
            Create Event
          </Dropdown.Item>
        </div>
      ) : null}
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<SettingIcon />}
          onClick={() => navigate('/profile/edit')}
        >
          Setting{' '}
        </Dropdown.Item>
      </div>
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<LogOutIcon />}
          onClick={logout}
        >
          Logout{' '}
        </Dropdown.Item>
      </div>
    </Dropdown>
    // </div>
  );
}
