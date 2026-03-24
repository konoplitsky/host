import App from '../App.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { AboutApp } from '../shared/ui/remoteApps';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/remote',
    element: <AboutApp />
  }
]);

export default router;
