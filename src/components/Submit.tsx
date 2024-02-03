import { ReactNode } from 'react';

export default function Submit({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <button
        type="submit"
        className="w-full py-4 text-white font-bold text-xs rounded-sm bg-indigo-600 hover:bg-indigo-500">
        {children}
      </button>
    </div>
  );
}
