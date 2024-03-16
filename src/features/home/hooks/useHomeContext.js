import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';

function useHomeContext() {
  return useContext(HomeContext);
}

export default useHomeContext;
