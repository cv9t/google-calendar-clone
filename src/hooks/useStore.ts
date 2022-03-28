import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const useStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore was used outside of its Provider');
  }

  return context;
};

export { useStore };
