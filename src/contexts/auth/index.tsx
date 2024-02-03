/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, createContext, useState } from 'react';

import api, { ISignIn, ISignUp } from '../../services/api';
import storage from '../../utils/storage';

export interface IAuthContext {
  authenticated: boolean;
  signIn: (sign: ISignIn) => Promise<boolean>;
  signUp: (sign: ISignUp) => Promise<boolean>;
  avatar: (data: File) => Promise<boolean>;
  me: () => Promise<boolean>;
}

export const AuthContext = createContext<IAuthContext>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(!!storage.getItem('@AUTH'));

  const signIn = async (sign: ISignIn) => {
    const response = await api.signIn(sign);
    if (response) {
      storage.setItem('@AUTH', response.token);
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const signUp = async (sign: ISignUp) => {
    const response = await api.signUp(sign);
    if (response) {
      storage.setItem('@AUTH', response.token);
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const me = async () => {
    const response = await api.me();
    if (response) {
      setAuthenticated(true);
      return true;
    }
    setAuthenticated(false);
    return false;
  };

  const avatar = async (data: File) => {
    const response = await api.avatar(data);
    if (response) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signUp, avatar, me }}>
      {children}
    </AuthContext.Provider>
  );
}
