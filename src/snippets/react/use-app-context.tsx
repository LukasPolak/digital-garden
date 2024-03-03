import * as React from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type Context = {
  foo: string;
} | null;

const AppContext = React.createContext<Context>(null);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const value: Context = {
    foo: "bar",
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context === undefined || context === null) {
    throw new Error(
      "`useAppContext` must be used within a `AppContextProvider`",
    );
  }

  return context;
};
