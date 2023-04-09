import React, { useContext, useState } from "react";

const ProviderSearchInitial = {
  distanceFromMember: "",
  speciality: "",
  subSpeciality: "",
  procedureCategory: "",
  conditionsAddressed: "",
  facilityType: "",
  preferredGender: "",
  languagesSpoken: "",
  providerType: "",
};

const Store = React.createContext({
  providerSearchFilter: ProviderSearchInitial,
  updateProviderSearchFilter: (data: Object) => {},
  resetFilters: () => {},
});

const StoreProvider = ({ children }: any) => {
  const [providerSearchFilter, setProviderSearchFilter] = useState(
    ProviderSearchInitial
  );

  const updateProviderSearchFilter = (data: Object) => {
    setProviderSearchFilter((prev: any) => {
      return { ...prev, ...data };
    });
  };

  const resetFilters = () => {
    setProviderSearchFilter(ProviderSearchInitial);
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
