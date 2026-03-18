import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, ExternalLink, ArrowLeft } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import { SAMPLE_ARTWORKS } from '@/utils/constants';

export default function ArtworkDetailPage() {
  const { source, id } = useParams();
  const artwork = SAMPLE_ARTWORKS.find(a => a.externalId === id) || SAMPLE_ARTWORKS[0];
  const similar = SAMPLE_ARTWORKS.filter(a => a.externalId !== artwork.externalId).slice(0, 4);

  return (
    <div className="pt-20 pb-20">
      {/* Hero background */}
      <div className="relative h-[30vh] overflow-hidden">
        <div className="absolute inset-0" style={{ filter: 'blur(24px)', transform: 'scale(1.1)' }}>
          <SmartImage src={artwork.imageUrl} alt="" aspectRatio="auto" className="w-full h-full" priority showSkeleton={false} />
        </div>
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-32 relative z-10">
        <Link to="/explore" className="inline-flex items-center gap-1.5 text-xs text-parchment/70 hover:text-gold mb-6 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Main image */}
          <div className="lg:col-span-3">
            <motion.div
              className="rounded-xl overflow-hidden shadow-museum-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SmartImage
                src={artwork.imageUrl}
                alt={artwork.title}
                aspectRatio="4/3"
                priority
                className="w-full"
              />
            </motion.div>

            <div className="flex items-center gap-3 mt-4">
              <span className="badge-museum">{artwork.museum}</span>
              <span className="text-xs text-museum-stone">{artwork.date}</span>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                {artwork.title}
              </h1>
              <a href={`/explore?q=${encodeURIComponent(artwork.artist)}`} className="font-display italic text-lg text-gold hover:underline">
                {artwork.artist}
              </a>
            </motion.div>

            {/* AI Description */}
            <div className="mt-8 p-5 rounded-xl border border-teal/20 bg-teal/[0.04]">
              <span className="text-[10px] uppercase tracking-widest text-teal font-medium">✦ AI Art Companion</span>
              <p className="font-display italic text-[15px] leading-relaxed text-foreground/80 mt-3">
                {artwork.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {artwork.tags.map(tag => (
                <a key={tag} href={`/explore?q=${tag}`} className="tag">{tag}</a>
              ))}
            </div>

            {/* Metadata grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Movement', value: artwork.movement },
                { label: 'Date', value: artwork.date },
                { label: 'Museum', value: artwork.museum },
                { label: 'Source', value: artwork.source },
              ].map(item => (
                <div key={item.label}>
                  <span className="text-[10px] uppercase tracking-widest text-museum-stone block mb-1">{item.label}</span>
                  <span className="text-[13px] text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="museum-card p-4 space-y-3">
              <button className="btn btn-gold btn-md w-full gap-2">
                <Heart className="w-4 h-4" /> Save to Favorites
              </button>
              <button className="btn btn-outline btn-md w-full gap-2">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="btn btn-ghost btn-md w-full gap-2">
                <ExternalLink className="w-4 h-4" /> View at Museum
              </button>
            </div>

            <div className="museum-card p-4">
              <span className="text-[10px] uppercase tracking-widest text-museum-stone block mb-3">Statistics</span>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">2.4k</div>
                  <div className="text-[10px] text-museum-stone">Views</div>
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">184</div>
                  <div className="text-[10px] text-museum-stone">Saves</div>
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">4.8</div>
                  <div className="text-[10px] text-museum-stone">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar artworks */}
        <div className="mt-16">
          <span className="section-kicker">✦ You May Also Like</span>
          <h2 className="section-title mb-6">Similar Artworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {similar.map(a => (
              <ArtworkCard key={a.externalId} artwork={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
