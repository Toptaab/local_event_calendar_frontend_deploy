import { useState, useEffect, createContext, useMemo } from 'react';
import { getAllEvent } from '../../../api/event';

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await getAllEvent();
      setEvent(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const allEventsObj = useMemo(
    () => ({
      event,
      setLoading,
      loading,
    }),
    [event, loading]
  );

  useEffect(() => {
    getAll();
  }, []);

  return (
    <HomeContext.Provider value={allEventsObj}>{children}</HomeContext.Provider>
  );
}

export default HomeContextProvider;
