import { useEffect, useState } from 'react';

interface LoaderProps {
  minimumDuration?: number;
  onFinish?: () => void;
}

const Loader = ({ minimumDuration = 1200, onFinish }: LoaderProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsFading(true);
    }, minimumDuration);

    return () => window.clearTimeout(timer);
  }, [minimumDuration]);

  useEffect(() => {
    if (!isFading) {
      return;
    }
    const fadeTimer = window.setTimeout(() => {
      onFinish?.();
    }, 450);

    return () => window.clearTimeout(fadeTimer);
  }, [isFading, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-surface-muted transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading Vider Rentals"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="text-3xl font-semibold tracking-[0.3em] text-text-muted uppercase">Vider Rentals</div>
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-brand-light/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-light animate-spin" />
        </div>
        <p className="max-w-xs text-sm text-text-subtle">Curating high-performance tools for ambitious productions.</p>
      </div>
    </div>
  );
};

export default Loader;
