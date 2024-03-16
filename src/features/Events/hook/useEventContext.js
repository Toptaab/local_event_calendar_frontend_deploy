import { useContext } from 'react';
import { EventContext } from '../context/EventContext';

export default function useEventContext() {
  return useContext(EventContext);
}
