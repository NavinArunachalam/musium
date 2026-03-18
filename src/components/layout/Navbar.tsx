import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon, User, LogOut } from 'lucide-react';
import SearchBar from '@/components/search/SearchBar';
import { useAuth } from '@/contexts/AuthContext';

const NAV_LINKS = [
  { to: '/explore', label: 'Explore' },
  { to: '/museums', label: 'Museums' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/collections', label: 'Collections' },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentQuery = searchParams.get('q') || '';

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const isHeroPage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 md:px-8 transition-all duration-200 ${
          scrolled || !isHeroPage
            ? 'bg-museum-bg/95 backdrop-blur-md shadow-museum-sm border-b border-museum-linen'
            : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 mr-8">
          <div className="w-8 h-8 bg-ink rounded-md flex items-center justify-center">
            <span className="text-parchment text-xs font-display font-semibold">VM</span>
          </div>
          <span className="font-display text-lg hidden sm:inline">
            <span className={scrolled || !isHeroPage ? 'text-foreground' : 'text-parchment'}>Virtual</span>{' '}
            <span className="text-gold">Museum</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center h-16">
          {NAV_LINKS.map(link => {
            const active = location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`h-16 flex items-center px-4 text-xs font-medium uppercase tracking-widest transition-colors ${
                  active
                    ? 'text-gold border-b-2 border-gold'
                    : `${scrolled || !isHeroPage ? 'text-foreground' : 'text-parchment/80'} hover:text-gold`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex-1" />

        <div className="hidden md:block mr-3 w-[240px]">
          <SearchBar compact defaultValue={currentQuery} />
        </div>

        <button onClick={toggleTheme} className="btn-icon mr-2">
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-museum-surface2 rounded-full border border-museum-linen">
              <User className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-foreground">{user.username}</span>
            </div>
            <button 
              onClick={logout}
              className="btn-icon text-museum-stone hover:text-destructive transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link to="/login" className="hidden sm:flex btn btn-primary btn-sm">
            Sign In
          </Link>
        )}

        <button
          className="lg:hidden ml-2 btn-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-museum-bg/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col p-6 space-y-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-sm font-medium uppercase tracking-wider text-foreground hover:text-gold hover:bg-museum-surface2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <SearchBar defaultValue={currentQuery} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
