import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

import * as Api from '@/api';
import { checkAuth } from '@/utils';
import { User } from '@/api/dto/auth.dto';

import { Layout } from '@/layouts/Layout';
import { Button } from 'antd';
import styles from '@/styles/profile.module.scss';

interface DashboardProfileProps {
  userData: User;
}

const DashboardProfile: NextPage<DashboardProfileProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = ({ userData }) => {
  const router = useRouter();

  const onClickLogout = () => {
    Api.auth.logout();

    router.replace('/');
  };

  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Full name: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button onClick={onClickLogout} type="primary" danger>
          Logout
        </Button>
      </div>
    </main>
  );
};

DashboardProfile.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  return authProps;
};

export default DashboardProfile;
