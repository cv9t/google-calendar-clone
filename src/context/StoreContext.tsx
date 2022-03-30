import React, { createContext, ReactNode, useMemo } from 'react';
import { RootStore } from '../store/index';

const StoreContext = createContext<RootStore | undefined>(undefined);

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const store = useMemo(() => new RootStore(), []);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreContextProvider };
