import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/program', label: 'Program' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/daily-log', label: 'Daily Log' },
  { to: '/enrollment', label: 'Enrollment' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/comparison', label: 'Compare' },
  { to: '/contact', label: 'Contact' },
  { to: '/calendar', label: 'Calendar' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Wave divider */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ background: '#FDFAF6' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#1E3A5F" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-navy font-display font-bold text-sm">
                FC
              </div>
              <span className="font-display font-semibold text-lg">Cherngtalay Daycare</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-body">
              Play, Grow, Discover – In English, with Warm Touches of Chinese &amp; Thai
            </p>
            <p className="text-white/50 text-xs mt-3 font-body">
              98 Supalai Hills, Phuket, Thailand
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-bold text-white/80 uppercase tracking-widest text-xs mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-white/80 uppercase tracking-widest text-xs mb-4">
              Program Details
            </h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm font-body">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#128197;</span>
                Mon – Fri · 7:30 AM – 5:30 PM
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#128100;</span>
                Ages 2–5 · Open Enrollment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#127758;</span>
                98 Supalai Hills, Phuket
              </li>
              <li className="mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  Get in Touch &#8594;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body">
            &copy; 2026 Cherngtalay Daycare. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Cambridge-Inspired · Play-Based · Multilingual
          </p>
        </div>
      </div>
    </footer>
  );
}
