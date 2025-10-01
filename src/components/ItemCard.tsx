import AvailabilityBadge from './AvailabilityBadge';
import Button from './Button';
import type { GearItem } from '../data/inventory';

interface ItemCardProps {
  item: GearItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface-accent/80 shadow-card transition hover:-translate-y-1 hover:border-brand-light/40">
      <figure className="relative aspect-video overflow-hidden">
        <img
          src={`${item.images[0]}&sat=-20`}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <figcaption className="sr-only">{item.shortDescription}</figcaption>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-accent/80 via-transparent to-transparent" aria-hidden="true" />
      </figure>
      <div className="flex flex-1 flex-col gap-5 px-6 pb-6 pt-6">
        <div className="flex items-center justify-between gap-3">
          <AvailabilityBadge availability={item.availability} />
          <span className="text-xs uppercase tracking-[0.3em] text-text-subtle">{item.category}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-text-muted">{item.shortDescription}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs uppercase text-text-subtle">{item.brand}</span>
          <Button to={`/gear/${item.slug}`} variant="secondary" size="md">
            View details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
