import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from '@/components/ui/SmartImage';
import type { Museum } from '@/utils/constants';

interface MuseumCardProps {
  museum: Museum;
}

export default function MuseumCard({ museum }: MuseumCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="museum-card overflow-hidden cursor-pointer group"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={() => navigate(`/museums/${museum.id}`)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <SmartImage
          src={museum.buildingImageUrl}
          alt={museum.name}
          aspectRatio="16/9"
          priority
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="text-[10px] bg-ink/60 text-parchment/80 px-2 py-1 rounded-full backdrop-blur-sm">
            Est. {museum.founded}
          </span>
        </div>
        <div className="absolute bottom-3 left-4">
          <h3 className="font-display text-lg font-semibold text-parchment">{museum.name}</h3>
          <p className="text-[11px] text-parchment/70">{museum.city}, {museum.country}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-1.5 mb-3 flex-wrap">
          {museum.eras.map(era => (
            <span key={era} className="badge-era">{era}</span>
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] text-museum-stone mb-3">
          <span>{museum.artworks} artworks</span>
          <span>{museum.quizCount} quiz questions</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/quiz`); }}
            className="btn btn-primary btn-xs flex-1"
          >
            Take Quiz
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/tour/${museum.id}`); }}
            className="btn btn-outline btn-xs flex-1"
          >
            360° Tour
          </button>
          <button className="btn btn-ghost btn-xs flex-1">
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
}
