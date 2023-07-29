import React from 'react';
import { useRouter } from 'next/router';

import { Menu } from 'antd';
import { UploadButton } from '@/components';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import styles from '@/styles/home.module.scss';

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[router.pathname]}
          items={[
            {
              key: '/dashboard',
              icon: <FileOutlined />,
              label: 'Files',
              onClick: () => router.push('/dashboard'),
            },
            {
              key: '/dashboard/photos',
              icon: <FileImageOutlined />,
              label: 'Photos',
              onClick: () => router.push('/dashboard/photos'),
            },
            {
              key: '/dashboard/trash',
              icon: <DeleteOutlined />,
              label: 'Trash',
              onClick: () => router.push('/dashboard/trash'),
            },
          ]}
        />
      </div>

      <div className="container">{children}</div>
    </main>
  );
};
