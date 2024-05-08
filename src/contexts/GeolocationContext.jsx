import React, { useContext, createContext, useEffect, useState } from 'react';
import { getMyGeolocation } from '../utils/getCurrentLocation';

const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState({});

  useEffect(() => {
    try {
      getMyGeolocation({ setGeolocation });
    } catch (e) {
      alert(e);
    }
  }, []);

  return <GeolocationContext.Provider value={geolocation}>{children}</GeolocationContext.Provider>;
};

export function useGeolocation() {
  return useContext(GeolocationContext);
}
