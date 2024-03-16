import { useMemo, useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import categoryApi from '../../../api/category';
import provinceApi from '../../../api/province';
import * as eventApi from '../../../api/event';

export const EditEventContext = createContext();

export default function EditEventContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [province, setProvince] = useState(null);
  const [category, setCategory] = useState([]);
  const [event, setEvent] = useState(null);

  // param id
  const { eventId } = useParams();

  const fetchEditPage = async () => {
    try {
      setLoading(true);

      // FETCH events
      const events = await eventApi.getEvent(eventId);
      console.log(events.data);
      setEvent(events.data);

      // FETCH province
      const provinces = await provinceApi();
      setProvince(provinces.data);

      // FETCH category
      const categories = await categoryApi();
      setCategory(categories.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEditPage();
    window.scrollTo(0, 0);
  }, []);

  const eventObject = useMemo(
    () => ({
      province,
      category,
      event,
      loading,
      setLoading,
      eventId,
    }),
    [province, category, event, loading]
  );

  return (
    <EditEventContext.Provider value={eventObject}>
      {children}
    </EditEventContext.Provider>
  );
}
