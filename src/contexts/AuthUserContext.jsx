import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getLoginUserInfo } from '../auth/auth';

const AuthUserContext = createContext();
const AuthUserDispatchContext = createContext();

const authUserReducer = (user, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.userData;
    case 'LOGOUT':
      return {};
    case 'UPDATE_USER':
      return { ...user, ...action.updateInfo };
    default:
      return user;
  }
};

export const AuthUserProvider = ({ children, firebaseAuthUser }) => {
  const [authUser, dispatch] = useReducer(authUserReducer, {});

  useEffect(() => {
    const getUserData = async () => {
      if (firebaseAuthUser) {
        const userInfo = await getLoginUserInfo(firebaseAuthUser.email);
        dispatch({ type: 'LOGIN', userData: userInfo });
        console.log('authUserContext: ', userInfo);
      }
    };

    getUserData();
  }, []);

  const login = async email => {
    const userInfo = await getLoginUserInfo(email);
    dispatch({ type: 'LOGIN', userData: userInfo });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateUserInfo = updateInfo => {
    dispatch({ type: 'UPDATE_USER', updateInfo });
  };

  return (
    <AuthUserContext.Provider value={authUser}>
      <AuthUserDispatchContext.Provider value={{ login, logout, updateUserInfo }}>
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
