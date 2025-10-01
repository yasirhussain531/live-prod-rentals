import { INSTAGRAM_URL } from '../config';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface-muted/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Vider Rentals. Crafted for broadcast professionals.</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/5 px-4 py-2 text-text-muted transition hover:border-brand-light/70 hover:text-brand-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 0V2.25M16.5 3V2.25M3 7.5H2.25M21 7.5H21.75M3 16.5H2.25M21 16.5H21.75M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0z"
            />
          </svg>
          Follow on Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
