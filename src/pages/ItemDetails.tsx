import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AvailabilityBadge from '../components/AvailabilityBadge';
import Button from '../components/Button';
import { INSTAGRAM_URL } from '../config';
import { inventory } from '../data/inventory';

const ItemDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = inventory.find((gear) => gear.slug === slug);

  if (!item) {
    return (
      <div className="space-y-8 pb-20">
        <Helmet>
          <title>Item Not Found | Vider Rentals</title>
        </Helmet>
        <div className="rounded-3xl border border-dashed border-white/10 bg-surface-accent/60 p-12 text-center text-text-muted">
          <h1 className="text-3xl font-semibold text-white">Gear unavailable</h1>
          <p className="mt-3 text-sm text-text-subtle">
            We couldn’t find the gear you’re looking for. Browse our catalog or contact the team for custom requests.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/gear" variant="secondary">
              Back to catalog
            </Button>
            <Button href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Contact team
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20">
      <Helmet>
        <title>{`${item.name} | Vider Rentals`}</title>
        <meta name="description" content={item.shortDescription} />
      </Helmet>
      <nav className="flex items-center gap-2 text-sm text-text-subtle">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 rounded-full border border-white/5 px-3 py-1 transition hover:border-brand-light/60 hover:text-brand-light"
        >
          <span aria-hidden="true">&#8592;</span>
          Back
        </button>
        <span>/</span>
        <Link to="/gear" className="transition hover:text-brand-light">
          Gear
        </Link>
        <span>/</span>
        <span>{item.name}</span>
      </nav>
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <AvailabilityBadge availability={item.availability} />
          <h1 className="text-4xl font-semibold text-white">{item.name}</h1>
          <p className="text-base text-text-muted">{item.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" size="lg">
            Rent now
          </Button>
        </div>
      </header>
      <section className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {item.images.map((image, index) => (
              <figure key={image} className="relative overflow-hidden rounded-3xl">
                <img
                  src={`${image}&sat=-15`}
                  alt={`${item.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
              </figure>
            ))}
          </div>
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="text-base leading-relaxed text-text-muted">{item.longDescription}</p>
          </article>
        </div>
        <aside className="space-y-6 rounded-3xl border border-white/5 bg-surface-accent/80 p-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Key Specs</h3>
            <ul className="space-y-3 text-sm text-text-subtle">
              {item.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-brand-light/30 bg-brand-light/10 p-4 text-sm text-text-muted">
            <div className="flex items-center justify-between text-white">
              <span className="uppercase tracking-[0.3em] text-xs">Availability</span>
              <span>{item.availability}</span>
            </div>
            <div className="flex items-center justify-between text-text-subtle">
              <span className="uppercase tracking-[0.3em] text-xs">SKU</span>
              <span>{item.id.toUpperCase()}</span>
            </div>
          </div>
          <Button href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" size="lg">
            Rent now on Instagram
          </Button>
        </aside>
      </section>
    </div>
  );
};

export default ItemDetails;
