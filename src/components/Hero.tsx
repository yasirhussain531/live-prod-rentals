import Button from './Button';
import { INSTAGRAM_URL } from '../config';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/5 bg-surface-accent px-6 py-20 shadow-card sm:px-12">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_rgba(15,23,42,0.95))]" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-brand-light/80">Vider Rentals</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Premium video systems engineered for live storytelling
        </h1>
        <p className="text-lg text-text-muted">
          We equip production teams with trusted switchers, cameras, and broadcast infrastructure, delivered with technical
          precision and on-call expertise.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/gear" size="lg">
            Browse Gear
          </Button>
          <Button href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
            Talk to our team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
