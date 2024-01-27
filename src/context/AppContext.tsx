import { ReactNode, createContext, useContext, useState } from "react";

export enum Theme {
  Candy = "Candy",
  Tomato = "Tomato",
  Nature = "Nature",
  Stars = "Stars",
}

type AppContext = {
  theme: Theme;
  setAppTheme: (nextTheme: Theme) => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [theme, setTheme] = useState(Theme.Nature);

  function setAppTheme(nextTheme: Theme) {
    if (theme !== nextTheme) setTheme(nextTheme);
  }

  return (
    <AppContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </AppContext.Provider>
  );
}
