import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router';

import { LocationProvider } from './src/contexts/LocationContext';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';
import { ScheduleProvider2 } from './src/contexts/ScheduleContext';
import { ScheduleProvider } from './src/contexts/AddScheduleContext';

function App() {
  return (
    <AuthUserProvider>
      <GeolocationProvider>
        <LocationProvider>
          <ScheduleProvider2>
            <ScheduleProvider>
              <NavigationContainer>
                <MainStack />
              </NavigationContainer>
            </ScheduleProvider>
          </ScheduleProvider2>
        </LocationProvider>
      </GeolocationProvider>
    </AuthUserProvider>
  );
}

export default App;
