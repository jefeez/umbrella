import { useEffect, useState } from 'react';
import Icon from '../../../../../components/Icon';
import Name from '../../../../../components/Name';
import { useSocket } from '../../../../../hooks/useSocket';
import Bar from '../../../../../layouts/bar';
import Insider from '../../../../../layouts/insider';
import Online from '../../../../../components/Online';

interface IOnline {
  avatar: string;
  username: string;
}

export default function Aside() {
  const socket = useSocket();

  const [onlines, setOnlines] = useState<IOnline[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on('onlines', payload => {
        setOnlines(payload);
      });
    }
  }, [socket]);

  return (
    <div className="sidebar">
      <Insider>
        <Bar>
          <div className="h-full flex items-center">
            <Icon awesome="fa-solid fa-bars" />
            <Name>ONLINES</Name>
          </div>
        </Bar>
        <div className="w-full h-full p-2">
          {onlines.map(({ avatar, username }) => (
            <Online key={username} avatar={avatar} username={username} />
          ))}
        </div>
      </Insider>
    </div>
  );
}
