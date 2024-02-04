import { ReactNode } from 'react';

function Name({ children }: { children: ReactNode }) {
  return <div className="flex items-center text-xs font-bold text-center">{children}</div>;
}

export default Name;
