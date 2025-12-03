import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h2 className="text-6xl font-mono font-bold text-primary mb-4">404</h2>
      <p className="text-xl mb-8 font-mono text-secondary">
        Error: Object not detected in the current frame.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-surface border border-slate-700 hover:border-primary rounded transition-colors text-sm font-mono"
      >
        return_home()
      </Link>
    </div>
  );
}
