import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoginStack, MainStack } from './src/router';

function App() {
  const [loginUser, setLoginUser] = useState(false);

  useEffect(() => {
    // TODO: Auth User
    setLoginUser(true);
  }, []);

  return <NavigationContainer>{loginUser ? <MainStack /> : <LoginStack />}</NavigationContainer>;
}

export default App;
