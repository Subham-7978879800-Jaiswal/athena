import React, { useContext, useState } from "react";

const Store = React.createContext({
  providerSearchFilter: {},
  updateProviderSearchFilter: (data: Object) => {},
  resetFilters: () => {},
});

const StoreProvider = ({ children }: any) => {
  const [providerSearchFilter, setProviderSearchFilter] = useState<Object>({});

  const updateProviderSearchFilter = (data: Object) => {
    console.log(data);
    setProviderSearchFilter((prev: Object) => {
      return { ...prev, ...data };
    });
  };

  const resetFilters = () => {
    setProviderSearchFilter({});
  };

  return (
    <Store.Provider
      value={{ providerSearchFilter, updateProviderSearchFilter, resetFilters }}
    >
      {children}
    </Store.Provider>
  );
};

const useStore = () => {
  return useContext(Store);
};
export { StoreProvider, useStore };
