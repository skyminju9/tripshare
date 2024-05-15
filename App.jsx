import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router';

import { LocationProvider } from './src/contexts/LocationContext';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';
import { ScheduleProvider } from './src/contexts/AddScheduleContext';
import { TravelScheduleProvider } from './src/contexts/TravelScheduleContext';

function App() {
  return (
    <AuthUserProvider>
      <GeolocationProvider>
        <LocationProvider>
          <TravelScheduleProvider>
            <ScheduleProvider>
              <NavigationContainer>
                <MainStack />
              </NavigationContainer>
            </ScheduleProvider>
          </TravelScheduleProvider>
        </LocationProvider>
      </GeolocationProvider>
    </AuthUserProvider>
  );
}

export default App;
