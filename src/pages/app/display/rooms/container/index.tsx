import { useEffect, useState } from 'react';
import Icon from '../../../../../components/Icon';
import Name from '../../../../../components/Name';
import { useSocket } from '../../../../../hooks/useSocket';
import Bar from '../../../../../layouts/bar';
import Handler from './handler';
import Messages, { Imessage } from './messages';

function Container() {
  const socket = useSocket();

  const [messages, setMessages] = useState<Imessage[]>([]);

  const onBody = (body: string) => {
    if (socket) {
      socket.emit('set-message', body);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('get-message', (payload: Imessage) => {
        setMessages(prevState => [...prevState, payload]);
      });
    }
  }, [socket]);

  return (
    <div className="container">
      <Bar>
        <div className="h-full flex items-center">
          <Icon awesome="fa-solid fa-at" />
          <Name>GLOBALS</Name>
        </div>
      </Bar>
      <Messages messages={messages} />
      <Handler onBody={onBody} />
    </div>
  );
}

export default Container;
