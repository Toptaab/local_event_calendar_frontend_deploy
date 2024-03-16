import { useContext } from 'react';
import { MapContext } from '../context/mapContext';

export default function useMapContext() {
  return useContext(MapContext);
}
