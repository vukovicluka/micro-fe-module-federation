import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export type RemoteDetails = {
  scope: string;
  module: string;
};

export function useRemote() {
  // const LazyComponent = lazy(async () => {})

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </ErrorBoundary>
  );
}
