import { Main } from '@components/layout/Main/Main';
import { GoogleAnalytics } from '@components/util/GoogleAnalytics/GoogleAnalytics';
import { queryOptions } from '@graphql/graphql-client';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useState } from 'react';
import { PT_Sans } from 'next/font/google';
import { Provider } from 'jotai';
import '../styles/globals.scss';
import Head from 'next/head';

function syncDrupalPreviewRoutes(path: string) {
  if (window && window.top !== window.self) {
    window.parent.postMessage(
      { type: 'NEXT_DRUPAL_ROUTE_SYNC', path },
      process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string
    );
  }
}

Router.events.on('routeChangeStart', function (path) {
  syncDrupalPreviewRoutes(path);
});

export const loadFeatures = () =>
  import('../lib/framerFeatures').then((res) => res.default);

type PageProps = {
  dehydratedState?: DehydratedState;
};

const PTSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${PTSans.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GoogleAnalytics trackPageViews />
          <LazyMotion features={loadFeatures} strict>
            <Provider>
              <Main>
                ==
                <Component {...pageProps} />
              </Main>
            </Provider>
          </LazyMotion>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
