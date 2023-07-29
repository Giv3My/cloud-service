import axios from '@/core/axios';
import { destroyCookie } from 'nookies';

import {
  LoginFormDto,
  LoginResposneDto,
  RegisterFormDto,
  RegisterResponseDto,
  User,
} from './dto/auth.dto';

export const login = async (values: LoginFormDto) => {
  const { data } = await axios.post<LoginResposneDto>('/auth/login', values);

  return data;
};

export const register = async (values: RegisterFormDto) => {
  const { data } = await axios.post<RegisterResponseDto>('/auth/register', values);

  return data;
};

export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
};

export const getMe = async () => {
  const { data } = await axios.get<User>('users/me');

  return data;
};
