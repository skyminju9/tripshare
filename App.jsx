import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router';

import { LocationProvider } from './src/contexts/LocationContext';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';

function App() {
  return (
    <AuthUserProvider>
      <GeolocationProvider>
        <LocationProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </LocationProvider>
      </GeolocationProvider>
    </AuthUserProvider>
  );
}

export default App;
