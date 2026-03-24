import { createRemoteAppComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/runtime';
import { ErrorFallback } from '../remoteComponents.tsx';

export const AboutApp = createRemoteAppComponent({
  loader: () => loadRemote('remote/export-app'),
  loading: <div>loading...</div>,
  fallback: ({ error }) => <ErrorFallback error={error} />
});
