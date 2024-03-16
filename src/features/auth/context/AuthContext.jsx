import { createContext, useState, useMemo, useEffect } from 'react';
import { authMe } from '../../../api/auth';
import { getToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const allAuthObj = useMemo(
    () => ({
      setAuthUser,
      authUser,
      loading,
      setLoading,
    }),
    [authUser, loading]
  );
  const fetchAuth = async () => {
    const token = getToken();
    if (token) {
      const authResult = await authMe(token);
      setAuthUser(authResult.data);
    }
  };

  console.log(authUser);

  useEffect(() => {
    try {
      setLoading(true);
      fetchAuth();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={allAuthObj}>{children}</AuthContext.Provider>
  );
}
