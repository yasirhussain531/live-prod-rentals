import { useEffect, useMemo, useRef, useState } from 'react';
import Button from './Button';
import type { GearItem } from '../data/inventory';

interface ItemCarouselProps {
  items: GearItem[];
}

const ItemCarousel = ({ items }: ItemCarouselProps) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeItem = useMemo(() => items[index], [items, index]);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        next();
      }
      if (event.key === 'ArrowLeft') {
        prev();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-accent via-surface-muted to-surface-accent"
      aria-label="Featured gear carousel"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchMove={(event) => {
        if (touchStartX.current === null) return;
        const delta = event.touches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 60) {
          if (delta < 0) {
            next();
          } else {
            prev();
          }
          touchStartX.current = null;
        }
      }}
      onTouchEnd={() => {
        touchStartX.current = null;
      }}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <figure className="relative h-full min-h-[280px] overflow-hidden">
          <img
            key={activeItem.images[0]}
            src={`${activeItem.images[0]}&sat=-15`}
            alt={activeItem.name}
            className="h-full w-full object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-accent/90 via-surface-accent/20 to-transparent" aria-hidden="true" />
        </figure>
        <div className="flex flex-col justify-between gap-8 px-8 py-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-light/80">Featured Gear</p>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">{activeItem.name}</h3>
            <p className="max-w-xl text-base text-text-muted">{activeItem.longDescription}</p>
            <ul className="grid gap-3 text-sm text-text-subtle sm:grid-cols-2">
              {activeItem.specs.slice(0, 4).map((spec) => (
                <li key={spec} className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" to={`/gear/${activeItem.slug}`}>
              View Gear
            </Button>
            <Button variant="secondary" size="lg" to="/gear">
              Browse Catalog
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
        {items.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            className={`h-2 rounded-full transition-all ${
              itemIndex === index ? 'w-8 bg-brand-light' : 'w-3 bg-white/30 hover:bg-white/60'
            }`}
            onClick={() => setIndex(itemIndex)}
            aria-label={`View ${item.name}`}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          type="button"
          className="m-4 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-accent/80 text-white transition hover:border-brand-light/60 hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted md:flex"
          onClick={prev}
          aria-label="Previous featured item"
        >
          <span aria-hidden="true">&#8592;</span>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          type="button"
          className="m-4 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-accent/80 text-white transition hover:border-brand-light/60 hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted md:flex"
          onClick={next}
          aria-label="Next featured item"
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default ItemCarousel;
