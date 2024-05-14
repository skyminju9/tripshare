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
    case 'CHANGE_NAME':
      return { ...user, name: action.name };
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

  const changeName = name => {
    dispatch({ type: 'CHANGE_NAME', name });
  };

  return (
    <AuthUserContext.Provider value={authUser}>
      <AuthUserDispatchContext.Provider value={{ login, logout, changeName }}>
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
