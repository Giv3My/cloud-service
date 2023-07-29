import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import nookies from 'nookies';

import * as Api from '@/api';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = `Bearer ${_token}`;

  try {
    const userData = await Api.auth.getMe();

    return {
      props: {
        userData,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permanent: false,
      },
    };
  }
};
