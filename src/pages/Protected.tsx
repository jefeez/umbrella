import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';
import { notify } from '../utils/notify';

export default function Protected({ children }: { children: ReactNode }) {
  const { authenticated, me } = useAuth();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function already() {
      try {
        setAuth(false);
        await me();
        setAuth(true);
      } catch (error) {
        setAuth(true);
        notify.warn('Your session has expired');
      }
    }
    already();
  }, []);

  if (!auth) {
    return <Loading />;
  }

  if (!authenticated) {
    return <Navigate to="/sign-in" />;
  }

  if (auth && authenticated) {
    return children;
  }
}
