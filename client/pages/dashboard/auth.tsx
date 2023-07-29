import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { checkAuth } from '@/utils';

import { Tabs } from 'antd';
import { LoginForm, RegisterForm } from '@/components';

const AuthPage: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
        <Tabs
          items={[
            {
              key: 'login',
              label: 'Login',
              children: <LoginForm />,
            },
            {
              key: 'register',
              label: 'Register',
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if (authProps.props?.userData) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AuthPage;
