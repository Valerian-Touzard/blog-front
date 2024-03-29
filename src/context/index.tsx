import { createContext, useContext, useState } from "react";

// Le type de retour pour le context
type GlobalContextType = {
  formData: FormDataType
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

type FormDataType = {
  title: string;
  descrition: string;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalState = ({ children }: React.PropsWithChildren) => {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    descrition: "",
  });

  return (
    <GlobalContext.Provider value={{formData, setFormData}}>
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
