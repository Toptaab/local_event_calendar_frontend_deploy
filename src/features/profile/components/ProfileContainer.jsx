import ProfileContextProvider from '../context/ProfileContext';
import ProfileCalendar from './ProfileCalendar';
// import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';
import ProfileNav from './ProfileNav';
// import ProfileDrawer from './ProfileDrawer';

function ProfileContainer() {
  return (
    <div className='p-4'>
      <ProfileContextProvider>
        <ProfileInfo />
        <ProfileNav />
      </ProfileContextProvider>
    </div>
  );
}

export default ProfileContainer;
