import { instance } from '../../lib/instanceLazy.ts';
import { ErrorFallback } from '../remoteComponents.tsx';

export const ContactsPage = instance?.createLazyComponent({
  loader: () => import('remote2/Contacts'),
  loading: <div>loading...</div>,
  fallback: ErrorFallback
});
