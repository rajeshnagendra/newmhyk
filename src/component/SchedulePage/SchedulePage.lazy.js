import React, { lazy, Suspense } from 'react';

const LazySchedulePage = lazy(() => import('./SchedulePage'));

const SchedulePage = props => (
  <Suspense fallback={null}>
    <LazySchedulePage {...props} />
  </Suspense>
);

export default SchedulePage;
