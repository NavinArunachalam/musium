import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import SearchBar from '@/components/search/SearchBar';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import MuseumCard from '@/components/museum/MuseumCard';
import SmartImage from '@/components/ui/SmartImage';
import { FEATURED_ARTWORK, TRENDING_ARTWORKS, MUSEUMS, ERA_IMAGES } from '@/utils/constants';

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCounter({ target, label, format }: { target: number; label: string; format?: (n: number) => string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref}>
      <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-2">
        {format ? format(count) : count}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-parchment/50 font-body">
        {label}
      </div>
    </div>
  );
}

const ERAS = [
  { name: 'Renaissance', years: '1400–1600', query: 'Renaissance' },
  { name: 'Baroque', years: '1600–1750', query: 'Baroque' },
  { name: 'Impressionism', years: '1860–1900', query: 'Impressionism' },
  { name: 'Modern Art', years: '1900–1970', query: 'Modern' },
  { name: 'Contemporary', years: '1970–Present', query: 'Contemporary' },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO — uses FEATURED_ARTWORK (Birth of Venus, unique to this section) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={FEATURED_ARTWORK.imageUrl}
            alt={FEATURED_ARTWORK.title}
            aspectRatio="auto"
            priority
            className="w-full h-full animate-ken-burns"
            objectFit="cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0" style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}>
            <SmartImage
              src={FEATURED_ARTWORK.imageUrl}
              alt=""
              aspectRatio="auto"
              priority
              className="w-full h-full opacity-60"
              objectFit="cover"
              showSkeleton={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/82 via-ink/60 to-ink/55" />
        </div>

        <div className="relative z-10 text-center max-w-[900px] px-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <hr className="w-12 border-gold/40" />
            <span className="text-[10px] uppercase tracking-widest text-gold font-body">
              ✦ World's Greatest Collections
            </span>
            <hr className="w-12 border-gold/40" />
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-parchment tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Explore Five Centuries of{' '}
            <em className="text-gold">Human Creativity</em>
          </motion.h1>

          <motion.p
            className="font-display text-lg md:text-xl italic text-parchment/70 max-w-[600px] mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Discover masterpieces from six world-class museums, guided by AI
          </motion.p>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <SearchBar heroStyle />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            {MUSEUMS.map(m => (
              <a
                key={m.id}
                href={`/museums/${m.id}`}
                className="px-3 py-1.5 rounded-full text-xs text-parchment/70 bg-parchment/8 border border-parchment/15 hover:bg-gold/20 hover:border-gold/40 hover:text-parchment transition-all"
              >
                {m.name}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-[10px] uppercase tracking-widest text-parchment/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-parchment/30 to-transparent" />
        </motion.div>
      </section>

      {/* FEATURED ARTWORK — Birth of Venus */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <span className="section-kicker">✦ Masterpiece of the Day</span>
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title">Today's Featured Work</h2>
          <a href="/explore" className="text-xs text-gold hover:underline">See All →</a>
        </div>
        <ArtworkCard artwork={FEATURED_ARTWORK} variant="featured" />
        <p className="font-display italic text-sm text-museum-stone mt-4 max-w-2xl">
          {FEATURED_ARTWORK.description}
        </p>
      </section>

      <div className="divider-gold container mx-auto px-4" />

      {/* TRENDING — 8 completely different artworks (Kiss, Great Wave, Creation of Adam, etc.) */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <span className="section-kicker">✦ Trending Now</span>
        <h2 className="section-title mb-6">Most Explored This Week</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {TRENDING_ARTWORKS.map(artwork => (
            <div key={artwork.externalId} className="w-[200px] flex-shrink-0">
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>
      </section>

      <div className="divider-gold container mx-auto px-4" />

      {/* MUSEUMS — each uses its own building photo */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <span className="section-kicker">✦ Partner Institutions</span>
        <h2 className="section-title mb-8">World-Class Museums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUSEUMS.map(museum => (
            <MuseumCard key={museum.id} museum={museum} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCounter target={542108} label="Artworks Catalogued" format={(n) => n.toLocaleString()} />
            <StatCounter target={6} label="Global Museums" />
            <StatCounter target={50} label="Quiz Categories" />
            <StatCounter target={12000} label="Active Collectors" format={(n) => n.toLocaleString()} />
          </div>
        </div>
      </section>

      {/* ART BY ERA — each era has its own unique image */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <span className="section-kicker">✦ Journey Through Time</span>
        <h2 className="section-title mb-8">Art by Era</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {ERAS.map((era) => (
            <motion.a
              key={era.name}
              href={`/explore?movement=${era.query}`}
              className="relative w-[220px] flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '3/2' }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <SmartImage
                src={ERA_IMAGES[era.query]}
                alt={era.name}
                aspectRatio="3/2"
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display text-lg font-semibold text-parchment">{era.name}</h3>
                <p className="text-[11px] text-parchment/60">{era.years}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-gold">Explore →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
