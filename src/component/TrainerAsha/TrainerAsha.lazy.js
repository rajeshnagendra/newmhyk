import React, { lazy, Suspense } from 'react';

const LazyTrainerAsha = lazy(() => import('./TrainerAsha'));

const TrainerAsha = props => (
  <Suspense fallback={null}>
    <LazyTrainerAsha {...props} />
  </Suspense>
);

export default TrainerAsha;
