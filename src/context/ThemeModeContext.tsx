import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface ThemeModeProviderProps {
  children: ReactNode;
}

interface ThemeModeData {
  theme: string | undefined;
  setTheme: Dispatch<SetStateAction<string | undefined>>;
}

export const ThemeModeContext = createContext({} as ThemeModeData);

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [theme, setTheme] = useState<string>();

  const ThemeModeProviderValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeModeContext.Provider value={ThemeModeProviderValue}>
      {children}
    </ThemeModeContext.Provider>
  );
};
