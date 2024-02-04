import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Protected({ children }: { children: ReactNode }) {
  const { authenticated, me } = useAuth();

  useEffect(() => {
    async function already() {
      try {
        await me();
        // eslint-disable-next-line no-empty
      } catch (error) {}
    }
    already();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  if (!authenticated) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
