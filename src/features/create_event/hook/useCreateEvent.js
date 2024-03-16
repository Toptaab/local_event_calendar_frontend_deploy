import { useContext } from 'react';
import { CreateEventContext } from '../context/CreateEventContext';

export default function useCreateEvent() {
  return useContext(CreateEventContext);
}
