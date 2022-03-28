import React, { createContext, FC, ReactNode, useMemo } from 'react';
import { RootStore } from '../store';

const StoreContext = createContext<RootStore | undefined>(undefined);

const StoreContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const store = useMemo(() => new RootStore(), []);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreContextProvider };
