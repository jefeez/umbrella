import { ReactNode, createContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import storage from '../../utils/storage';

export const SocketContext = createContext<Socket | null>({} as Socket);

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    setSocket(io(import.meta.env.VITE_APP_WSS, { auth: { token: storage.getItem('@AUTH') } }));
    return () => {
      socket?.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
