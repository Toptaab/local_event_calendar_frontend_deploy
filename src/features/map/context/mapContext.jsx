import { useMemo, useState, createContext } from 'react';

import { getAllEventInScope } from '../../../api/event';

export const MapContext = createContext();

function MapContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch data based on the specified bounds
  const fetchData = (bounds) => getAllEventInScope(bounds);

  const MapContextObj = useMemo(
    () => ({
      events,
      setEvents,
      fetchData,
      user,
      setUser,
    }),
    [events, user]
  );

  return (
    <MapContext.Provider value={MapContextObj}>{children}</MapContext.Provider>
  );
}

export default MapContextProvider;
