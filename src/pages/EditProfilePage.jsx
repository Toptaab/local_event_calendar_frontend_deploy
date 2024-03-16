import ProfileContextProvider from '../features/profile/context/ProfileContext';
import EditProfile from '../features/profile/components/EditProfileContainer';

export default function EditProfilePage() {
  return (
    <ProfileContextProvider>
      <EditProfile />
    </ProfileContextProvider>
  );
}
