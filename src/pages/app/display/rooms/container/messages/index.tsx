/* eslint-disable jsx-a11y/iframe-has-title */
import { Fragment, useEffect, useRef } from 'react';
import Body from '../../../../../../components/Body';

export interface Imessage {
  id: string;
  hour: string;
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
      {messages.map(({ id, hour, by, body }) => (
        <Fragment key={id}>
          <Body body={body} by={by} hour={hour} />
          <div style={{ float: 'left', clear: 'both' }} ref={scrollbar} />
        </Fragment>
      ))}
    </div>
  );
}
