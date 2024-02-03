import { ReactNode } from 'react';

export default function Submit({ children, loading }: { loading: boolean; children: ReactNode }) {
  return (
    <div className="w-full">
      <button
        disabled={loading}
        type="submit"
        className="w-full py-4 h-12 text-white font-bold text-xs text-center flex items-center justify-center rounded-sm bg-indigo-600 hover:bg-indigo-500">
        {loading ? <div className="dot-flashing" /> : children}
      </button>
    </div>
  );
}
