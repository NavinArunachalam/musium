import MuseumCard from '@/components/museum/MuseumCard';
import { MUSEUMS } from '@/utils/constants';

export default function MuseumsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <span className="section-kicker">✦ Institutions</span>
        <h1 className="section-title mb-2">World-Class Museums</h1>
        <p className="text-sm text-museum-stone mb-10 max-w-lg">
          Explore collections from six of the world's most renowned cultural institutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUSEUMS.map(museum => (
            <MuseumCard key={museum.id} museum={museum} />
          ))}
        </div>
      </div>
    </div>
  );
}
