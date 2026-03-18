import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid3X3, List, LayoutGrid, X } from 'lucide-react';
import SearchBar from '@/components/search/SearchBar';
import ArtworkGrid from '@/components/artwork/ArtworkGrid';
import { SAMPLE_ARTWORKS, MUSEUMS } from '@/utils/constants';

type ViewMode = 'grid' | 'masonry' | 'list';

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const query = searchParams.get('q') || '';
  const museumFilter = searchParams.get('museum') || '';
  const movementFilter = searchParams.get('movement') || '';

  const filteredArtworks = useMemo(() => {
    return SAMPLE_ARTWORKS.filter(a => {
      if (query && !a.title.toLowerCase().includes(query.toLowerCase()) && !a.artist.toLowerCase().includes(query.toLowerCase())) return false;
      if (museumFilter && a.museum.toLowerCase() !== museumFilter.toLowerCase()) return false;
      if (movementFilter && a.movement.toLowerCase() !== movementFilter.toLowerCase()) return false;
      return true;
    });
  }, [query, museumFilter, movementFilter]);

  const activeFilters = [
    query && { key: 'q', label: `"${query}"` },
    museumFilter && { key: 'museum', label: museumFilter },
    movementFilter && { key: 'movement', label: movementFilter },
  ].filter(Boolean) as { key: string; label: string }[];

  const removeFilter = (key: string) => {
    const next = new URLSearchParams(searchParams);
    next.delete(key);
    setSearchParams(next);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <span className="section-kicker">✦ Discover</span>
          <h1 className="section-title mb-6">Explore the Collection</h1>
          <div className="max-w-xl">
            <SearchBar
              defaultValue={query}
              onSearch={(q) => {
                const next = new URLSearchParams(searchParams);
                next.set('q', q);
                next.set('page', '1');
                setSearchParams(next);
              }}
            />
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilters.map(f => (
              <button
                key={f.key}
                onClick={() => removeFilter(f.key)}
                className="tag tag-active flex items-center gap-1"
              >
                {f.label}
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={() => setSearchParams(new URLSearchParams())}
              className="text-xs text-museum-stone hover:text-gold transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-museum-stone">
            {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
          </p>
          <div className="flex gap-1">
            {([
              { mode: 'grid' as ViewMode, icon: Grid3X3 },
              { mode: 'masonry' as ViewMode, icon: LayoutGrid },
              { mode: 'list' as ViewMode, icon: List },
            ]).map(({ mode, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`btn-icon ${viewMode === mode ? 'border-gold text-gold' : ''}`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <ArtworkGrid artworks={filteredArtworks} viewMode={viewMode} />
      </div>
    </div>
  );
}
