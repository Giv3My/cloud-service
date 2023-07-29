import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';

import * as Api from '@/api';
import { checkAuth } from '@/utils';
import { FileItem } from '@/api/dto/files.dto';

import { Layout } from '@/layouts/Layout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Files } from '@/modules/files';

interface DasboardProps {
  items: FileItem[];
}

const Dasboard: NextPage<DasboardProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = ({ items }) => {
  return <DashboardLayout>{<Files items={items} withActions />}</DashboardLayout>;
};

Dasboard.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();

    return {
      props: { items },
    };
  } catch (err) {
    return {
      props: { items: [] },
    };
  }
};

export default Dasboard;
