import { createContext, useMemo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { boolean } from 'joi';
import { getEvent } from '../../../api/event';

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);

  const getEventByEventId = async () => {
    try {
      setLoading(true);
      const response = await getEvent(eventId);
      console.log(response.data);
      setEvent(response.data);
      if (response.data === null) {
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventByEventId();
  }, []);

  const eventObj = useMemo(
    () => ({
      event,
      setLoading,
      loading,
    }),
    [event]
  );

  return (
    <EventContext.Provider value={eventObj}>{children}</EventContext.Provider>
  );
}
