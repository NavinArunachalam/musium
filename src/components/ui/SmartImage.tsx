import { useState, useEffect, useRef, useMemo } from 'react';
import { FAMOUS_IMAGES } from '@/utils/constants';
import { generateGradient } from '@/utils/gradientGenerator';

interface SmartImageProps {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  artworkId?: string;
  tags?: string[];
  aspectRatio?: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
  displayMode?: 'cover' | 'contain-blur';
  showSkeleton?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

function getFamousImageUrl(alt: string): string | null {
  const lower = alt.trim().toLowerCase();
  // Only override if the alt text exactly matches one of our famous image keys
  return FAMOUS_IMAGES[lower] || null;
}

export default function SmartImage({
  src,
  fallbackSrc,
  alt,
  artworkId,
  tags = [],
  aspectRatio = '4/3',
  className = '',
  objectFit = 'cover',
  displayMode = 'cover',
  showSkeleton = true,
  priority = false,
  onClick,
}: SmartImageProps) {
  // 1. Determine Initial Source: Prioritize passed src, then famous image map
  const famousUrl = useMemo(() => getFamousImageUrl(alt), [alt]);
  const initialSrc = src || famousUrl || '';

  const [currentSrc, setCurrentSrc] = useState(initialSrc);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(priority);
  const [errorCount, setErrorCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const newSrc = src || famousUrl || '';
    setCurrentSrc(newSrc);
    setLoaded(false);
    setFailed(false);
    setErrorCount(0);
  }, [src, famousUrl]);

  const handleError = () => {
    const next = errorCount + 1;
    setErrorCount(next);

    // Fallback Pipeline:
    // 1. Try famousUrl if src was used and failed
    // 2. Try explicit fallbackSrc
    // 3. Try curated Unsplash art images
    // 4. Give up and show fallback text

    if (next === 1 && src && famousUrl && src !== famousUrl) {
      setCurrentSrc(famousUrl);
    } else if ((next === 1 || next === 2) && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else if (next <= 3) {
      const fallbacks = [
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop', // classic art
        'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1200&auto=format&fit=crop', // gallery
        'https://images.unsplash.com/photo-1576135038254-35bace5d8ae5?q=80&w=1200&auto=format&fit=crop', // statue
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop', // abstract
      ];
      const index = Math.abs((artworkId || alt).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % fallbacks.length;
      const selectedFallback = fallbacks[index];
      
      if (currentSrc === selectedFallback) {
        setFailed(true);
      } else {
        setCurrentSrc(selectedFallback);
      }
    } else {
      setFailed(true);
    }
  };

  const gradient = useMemo(
    () => generateGradient(artworkId || alt, alt),
    [artworkId, alt]
  );

  if (failed) {
    return (
      <div
        ref={containerRef}
        className={`relative flex flex-col items-center justify-center overflow-hidden border border-museum-linen/20 ${className}`}
        style={{ aspectRatio, background: gradient.background, cursor: onClick ? 'pointer' : undefined }}
        onClick={onClick}
      >
        <div className="h-px w-12 bg-gold/40 mb-4" />
        <p className="font-display italic text-parchment/90 text-[13px] text-center px-8 leading-relaxed max-w-[200px]">
          {alt}
        </p>
        <div className="h-px w-12 bg-gold/40 mt-4" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio, cursor: onClick ? 'pointer' : undefined }}
      onClick={onClick}
    >
      {showSkeleton && !loaded && (
        <div className="absolute inset-0 skeleton" />
      )}
      {visible && currentSrc && (
        <>
          {displayMode === 'contain-blur' && (
            <div
              className="absolute inset-0 scale-110 blur-2xl opacity-40 contrast-125 select-none"
              style={{
                backgroundImage: `url(${currentSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          )}
          <img
            src={currentSrc}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            className={`relative z-10 w-full h-full transition-all duration-700 ${
              displayMode === 'contain-blur' ? 'object-contain p-2' : (objectFit === 'cover' ? 'object-cover' : 'object-contain')
            } ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
            style={{ outline: '1px solid rgba(184,134,11,0.1)', outlineOffset: '-1px' }}
          />
        </>
      )}
    </div>
  );
}
