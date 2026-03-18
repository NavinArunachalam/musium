import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  heroStyle?: boolean;
  compact?: boolean;
  onSearch?: (query: string) => void;
  defaultValue?: string;
}

export default function SearchBar({ heroStyle, compact, onSearch, defaultValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearch) {
      onSearch(query.trim());
    } else {
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (heroStyle) {
    return (
      <form onSubmit={handleSubmit} className="relative w-full max-w-[600px]">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-parchment/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search masterpieces, artists, movements..."
          className="w-full h-14 pl-14 pr-16 font-display italic text-lg text-parchment bg-parchment/8 border-[1.5px] border-parchment/20 rounded-2xl backdrop-blur-sm placeholder:text-parchment/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-ink text-parchment flex items-center justify-center hover:bg-gold transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-museum-stone/50" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search artworks..."
        className={`museum-input pl-10 ${compact ? 'h-9 text-xs' : ''}`}
      />
    </form>
  );
}
