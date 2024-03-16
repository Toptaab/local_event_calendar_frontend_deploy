import { useEffect, useState, useMemo, createContext } from 'react';
import { authMe } from '../../../api/auth';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [authEvents, setAuthEvents] = useState(null);

  const fetchEvent = async () => {
    try {
      const authEvent = await authMe();
      setAuthEvents(authEvent.data);
      // console.log(authEvent.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ProfileContextObject = useMemo(
    () => ({
      authEvents,
    }),
    [authEvents]
  );

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <ProfileContext.Provider value={ProfileContextObject}>
      {children}
    </ProfileContext.Provider>
  );
}
