import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function FooterForm({
  text,
  to,
  children,
}: {
  text: string;
  to: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full flex flex-col py-2">
      <div className="w-full text-xs font-bold pl-5">
        {text}&nbsp;&nbsp;
        <Link to={to} className="text-indigo-500 hover:text-indigo-400">
          {children}
        </Link>
      </div>
    </div>
  );
}
