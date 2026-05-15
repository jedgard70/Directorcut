import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-on-background">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="text-on-surface-variant mb-6">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-primary text-on-primary rounded hover:bg-primary/90 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
