import React, { lazy, Suspense } from 'react';

const LazyFooterPage = lazy(() => import('./FooterPage'));

const FooterPage = props => (
  <Suspense fallback={null}>
    <LazyFooterPage {...props} />
  </Suspense>
);

export default FooterPage;
