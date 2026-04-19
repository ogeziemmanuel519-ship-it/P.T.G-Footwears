import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a' }} className="py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#ffffff' }}>
              PTG
            </span>
            <span className="text-xs font-medium tracking-[3px]" style={{ color: '#ffffff' }}>
              FOOTWEAR
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm" style={{ color: '#c9a96e' }}>
            Prosperity Through God Footwears
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mt-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Shop' },
              { path: '/contact', label: 'Contact' },
              { path: '/admin', label: 'Admin' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs tracking-[1px] transition-opacity duration-200 hover:opacity-70"
                style={{ color: '#999999' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs mt-4" style={{ color: '#666666' }}>
            &copy; 2026 PTG Footwear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
