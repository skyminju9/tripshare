import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStack, MainStack } from './src/router';
import auth from '@react-native-firebase/auth';

import { LocationProvider } from './src/contexts/LocationContext';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';
import { ScheduleProvider2 } from './src/contexts/ScheduleContext';
import { ScheduleProvider } from './src/contexts/AddScheduleContext';
import ModalProvider from './src/contexts/profileModalContext';
import ModalContainer from './src/components/ModalContainer';

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
      <ModalProvider>
        <GeolocationProvider>
          <LocationProvider>
            <ScheduleProvider2>
              <ScheduleProvider>
                <NavigationContainer>
                  {!user ? (
                    <LoginStack />
                  ) : (
                    <>
                      <MainStack />
                      <ModalContainer />
                    </>
                  )}
                </NavigationContainer>
              </ScheduleProvider>
            </ScheduleProvider2>
          </LocationProvider>
        </GeolocationProvider>
      </ModalProvider>
    </AuthUserProvider>
  );
}

export default App;
