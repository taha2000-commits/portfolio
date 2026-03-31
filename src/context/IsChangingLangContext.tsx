import React, { createContext, Dispatch, useContext, useState } from "react";

export const IsChangingLangContext = createContext<{
  isChanging: boolean;
  setIsChanging: Dispatch<React.SetStateAction<boolean>>;
}>({ isChanging: false, setIsChanging: () => {} });

const IsChangingLangContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isChanging, setIsChanging] = useState<boolean>(false);
  return (
    <IsChangingLangContext.Provider value={{ isChanging, setIsChanging }}>
      {children}
    </IsChangingLangContext.Provider>
  );
};

export function useIsChangingLangContext() {
  return useContext(IsChangingLangContext);
}
export default IsChangingLangContextProvider;
