import { ReactNode } from 'react';

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="wrapper">{children}</div>;
}
