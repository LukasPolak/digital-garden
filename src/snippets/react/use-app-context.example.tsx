import { useAppContext, AppContextProvider } from "./use-app-context";

export const Provider = () => {
  return (
    <AppContextProvider>
      <Consumer />
    </AppContextProvider>
  );
};

export const Consumer = () => {
  const { foo } = useAppContext();
  foo; // bar

  return <main />;
};
