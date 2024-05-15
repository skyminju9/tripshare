import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStack, MainStack } from './src/router';
import auth from '@react-native-firebase/auth';

import { LocationProvider } from './src/contexts/LocationContext';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';
import { ScheduleProvider } from './src/contexts/AddScheduleContext';
import { TravelScheduleProvider } from './src/contexts/TravelScheduleContext';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    console.log('App Start: ', user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <AuthUserProvider firebaseAuthUser={user}>
      <GeolocationProvider>
        <LocationProvider>
          <TravelScheduleProvider>
            <ScheduleProvider>
              <NavigationContainer>{!user ? <LoginStack /> : <MainStack />}</NavigationContainer>
            </ScheduleProvider>
          </TravelScheduleProvider>
        </LocationProvider>
      </GeolocationProvider>
    </AuthUserProvider>
  );
}

export default App;
