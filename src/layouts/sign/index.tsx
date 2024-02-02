import { ReactNode } from 'react';

export default function Sign({ children }: { children?: ReactNode }) {
  return <div className="sign">{children}</div>;
}
