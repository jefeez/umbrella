import axios from 'axios';
import FormData from 'form-data';
import storage from '../utils/storage';

const baseURL = import.meta.env.VITE_APP_API;

const api = axios.create({ baseURL });

export interface IUser {
  avatar: string;
  username: string;
}

export interface ISignInResponse {
  token: string;
  user: IUser;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
}

const signIn = async (data: ISignIn) => {
  const response = await api.post<ISignInResponse>('auth/sign-in', data);
  return response.data;
};

const signUp = async (data: ISignUp) => {
  const response = await api.post<ISignInResponse>('auth/sign-up', data);
  return response.data;
};

const authenticated = async () => {
  const response = await api.get<ISignInResponse>('auth/', {
    headers: { Authorization: `Bearer ${storage.getItem('@AUTH')}` },
  });
  return response.data;
};

const avatar = async (filer: File) => {
  const data = new FormData();
  data.append('avatar', filer);
  const response = await api.put<Omit<ISignInResponse, 'token'>>('auth/avatar/', data, {
    headers: {
      Authorization: `Bearer ${storage.getItem('@TOKEN')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export default { signIn, signUp, authenticated, avatar };
