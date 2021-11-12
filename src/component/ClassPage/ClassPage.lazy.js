import React, { lazy, Suspense } from 'react';

const LazyClassPage = lazy(() => import('./ClassPage'));

const ClassPage = props => (
  <Suspense fallback={null}>
    <LazyClassPage {...props} />
  </Suspense>
);

export default ClassPage;
