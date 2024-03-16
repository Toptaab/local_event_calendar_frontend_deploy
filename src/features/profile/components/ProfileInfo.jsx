import Avatar from '../../../global_components/Avatar';
import useProfileContext from '../hook/useProfileContext';
import bg from '../../../asset/pic/peak_background.png';

function ProfileInfo() {
  const ProfileContextObject = useProfileContext();
  const { authEvents } = ProfileContextObject;
  console.log(authEvents, 'from Profile Info');
  return (
    <div>
      {/* PROFILE */}
      <div className='relative rounded-lg overflow-hidden h-[16rem]'>
        {/* background */}
        <img src={bg} alt='' className='w-full h-full inset-0 opacity-85' />
        {/* profile information */}
        <div className='absolute flex flex-col gap-1 justify-center items-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <Avatar size='w-[5rem]' src={authEvents?.profileImage} />
          <div className='text-sm'>{authEvents?.userName}</div>
          <div>{authEvents?.Reminder?.length}</div>
          <div className='text-sm'>event reminded</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
