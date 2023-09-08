import { IUser } from '@/types/user';
import client from './client';

const authApi = {
  connect: () => client.post('user/connect'),
  authorize: (email: string) => client.post('user/authorize', { email }),
  verify: (code: string, email: string) =>
    client.post('user/verify', { email, code }),
  me: () => client.get<IUser>('user/me'),
};

export default authApi;
