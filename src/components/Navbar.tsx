import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/shop', label: 'SHOP' },
    { path: '/contact', label: 'CONTACT' },
    { path: '/admin', label: 'ADMIN' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b" style={{ borderColor: '#e0e0d8' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1">
            <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
              PTG
            </span>
            <span className="text-xs font-medium tracking-[3px]" style={{ color: '#1a1a1a' }}>
              FOOTWEAR
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs font-medium tracking-[1.5px] transition-opacity duration-200 hover:opacity-70"
                style={{
                  color: link.path === '/admin' ? '#c9a96e' : '#1a1a1a',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} color="#1a1a1a" /> : <Menu size={24} color="#1a1a1a" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium tracking-[2px] transition-opacity duration-200 hover:opacity-70"
              style={{
                color: link.path === '/admin' ? '#c9a96e' : '#1a1a1a',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
