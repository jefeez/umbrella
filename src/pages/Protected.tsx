import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';

export default function Protected({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  const { authenticated, me } = useAuth();

  useEffect(() => {
    async function already() {
      try {
        setLoading(true);
        await me();
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    already();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!authenticated) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
