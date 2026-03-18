import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllArtworks, SampleArtwork } from '@/utils/constants';

interface SearchBarProps {
  heroStyle?: boolean;
  compact?: boolean;
  onSearch?: (query: string) => void;
  defaultValue?: string;
}

export default function SearchBar({ heroStyle, compact, onSearch, defaultValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<SampleArtwork[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2 && showSuggestions) {
      const all = getAllArtworks();
      const filtered = all.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) || 
        a.artist.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, showSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(query.trim());
    } else {
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSuggestionClick = (artwork: SampleArtwork) => {
    setQuery(artwork.title);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(artwork.title);
    } else {
      navigate(`/explore?q=${encodeURIComponent(artwork.title)}`);
    }
  };

  const clearQuery = () => {
    setQuery('');
    setShowSuggestions(false);
    if (onSearch) onSearch('');
  };

  if (heroStyle) {
    return (
      <div ref={containerRef} className="relative w-full max-w-[600px]">
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-parchment/40" />
          <input
            type="text"
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="Search masterpieces, artists, movements..."
            className="w-full h-14 pl-14 pr-16 font-display italic text-lg text-parchment bg-parchment/8 border-[1.5px] border-parchment/20 rounded-2xl backdrop-blur-sm placeholder:text-parchment/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
          />
          {query && (
            <button
              onClick={clearQuery}
              className="absolute right-14 top-1/2 -translate-y-1/2 text-parchment/40 hover:text-parchment transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-ink text-parchment flex items-center justify-center hover:bg-gold transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-museum-bg/95 backdrop-blur-md border border-parchment/20 rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {suggestions.map((artwork) => (
              <button
                key={artwork.externalId}
                onClick={() => handleSuggestionClick(artwork)}
                className="w-full px-5 py-3 flex items-center gap-4 hover:bg-gold/10 transition-colors text-left border-b border-parchment/5 last:border-0"
              >
                <img src={artwork.imageUrl} alt="" className="w-10 h-10 rounded object-cover flex-shrink-0" />
                <div>
                  <div className="text-parchment text-sm font-medium line-clamp-1">{artwork.title}</div>
                  <div className="text-gold/60 text-xs">{artwork.artist}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-museum-stone/50" />
        <input
          type="text"
          value={query}
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder="Search artworks..."
          className={`museum-input pl-10 pr-10 w-full ${compact ? 'h-9 text-xs' : ''}`}
        />
        {query && (
          <button
            onClick={clearQuery}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-museum-stone/40 hover:text-gold transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-museum-bg border border-museum-linen rounded-lg shadow-xl z-50 overflow-hidden divide-y divide-museum-linen">
          {suggestions.map((artwork) => (
            <button
              key={artwork.externalId}
              onClick={() => handleSuggestionClick(artwork)}
              className="w-full px-3 py-2 flex items-center gap-3 hover:bg-museum-surface2 transition-colors text-left"
            >
              <img src={artwork.imageUrl} alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" />
              <div>
                <div className="text-foreground text-xs font-medium line-clamp-1">{artwork.title}</div>
                <div className="text-museum-stone text-[10px]">{artwork.artist}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
