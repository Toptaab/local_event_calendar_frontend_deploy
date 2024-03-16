import { useContext } from 'react';
import { ExploreContext } from '../context/ExploreContext';

export default function useExploreContext() {
  return useContext(ExploreContext);
}
