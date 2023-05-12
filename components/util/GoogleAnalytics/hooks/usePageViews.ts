import { Router } from 'next/router';
import { useEffect } from 'react';
import { pageView } from '../interactions';

export interface UsePageViewsOptions {
  gaMeasurementId?: string;
  ignoreHashChange?: boolean;
  disabled?: boolean;
}

export const usePageViews = ({
  gaMeasurementId,
  ignoreHashChange,
  disabled,
}: UsePageViewsOptions = {}) => {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleRouteChange = (url: URL): void => {
      const _gaMeasurementId =
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? gaMeasurementId;

      pageView({ path: url.toString() }, _gaMeasurementId);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    if (!ignoreHashChange) {
      Router.events.on('hashChangeComplete', handleRouteChange);
    }

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);

      if (!ignoreHashChange) {
        Router.events.off('hashChangeComplete', handleRouteChange);
      }
    };
  }, [disabled, gaMeasurementId, ignoreHashChange]);
};
