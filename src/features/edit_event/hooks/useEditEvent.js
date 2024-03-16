import { useContext } from 'react';
import { EditEventContext } from '../context/EditEventContext';

export default function useEditEvent() {
  return useContext(EditEventContext);
}
