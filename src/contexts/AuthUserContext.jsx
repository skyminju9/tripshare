import React, { createContext, useContext, useReducer } from 'react';

const AuthUserContext = createContext();
const AuthUserDispatchContext = createContext();

const authUserReducer = (user, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.userData;
    case 'LOGOUT':
      return {};
    default:
      return user;
  }
};

export const AuthUserProvider = ({ children }) => {
  const [authUser, dispatch] = useReducer(authUserReducer, {});

  const login = user => {
    dispatch({ type: 'LOGIN', userData: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthUserContext.Provider value={authUser}>
      <AuthUserDispatchContext.Provider value={{ login, logout }}>
        {children}
      </AuthUserDispatchContext.Provider>
    </AuthUserContext.Provider>
  );
};

export function useAuthUser() {
  return useContext(AuthUserContext);
}

export function useAutuUserDispatch() {
  return useContext(AuthUserDispatchContext);
}
