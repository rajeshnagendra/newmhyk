import React, { lazy, Suspense } from 'react';

const LazyMenuHeader = lazy(() => import('./MenuHeader'));

const MenuHeader = props => (
  <Suspense fallback={null}>
    <LazyMenuHeader {...props} />
  </Suspense>
);

export default MenuHeader;
