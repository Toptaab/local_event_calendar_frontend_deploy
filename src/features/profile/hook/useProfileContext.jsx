import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

export default function useProfileContext() {
  return useContext(ProfileContext);
}
