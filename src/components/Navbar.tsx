import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { INSTAGRAM_URL } from '../config';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
    isActive ? 'text-brand-light' : 'text-text-muted hover:text-text-default'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-surface-muted/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.4em]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/90 text-lg font-bold text-white shadow-glow">
            VR
          </span>
          <span className="hidden text-text-default sm:inline">Vider Rentals</span>
        </Link>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-default transition hover:border-brand-light/60 hover:text-brand-light sm:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden items-center gap-10 sm:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/gear" className={navLinkClass}>
            Gear
          </NavLink>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-wide text-text-muted transition-colors hover:text-brand-light"
          >
            Contact
          </a>
        </nav>
      </div>
      {isOpen && (
        <nav className="space-y-1 border-t border-white/5 bg-surface-muted/95 px-6 py-4 sm:hidden">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/gear" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Gear
          </NavLink>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium uppercase tracking-wide text-text-muted transition-colors hover:text-brand-light"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
