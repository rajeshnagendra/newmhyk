import React, { lazy, Suspense } from 'react';

const LazyTrainerPraveen = lazy(() => import('./TrainerPraveen'));

const TrainerPraveen = props => (
  <Suspense fallback={null}>
    <LazyTrainerPraveen {...props} />
  </Suspense>
);

export default TrainerPraveen;
