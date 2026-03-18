import { useNavigate } from 'react-router-dom';
import { Heart, Plus, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import SmartImage from '@/components/ui/SmartImage';
import type { SampleArtwork } from '@/utils/constants';

interface ArtworkCardProps {
  artwork: SampleArtwork;
  variant?: 'default' | 'compact' | 'featured' | 'horizontal';
  className?: string;
}

export default function ArtworkCard({ artwork, variant = 'default', className = '' }: ArtworkCardProps) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/artwork/${artwork.source}/${artwork.externalId}`);

  if (variant === 'compact') {
    return (
      <div
        onClick={handleClick}
        className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-museum-surface2 ${className}`}
      >
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
          <SmartImage src={artwork.imageUrl} alt={artwork.title} aspectRatio="1/1" className="w-full h-full" displayMode={artwork.displayMode} />
        </div>
        <div className="min-w-0 flex flex-col justify-center">
          <h4 className="font-display text-[13px] font-semibold truncate text-foreground hover:text-gold transition-colors">{artwork.title}</h4>
          <p className="font-display text-[11px] italic text-museum-stone">{artwork.artist}</p>
          <p className="text-[10px] text-museum-stone/70">{artwork.museum} · {artwork.date}</p>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        onClick={handleClick}
        className={`relative overflow-hidden rounded-xl cursor-pointer group ${className}`}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <SmartImage
          src={artwork.imageUrl}
          alt={artwork.title}
          aspectRatio="16/9"
          priority
          className="w-full transition-transform duration-500 group-hover:scale-105"
          displayMode={artwork.displayMode}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="badge-era text-[9px]">✦ Masterpiece of the Day</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="font-display text-xl font-semibold text-parchment">{artwork.title}</h3>
          <p className="font-display text-sm italic text-parchment/70 mt-1">{artwork.artist}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div
        onClick={handleClick}
        className={`flex gap-4 p-3 museum-card cursor-pointer hover:shadow-museum-md hover:border-gold/40 transition-all duration-200 ${className}`}
      >
        <div className="w-36 h-[108px] flex-shrink-0 rounded-lg overflow-hidden">
          <SmartImage src={artwork.imageUrl} alt={artwork.title} aspectRatio="4/3" className="w-full h-full" displayMode={artwork.displayMode} />
        </div>
        <div className="min-w-0 flex flex-col justify-between py-1">
          <div>
            <h4 className="font-display text-[15px] font-semibold line-clamp-2 text-foreground hover:text-gold transition-colors">{artwork.title}</h4>
            <p className="font-display text-[13px] italic text-museum-stone mt-0.5">{artwork.artist}</p>
            <p className="text-[12px] text-museum-stone/70 mt-1">{artwork.museum} · {artwork.date}</p>
          </div>
          <p className="text-[12px] text-museum-stone line-clamp-2">{artwork.description}</p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <motion.div
      onClick={handleClick}
      className={`museum-card overflow-hidden cursor-pointer group flex flex-col h-full ${className}`}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(28,16,8,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '4/3' }}>
        <SmartImage
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full transition-transform duration-400 group-hover:scale-[1.04]"
          displayMode={artwork.displayMode}
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <span className="absolute bottom-2 left-2 text-[9px] text-parchment/80 uppercase tracking-wide font-body">
          {artwork.museum}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); }}
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all text-[10px] bg-ink/80 text-parchment px-2 py-1 rounded-md flex items-center gap-1"
        >
          <Eye className="w-3 h-3" /> Quick View
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-display text-[15px] font-semibold leading-tight line-clamp-2 text-foreground mb-1">
            {artwork.title}
          </h3>
          <p className="text-xs italic font-display text-museum-stone truncate mb-3">{artwork.artist}</p>
        </div>
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-museum-linen/30">
          <span className="text-[10px] font-medium text-museum-stone/70 tracking-wider font-body">{artwork.date}</span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => e.stopPropagation()}
              className="w-6 h-6 flex items-center justify-center rounded-md border border-museum-linen text-museum-stone hover:border-gold hover:text-gold transition-colors"
            >
              <Heart className="w-3 h-3" />
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="w-6 h-6 flex items-center justify-center rounded-md border border-museum-linen text-museum-stone hover:border-gold hover:text-gold transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
