import React, { createContext, useContext } from "react";
import rootStore, { RootStore } from "./stores/RootStore";

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (<StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>);
};

export const useRootStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within a StoreProvider");
  }
  return store;
};
