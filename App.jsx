import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LocationProvider } from './src/contexts/LocationContext';
import { LoginStack, MainStack } from './src/router';

function App() {
  const [loginUser, setLoginUser] = useState(false);

  useEffect(() => {
    // Simulate login check
    const isLoggedIn = true; // Change this based on your actual login logic
    setLoginUser(isLoggedIn);
  }, []);

  return (
    <LocationProvider>
      <NavigationContainer>{loginUser ? <MainStack /> : <LoginStack />}</NavigationContainer>
    </LocationProvider>
  );
}

export default App;
