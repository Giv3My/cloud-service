import React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

interface Props extends AppProps {
  Component: AppProps['Component'] & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
  };
}

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
