import { createContext, useContext } from "react";

// Le type de retour pour le context
type GlobalContextType = {};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalState = ({ children }: React.PropsWithChildren) => {
  return (
    <GlobalContext.Provider value={undefined}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte dans les composants enfants
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
