import ItemCard from './ItemCard';
import type { GearItem } from '../data/inventory';

interface GearGridProps {
  items: GearItem[];
}

const GearGrid = ({ items }: GearGridProps) => {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-surface-accent/60 p-12 text-center text-text-muted">
        <h3 className="text-xl font-semibold text-white">No gear available right now</h3>
        <p className="mt-3 text-sm text-text-subtle">
          We are curating new inventory for the next production season. Check back soon or reach out directly.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GearGrid;
