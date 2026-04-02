import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Program' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/daily-log', label: 'Daily Log' },
  { to: '/enrollment', label: 'Enroll' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
  { to: '/calendar', label: 'Calendar' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-navy font-display font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            FC
          </div>
          <div>
            <span
              className={`font-display font-semibold text-base leading-tight block transition-colors duration-300 ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Cherngtalay Daycare
            </span>
            <span
              className={`text-xs font-body leading-none transition-colors duration-300 ${
                scrolled ? 'text-sage' : 'text-white/70'
              }`}
            >
              Phuket · Ages 2–5
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold font-body transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-600'
                    : scrolled
                    ? 'text-navy/80 hover:text-navy hover:bg-navy/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/enrollment"
            className="ml-3 px-5 py-2 bg-amber-400 text-navy font-bold rounded-full text-sm hover:bg-amber-300 transition-all shadow-sm hover:shadow-md font-body"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${open ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white/98 backdrop-blur-sm border-t border-navy/10 shadow-lg`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-semibold font-body transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-400/15 text-amber-700'
                    : 'text-navy/80 hover:text-navy hover:bg-navy/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/enrollment"
            className="mt-2 px-5 py-3 bg-amber-400 text-navy font-bold rounded-full text-sm text-center hover:bg-amber-300 transition-all font-body"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
