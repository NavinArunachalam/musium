import ArtworkCard from './ArtworkCard';
import type { SampleArtwork } from '@/utils/constants';
import { motion } from 'framer-motion';

interface ArtworkGridProps {
  artworks: SampleArtwork[];
  loading?: boolean;
  viewMode?: 'grid' | 'masonry' | 'list';
}

function ArtworkSkeleton() {
  return (
    <div className="museum-card overflow-hidden">
      <div className="skeleton" style={{ aspectRatio: '4/3' }} />
      <div className="p-4 space-y-2">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="skeleton h-3 w-1/4 rounded mt-3" />
      </div>
    </div>
  );
}

export default function ArtworkGrid({ artworks, loading, viewMode = 'grid' }: ArtworkGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <ArtworkSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!artworks.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-museum-surface2 flex items-center justify-center mb-4">
          <span className="text-2xl">🏛️</span>
        </div>
        <h3 className="font-display text-xl text-foreground mb-2">No artworks found</h3>
        <p className="text-sm text-museum-stone">Try adjusting your search or filters</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-3">
        {artworks.map((artwork, i) => (
          <motion.div
            key={artwork.externalId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <ArtworkCard artwork={artwork} variant="horizontal" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (viewMode === 'masonry') {
    return (
      <div className="columns-2 md:columns-3 lg:columns-4 gap-5" style={{ columnGap: '20px' }}>
        {artworks.map((artwork, i) => (
          <motion.div
            key={artwork.externalId}
            className="break-inside-avoid mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <ArtworkCard artwork={artwork} />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {artworks.map((artwork, i) => (
        <motion.div
          key={artwork.externalId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <ArtworkCard artwork={artwork} />
        </motion.div>
      ))}
    </div>
  );
}
