import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface MenuOptionProviderProps {
  children: ReactNode;
}

interface MenuOptionData {
  menuOption: number | undefined;
  setMenuOption: Dispatch<SetStateAction<number | undefined>>;
}

export const MenuOptionContext = createContext({} as MenuOptionData);

export const MenuOptionProvider = ({ children }: MenuOptionProviderProps) => {
  const [menuOption, setMenuOption] = useState<number>();

  const MenuOptionProviderValue = useMemo(
    () => ({
      menuOption,
      setMenuOption,
    }),
    [menuOption]
  );

  return (
    <MenuOptionContext.Provider value={MenuOptionProviderValue}>
      {children}
    </MenuOptionContext.Provider>
  );
};
