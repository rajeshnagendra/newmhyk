import React, { lazy, Suspense } from 'react';

const LazyHomePageSlider = lazy(() => import('./HomePageSlider'));

const HomePageSlider = props => (
  <Suspense fallback={null}>
    <LazyHomePageSlider {...props} />
  </Suspense>
);

export default HomePageSlider;
