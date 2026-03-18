import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import { MUSEUMS, MUSEUM_HIGHLIGHT_ARTWORKS, SAMPLE_ARTWORKS } from '@/utils/constants';

export default function MuseumDetailPage() {
  const { museumId } = useParams();
  const museum = MUSEUMS.find(m => m.id === museumId) || MUSEUMS[0];
  
  // Use museum-specific highlight artworks (each museum has unique artworks)
  const displayArtworks = MUSEUM_HIGHLIGHT_ARTWORKS[museum.id] || SAMPLE_ARTWORKS.slice(0, 4);

  return (
    <div className="pb-20">
      {/* Hero — uses museum building photo */}
      <div className="relative h-[55vh] overflow-hidden">
        <SmartImage
          src={museum.buildingImageUrl}
          alt={museum.name}
          aspectRatio="auto"
          priority
          className="w-full h-full"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4 md:px-8">
          <Link to="/museums" className="inline-flex items-center gap-1.5 text-xs text-parchment/70 hover:text-gold mb-4 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Museums
          </Link>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-semibold text-parchment tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {museum.name}
          </motion.h1>
          <p className="text-sm text-parchment/70 mt-2">{museum.city}, {museum.country}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: ImageIcon, label: 'Total Artworks', value: museum.artworks },
            { icon: Calendar, label: 'Founded', value: museum.founded.toString() },
            { icon: MapPin, label: 'Location', value: `${museum.city}, ${museum.country}` },
            { icon: Calendar, label: 'Quiz Questions', value: museum.quizCount.toString() },
          ].map(stat => (
            <div key={stat.label} className="bg-museum-surface2 rounded-xl p-4">
              <stat.icon className="w-4 h-4 text-museum-stone mb-2" />
              <div className="text-[10px] uppercase tracking-widest text-museum-stone mb-1">{stat.label}</div>
              <div className="font-display text-xl font-semibold text-foreground">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="max-w-2xl mb-12">
          <span className="section-kicker">✦ About</span>
          <p className="text-sm text-foreground/80 leading-relaxed">{museum.description}</p>
          <div className="flex gap-1.5 mt-4 flex-wrap">
            {museum.eras.map(era => (
              <span key={era} className="badge-era">{era}</span>
            ))}
          </div>
        </div>

        {/* Highlights — museum-specific artworks */}
        <span className="section-kicker">✦ Highlights</span>
        <h2 className="section-title mb-6">Featured Artworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {displayArtworks.map(a => (
            <ArtworkCard key={a.externalId} artwork={a} />
          ))}
        </div>

        {/* CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="museum-card p-6">
            <span className="section-kicker">✦ Test Your Knowledge</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Art Quiz</h3>
            <p className="text-sm text-museum-stone mb-4">{museum.quizCount} questions about masterpieces from {museum.name}</p>
            <Link to={`/quiz/${museum.id}`} className="btn btn-primary btn-md">Start Quiz →</Link>
          </div>
          <div className="museum-card p-6">
            <span className="section-kicker">✦ Immersive Experience</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Virtual Tour</h3>
            <p className="text-sm text-museum-stone mb-4">Walk through the galleries in an interactive 360° experience</p>
            <Link to={`/tour/${museum.id}`} className="btn btn-outline btn-md">Enter Tour →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
