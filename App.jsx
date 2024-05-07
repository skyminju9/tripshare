import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LocationProvider } from './src/contexts/LocationContext';
import { LoginStack, MainStack } from './src/router';
import { GeolocationProvider } from './src/contexts/GeolocationContext';
import { AuthUserProvider } from './src/contexts/AuthUserContext';

function App() {
  const [isLoginUser, setIsLoginUser] = useState(false);

  useEffect(() => {
    // Simulate login check
    const isLoggedIn = false;
    setIsLoginUser(isLoggedIn);
  }, []);

  return (
    <AuthUserProvider>
      <GeolocationProvider>
        <LocationProvider>
          <NavigationContainer>{isLoginUser ? <MainStack /> : <LoginStack />}</NavigationContainer>
        </LocationProvider>
      </GeolocationProvider>
    </AuthUserProvider>
  );
}

export default App;
