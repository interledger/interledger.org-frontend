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
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useState } from 'react';
import '../styles/globals.scss';

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

type PageProps = {
  dehydratedState?: DehydratedState;
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GoogleAnalytics trackPageViews />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
