import { useState } from 'react';
import { Grid3X3, LayoutGrid, Shuffle } from 'lucide-react';
import ArtworkGrid from '@/components/artwork/ArtworkGrid';
import { GALLERY_ARTWORKS } from '@/utils/constants';

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [artworks, setArtworks] = useState(GALLERY_ARTWORKS);

  const shuffle = () => {
    setArtworks(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-kicker">✦ Gallery</span>
            <h1 className="section-title">Curated Gallery</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={shuffle} className="btn btn-outline btn-sm gap-1.5">
              <Shuffle className="w-3.5 h-3.5" /> Surprise Me
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`btn-icon ${viewMode === 'grid' ? 'border-gold text-gold' : ''}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`btn-icon ${viewMode === 'masonry' ? 'border-gold text-gold' : ''}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
        <ArtworkGrid artworks={artworks} viewMode={viewMode} />
      </div>
    </div>
  );
}
