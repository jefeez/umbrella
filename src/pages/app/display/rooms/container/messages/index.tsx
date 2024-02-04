/* eslint-disable jsx-a11y/iframe-has-title */
import { Fragment, useEffect, useRef } from 'react';
import Body from '../../../../../../components/Body';
import Emit from '../../../../../../components/Emit';

export interface Imessage {
  id: string;
  hour: string;
  into: boolean;
  exit: boolean;
  by: {
    avatar: string;
    username: string;
  };
  body: string;
}

export default function Messages({ messages }: { messages: Imessage[] }) {
  const scrollbar = useRef<HTMLDivElement | null>(null);
  const scrollbarToBottom = () => {
    if (scrollbar.current) {
      scrollbar.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollbar.current) {
      scrollbarToBottom();
    }
  }, [messages]);

  return (
    <div className="messages">
      {messages.map(({ into, exit, id, hour, by, body }) => (
        <Fragment key={id}>
          {into && (
            <Emit
              msg="CAME INTO THE ROOM"
              color="bg-indigo-500"
              by={{
                avatar: by.avatar,
                username: by.username,
              }}
            />
          )}
          {exit && (
            <Emit
              msg="LEAVE THE ROOM"
              color="bg-red-500"
              by={{
                avatar: by.avatar,
                username: by.username,
              }}
            />
          )}
          {!into && !exit && <Body body={body} by={by} hour={hour} />}
          <div style={{ float: 'left', clear: 'both' }} ref={scrollbar} />
        </Fragment>
      ))}
    </div>
  );
}
