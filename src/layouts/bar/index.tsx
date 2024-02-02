import { ReactNode } from 'react';

export default function Bar({ children }: { children?: ReactNode }) {
  return <div className="bar">{children}</div>;
}
