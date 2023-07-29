import React from 'react';
import Head from 'next/head';

import { Header } from '@/components';
import styles from '@/styles/home.module.scss';

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};
