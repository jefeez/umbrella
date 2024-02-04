import { useEffect, useState } from 'react';
import Avatar from '../../../components/Avatar';
import Umbrella from '../../../components/Umbrella';
import Toolbar from '../../../layouts/toolbar';

import { useSocket } from '../../../hooks/useSocket';

export interface IUser {
  id: string;
  username: string;
  avatar: string;
  email: string;
}

export default function Sidebar() {
  const [user, setUsername] = useState<IUser | null>(null);

  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on('user', (payload: IUser) => {
        setUsername(payload);
      });
    }
  }, [socket]);

  return (
    <div className="h-full flex border-r border-dark-500">
      <Toolbar>
        <Umbrella />
        <div className="w-full h-full flex flex-col items-center" />
        {user && <Avatar avatar={user.avatar} />}
      </Toolbar>
      {/* <Sidetab /> */}
    </div>
  );
}
