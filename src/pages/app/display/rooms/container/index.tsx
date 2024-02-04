import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars
import { Howl } from 'howler';
import Icon from '../../../../../components/Icon';
import Name from '../../../../../components/Name';
import { useSocket } from '../../../../../hooks/useSocket';
import Bar from '../../../../../layouts/bar';
import Handler from './handler';
import Messages, { Imessage } from './messages';
import notification from '../../../../../assets/message.mp3';

function Container() {
  const socket = useSocket();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [messages, setMessages] = useState<Imessage[]>([]);
  const [visibility, setVisibility] = useState('');

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

  useEffect(() => {
    if (visibility === 'hidden') {
      const sound = new Howl({
        src: [notification],
      });

      sound.play();
    }
  }, [messages]);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      setVisibility(document.visibilityState);
    });
  }, []);

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
