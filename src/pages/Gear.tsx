import { Helmet } from 'react-helmet-async';
import GearGrid from '../components/GearGrid';
import { inventory } from '../data/inventory';

const Gear = () => {
  return (
    <div className="space-y-10 pb-20">
      <Helmet>
        <title>Gear Catalog | Vider Rentals</title>
        <meta
          name="description"
          content="Browse the complete Vider Rentals inventory, featuring broadcast switchers, cameras, support gear, and full OB packages."
        />
      </Helmet>
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-light/80">Catalog</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Gear built for live production</h1>
        <p className="max-w-2xl text-base text-text-muted">
          Explore our curated selection of broadcast essentials. Each piece undergoes rigorous QC and is supported by our rental
          engineers for seamless deployment on set or on location.
        </p>
      </header>
      <GearGrid items={inventory} />
    </div>
  );
};

export default Gear;
