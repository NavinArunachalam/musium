import { Link } from 'react-router-dom';
import { MUSEUMS } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/70">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-md flex items-center justify-center">
                <span className="text-ink text-xs font-display font-semibold">VM</span>
              </div>
              <span className="font-display text-lg text-parchment">Virtual <span className="text-gold">Museum</span></span>
            </div>
            <p className="text-xs leading-relaxed text-parchment/50">
              Discover 500,000+ artworks from the world's greatest museums. AI-powered companion, quizzes, and immersive virtual tours.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-widest text-gold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {['Artworks', 'Gallery', 'Collections'].map(item => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-xs hover:text-gold transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-widest text-gold mb-4">Museums</h4>
            <div className="flex flex-col gap-2">
              {MUSEUMS.slice(0, 4).map(m => (
                <Link key={m.id} to={`/museums/${m.id}`} className="text-xs hover:text-gold transition-colors">
                  {m.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-widest text-gold mb-4">Features</h4>
            <div className="flex flex-col gap-2">
              {['Quizzes', '360° Tours', 'AI ArtBot'].map(item => (
                <span key={item} className="text-xs text-parchment/40">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-parchment/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-parchment/30">© 2026 Virtual Museum Explorer. All rights reserved.</p>
          <p className="text-[10px] text-parchment/30">Curating 542,108 masterpieces across 6 global institutions</p>
        </div>
      </div>
    </footer>
  );
}
