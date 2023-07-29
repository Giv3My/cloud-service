import { useRouter } from 'next/router';

import * as Api from '@/api';

import { Avatar, Button, Layout, Menu, Popover } from 'antd';
import { CloudOutlined } from '@ant-design/icons';
import styles from './header.module.scss';

export const Header = () => {
  const router = useRouter();

  const onClickLogout = () => {
    Api.auth.logout();

    router.replace('/');
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[router.pathname]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: '/dashboard', label: 'Dashboard' },
              { key: '/dashboard/profile', label: 'Profile' },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Sign out
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
