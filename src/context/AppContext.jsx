/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(undefined);

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
