import { GearAvailability } from '../data/inventory';

interface AvailabilityBadgeProps {
  availability: GearAvailability;
}

const badgeStyles: Record<GearAvailability, string> = {
  'In Stock': 'bg-emerald-500/10 text-emerald-300 border-emerald-400/40',
  'On Request': 'bg-amber-500/10 text-amber-300 border-amber-400/40'
};

const AvailabilityBadge = ({ availability }: AvailabilityBadgeProps) => {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badgeStyles[availability]}`}>
      <span
        className={`h-2 w-2 rounded-full ${availability === 'In Stock' ? 'bg-emerald-400' : 'bg-amber-300'}`}
        aria-hidden="true"
      />
      {availability}
    </span>
  );
};

export default AvailabilityBadge;
