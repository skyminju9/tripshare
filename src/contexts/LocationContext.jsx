import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = country => {
    setSelectedCountry(country);
  };

  const handleCityChange = city => {
    setSelectedCity(city);
  };

  return (
    <LocationContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry: handleCountryChange,
        selectedCity,
        setSelectedCity: handleCityChange,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
