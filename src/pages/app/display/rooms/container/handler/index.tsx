import { useState } from 'react';

export default function Handler({ onBody }: { onBody: (body: string) => void }) {
  const [body, setBody] = useState('');

  return (
    <div className="handler">
      <input
        type="text"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            setBody('');
            onBody(body);
          }
        }}
        value={body}
        onChange={e => {
          setBody(e.target.value);
        }}
        className="w-full h-full bg-dark-800 border-none outline-none px-4 focus:ring-0"
      />
    </div>
  );
}
