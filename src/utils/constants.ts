// ═══════════════════════════════════════════════════════════
// MASTER IMAGE REGISTRY — Every URL used ONCE across the app
// ═══════════════════════════════════════════════════════════

// SmartImage alt-text matching (fallback only — not directly rendered)
export const FAMOUS_IMAGES: Record<string, string> = {
  'the night watch': 'https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Night_Watch_-_HD.jpg',
  'the starry night': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  'mona lisa': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  'girl with a pearl earring': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg',
  'a sunday on la grande jatte': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg',
  'the persistence of memory': 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop',
  'american gothic': 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg',
  'water lilies': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
  'the scream': 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
  'the birth of venus': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
};

// ═══════════════════════════════════════════════════════════
// MUSEUM BUILDING PHOTOS (used ONLY on museum cards/heroes)
// ═══════════════════════════════════════════════════════════
export const MUSEUM_BUILDING_IMAGES: Record<string, string> = {
  rijksmuseum: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/1280px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg',
  metropolitan: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
  chicago: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Art_Institute_of_Chicago_%2851575570710%29.jpg',
  harvard: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fogg_Art_Museum_-_Harvard_Art_Museums_%2854941056523%29.jpg/500px-Fogg_Art_Museum_-_Harvard_Art_Museums_%2854941056523%29.jpg',
  vanda: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Victoria_%26_Albert_Museum_Entrance%2C_London%2C_UK_-_Diliff.jpg',
  louvre: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg',
};

// ═══════════════════════════════════════════════════════════
// MUSEUMS
// ═══════════════════════════════════════════════════════════
export interface Museum {
  id: string;
  name: string;
  city: string;
  country: string;
  founded: number;
  artworks: string;
  eras: string[];
  quizCount: number;
  buildingImageUrl: string;
  description: string;
}

export const MUSEUMS: Museum[] = [
  {
    id: 'rijksmuseum', name: 'Rijksmuseum', city: 'Amsterdam', country: 'Netherlands',
    founded: 1800, artworks: '450,000', eras: ['Dutch Golden Age', 'Renaissance', 'Medieval'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.rijksmuseum,
    description: 'The national museum of the Netherlands, dedicated to arts and history. Home to masterpieces by Rembrandt, Vermeer, and other Dutch Golden Age painters.',
  },
  {
    id: 'metropolitan', name: 'The Metropolitan Museum of Art', city: 'New York', country: 'USA',
    founded: 1870, artworks: '490,000', eras: ['European', 'American', 'Ancient'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.metropolitan,
    description: 'The largest art museum in the Americas, spanning 5,000 years of world culture. A global treasure trove of human artistic achievement.',
  },
  {
    id: 'chicago', name: 'Art Institute of Chicago', city: 'Chicago', country: 'USA',
    founded: 1879, artworks: '300,000', eras: ['Impressionism', 'Modern', 'Contemporary'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.chicago,
    description: 'One of the oldest and largest art museums in the United States. Renowned for its Impressionist and Post-Impressionist collections.',
  },
  {
    id: 'harvard', name: 'Harvard Art Museums', city: 'Cambridge', country: 'USA',
    founded: 1895, artworks: '250,000', eras: ['Western', 'Asian', 'Islamic'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.harvard,
    description: 'Three museums under one roof, housing one of the most comprehensive collections in the world. A center for art and education.',
  },
  {
    id: 'vanda', name: 'Victoria & Albert Museum', city: 'London', country: 'UK',
    founded: 1852, artworks: '230,000', eras: ['Decorative Arts', 'Fashion', 'Design'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.vanda,
    description: 'The world\'s leading museum of art, design, and performance. Home to over 2.3 million objects spanning 5,000 years of creativity.',
  },
  {
    id: 'louvre', name: 'Musée du Louvre', city: 'Paris', country: 'France',
    founded: 1793, artworks: '380,000', eras: ['Classical', 'Renaissance', 'Egyptian'],
    quizCount: 50, buildingImageUrl: MUSEUM_BUILDING_IMAGES.louvre,
    description: 'The world\'s most-visited museum and a historic monument in Paris. Home to the Mona Lisa and countless treasures of Western civilization.',
  },
];

// ═══════════════════════════════════════════════════════════
// ARTWORK DATA TYPE
// ═══════════════════════════════════════════════════════════
export interface SampleArtwork {
  externalId: string;
  source: string;
  title: string;
  artist: string;
  date: string;
  museum: string;
  movement: string;
  imageUrl: string;
  tags: string[];
  description: string;
  displayMode?: 'cover' | 'contain-blur';
}

// ═══════════════════════════════════════════════════════════
// EXPLORE PAGE — 8 artworks (unique to Explore)
// ═══════════════════════════════════════════════════════════
export const SAMPLE_ARTWORKS: SampleArtwork[] = [
  {
    externalId: 'sk-c-5', source: 'sample', title: 'The Night Watch', artist: 'Rembrandt van Rijn',
    date: '1642', museum: 'Rijksmuseum', movement: 'Dutch Golden Age',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/960px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg',
    tags: ['baroque', 'group-portrait', 'militia'],
    description: 'One of the most famous Dutch Golden Age paintings, depicting a militia company marching out.',
  },
  {
    externalId: 'starry-night-1', source: 'sample', title: 'The Starry Night', artist: 'Vincent van Gogh',
    date: '1889', museum: 'MoMA', movement: 'Post-Impressionism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    tags: ['landscape', 'night-sky', 'expressionism'],
    description: 'A swirling night sky over a village, painted during van Gogh\'s stay at the asylum in Saint-Rémy-de-Provence.',
  },
  {
    externalId: 'mona-lisa-1', source: 'sample', title: 'Mona Lisa', artist: 'Leonardo da Vinci',
    date: '1503–1519', museum: 'Musée du Louvre', movement: 'Renaissance',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Mona-lisa_1.jpg',
    displayMode: 'contain-blur',
    tags: ['portrait', 'sfumato', 'renaissance'],
    description: 'The most famous portrait in history, known for her enigmatic smile and revolutionary technique.',
  },
  {
    externalId: 'pearl-earring-1', source: 'sample', title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer',
    date: '1665', museum: 'Mauritshuis', movement: 'Dutch Golden Age',
    imageUrl: '/girl_2.jpg',
    tags: ['portrait', 'tronie', 'baroque'],
    description: 'Sometimes called the "Mona Lisa of the North," this intimate portrait captivates with its luminous quality.',
  },
  {
    externalId: 'persistence-1', source: 'sample', title: 'The Persistence of Memory', artist: 'Salvador Dalí',
    date: '1931', museum: 'MoMA', movement: 'Surrealism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
    tags: ['surrealism', 'melting-clocks', 'dreamscape'],
    description: 'Dalí\'s iconic melting clocks in a dreamlike landscape, exploring the nature of time and reality.',
  },
  {
    externalId: 'american-gothic-1', source: 'sample', title: 'American Gothic', artist: 'Grant Wood',
    date: '1930', museum: 'Art Institute of Chicago', movement: 'Regionalism',
    imageUrl: '/AmericanGothic.jpg',
    tags: ['portrait', 'americana', 'satire'],
    description: 'A farmer and his daughter stand before a house with a Gothic window, embodying American rural values.',
  },
  {
    externalId: 'water-lilies-1', source: 'sample', title: 'Water Lilies', artist: 'Claude Monet',
    date: '1906', museum: 'Art Institute of Chicago', movement: 'Impressionism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
    tags: ['impressionism', 'nature', 'garden'],
    description: 'Part of Monet\'s iconic series depicting his flower garden at Giverny, capturing light on water.',
  },
  {
    externalId: 'the-scream-1', source: 'sample', title: 'The Scream', artist: 'Edvard Munch',
    date: '1893', museum: 'National Gallery of Norway', movement: 'Expressionism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    tags: ['expressionism', 'anxiety', 'iconic'],
    description: 'An agonized figure against a tumultuous sky, one of the most recognizable images in art history.',
  },
];

// ═══════════════════════════════════════════════════════════
// HOME PAGE — Featured (hero) — 1 unique artwork
// ═══════════════════════════════════════════════════════════
export const FEATURED_ARTWORK: SampleArtwork = {
  externalId: 'birth-venus-1', source: 'sample', title: 'The Birth of Venus', artist: 'Sandro Botticelli',
  date: '1484–1486', museum: 'Uffizi Gallery', movement: 'Renaissance',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
  tags: ['mythology', 'renaissance', 'beauty'],
  description: 'Venus emerges from the sea as a fully grown woman, blown ashore by the winds in this iconic Renaissance masterpiece.',
};

// ═══════════════════════════════════════════════════════════
// HOME PAGE — Trending strip — 8 unique artworks
// ═══════════════════════════════════════════════════════════
export const TRENDING_ARTWORKS: SampleArtwork[] = [
  {
    externalId: 'the-kiss-1', source: 'sample', title: 'The Kiss', artist: 'Gustav Klimt',
    date: '1907–1908', museum: 'Österreichische Galerie Belvedere', movement: 'Art Nouveau',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    tags: ['art-nouveau', 'love', 'gold-leaf'],
    description: 'A couple locked in an intimate embrace, adorned with elaborate gold patterns.',
  },
  {
    externalId: 'great-wave-1', source: 'sample', title: 'The Great Wave off Kanagawa', artist: 'Katsushika Hokusai',
    date: '1831', museum: 'The Metropolitan Museum of Art', movement: 'Ukiyo-e',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg',
    tags: ['ukiyo-e', 'ocean', 'japanese'],
    description: 'A towering wave threatens boats near Kanagawa, with Mount Fuji in the background.',
  },
  {
    externalId: 'creation-adam-1', source: 'sample', title: 'The Creation of Adam', artist: 'Michelangelo',
    date: '1508–1512', museum: 'Sistine Chapel', movement: 'Renaissance',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    tags: ['fresco', 'religious', 'renaissance'],
    description: 'God gives life to Adam through the near-touching of fingers on the Sistine ceiling.',
  },
  {
    externalId: 'wanderer-1', source: 'sample', title: 'Wanderer Above the Sea of Fog', artist: 'Caspar David Friedrich',
    date: '1818', museum: 'Kunsthalle Hamburg', movement: 'Romanticism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
    tags: ['romanticism', 'landscape', 'sublime'],
    description: 'A man stands on a rocky precipice, gazing over a fog-filled landscape.',
  },
  {
    externalId: 'grande-jatte-1', source: 'sample', title: 'A Sunday on La Grande Jatte', artist: 'Georges Seurat',
    date: '1884–1886', museum: 'Art Institute of Chicago', movement: 'Pointillism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg',
    tags: ['pointillism', 'park', 'french'],
    description: 'Parisians relax by the river, rendered in meticulous dots of color.',
  },
  {
    externalId: 'last-supper-1', source: 'sample', title: 'The Last Supper', artist: 'Leonardo da Vinci',
    date: '1495–1498', museum: 'Santa Maria delle Grazie', movement: 'Renaissance',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
    tags: ['fresco', 'religious', 'renaissance'],
    description: 'The dramatic moment Jesus announces one of his apostles will betray him.',
  },
  {
    externalId: 'nighthawks-1', source: 'sample', title: 'Nighthawks', artist: 'Edward Hopper',
    date: '1942', museum: 'Art Institute of Chicago', movement: 'American Realism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg',
    tags: ['realism', 'urban', 'loneliness'],
    description: 'Four figures in a late-night diner, capturing urban isolation.',
  },
  {
    externalId: 'garden-earthly-1', source: 'sample', title: 'The Garden of Earthly Delights', artist: 'Hieronymus Bosch',
    date: '1490–1510', museum: 'Museo del Prado', movement: 'Early Netherlandish',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/The_Garden_of_earthly_delights.jpg',
    tags: ['triptych', 'surreal', 'medieval'],
    description: 'A fantastical triptych depicting paradise, earthly pleasures, and damnation.',
  },
];

// ═══════════════════════════════════════════════════════════
// HOME PAGE — Era cards — 5 unique images
// ═══════════════════════════════════════════════════════════
export const ERA_IMAGES: Record<string, string> = {
  Renaissance: 'https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  Baroque: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg',
  Impressionism: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Claude_Monet_-_Haystacks%2C_end_of_summer.jpg',
  Modern: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
  Contemporary: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Campbells_Soup_Cans_MOMA.jpg',
};

// ═══════════════════════════════════════════════════════════
// GALLERY PAGE — 12 unique artworks (none overlap with above)
// ═══════════════════════════════════════════════════════════
export const GALLERY_ARTWORKS: SampleArtwork[] = [
  {
    externalId: 'milkmaid-1', source: 'sample', title: 'The Milkmaid', artist: 'Johannes Vermeer',
    date: '1658', museum: 'Rijksmuseum', movement: 'Dutch Golden Age',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg',
    tags: ['dutch', 'interior', 'golden-age'],
    description: 'A kitchen maid carefully pours milk, bathed in soft light from a window.',
  },
  {
    externalId: 'anatomy-lesson-1', source: 'sample', title: 'The Anatomy Lesson of Dr. Tulp', artist: 'Rembrandt van Rijn',
    date: '1632', museum: 'Mauritshuis', movement: 'Baroque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg',
    tags: ['dutch', 'baroque', 'portrait'],
    description: 'A group of surgeons observe an anatomy demonstration in dramatic chiaroscuro.',
  },
  {
    externalId: 'moulin-galette-1', source: 'sample', title: 'Dance at Le Moulin de la Galette', artist: 'Pierre-Auguste Renoir',
    date: '1876', museum: 'Musée d\'Orsay', movement: 'Impressionism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Bal_du_moulin_de_la_Galette.jpg',
    tags: ['impressionism', 'french', 'dance'],
    description: 'A lively open-air dance in Montmartre, dappled with sunlight filtering through the trees.',
  },
  {
    externalId: 'liberty-1', source: 'sample', title: 'Liberty Leading the People', artist: 'Eugène Delacroix',
    date: '1830', museum: 'Musée du Louvre', movement: 'Romanticism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg',
    tags: ['romanticism', 'revolution', 'french'],
    description: 'Marianne leads the people over a barricade during the July Revolution.',
  },
  {
    externalId: 'impression-sunrise-1', source: 'sample', title: 'Impression, Sunrise', artist: 'Claude Monet',
    date: '1872', museum: 'Musée Marmottan Monet', movement: 'Impressionism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg',
    tags: ['impressionism', 'seascape', 'dawn'],
    description: 'The painting that gave Impressionism its name, depicting the harbour of Le Havre at sunrise.',
  },
  {
    externalId: 'fighting-temeraire-1', source: 'sample', title: 'The Fighting Temeraire', artist: 'J.M.W. Turner',
    date: '1839', museum: 'National Gallery', movement: 'Romanticism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/960px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg',
    tags: ['romanticism', 'british', 'seascape'],
    description: 'A grand warship is towed to the breakers by a small tugboat at sunset.',
  },
  {
    externalId: 'whistlers-mother-1', source: 'sample', title: 'Whistler\'s Mother', artist: 'James McNeill Whistler',
    date: '1871', museum: 'Musée d\'Orsay', movement: 'Realism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/960px-Whistlers_Mother_high_res.jpg',
    tags: ['portrait', 'american', 'realism'],
    description: 'An austere profile of the artist\'s mother seated in a chair, an icon of American art.',
  },
  {
    externalId: 'adele-1', source: 'sample', title: 'Portrait of Adele Bloch-Bauer I', artist: 'Gustav Klimt',
    date: '1907', museum: 'Neue Galerie', movement: 'Art Nouveau',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gustav_Klimt_047.jpg/500px-Gustav_Klimt_047.jpg',
    displayMode: 'contain-blur',
    tags: ['art-nouveau', 'portrait', 'gold'],
    description: 'The "Woman in Gold" — a shimmering portrait covered in gold leaf and ornamental patterns.',
  },
  {
    externalId: 'frida-self-1', source: 'sample', title: 'Self-Portrait with Thorn Necklace', artist: 'Frida Kahlo',
    date: '1940', museum: 'Harry Ransom Center', movement: 'Surrealism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg',
    tags: ['surrealism', 'mexican', 'self-portrait'],
    description: 'Kahlo wears a crown of thorns as a necklace, flanked by a monkey and a hummingbird.',
  },
{
  externalId: 'tree-of-life-1',
  source: 'sample',
  title: 'Tree of Life',
  artist: 'Gustav Klimt',
  date: '1909',
  museum: 'Stoclet Palace, Brussels',
  movement: 'Symbolism / Art Nouveau',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Gustav_Klimt_-_Stoclet_Frieze_-_Tree_of_Life.jpg',
  tags: ['symbolism', 'nature', 'decorative', 'gold'],
  description: 'An ornamental tree with swirling branches symbolizing life, growth, and connection.',
},
  {
    externalId: 'hope-ii-1', source: 'sample', title: 'Hope II', artist: 'Gustav Klimt',
    date: '1908', museum: 'MoMA', movement: 'Symbolism',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Gustav_Klimt_-_Hope%2C_II_-_Google_Art_Project.jpg/500px-Gustav_Klimt_-_Hope%2C_II_-_Google_Art_Project.jpg',
    tags: ['symbolism', 'pregnancy', 'austrian'],
    description: 'A pregnant woman bows her head in contemplation, adorned with Klimt\'s decorative patterns.',
  },
  {
    externalId: 'blessed-damozel-1', source: 'sample', title: 'The Blessed Damozel', artist: 'Dante Gabriel Rossetti',
    date: '1878', museum: 'Fogg Museum', movement: 'Pre-Raphaelite',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Dante_Gabriel_Rossetti_The_Blessed_Damozel.jpg/500px-Dante_Gabriel_Rossetti_The_Blessed_Damozel.jpg',
    tags: ['pre-raphaelite', 'poetry', 'british'],
    description: 'A young woman leans over from heaven, longing for her earthly lover below.',
  },
];

// ═══════════════════════════════════════════════════════════
// QUIZ PAGE — Banner images per museum (all unique)
// ═══════════════════════════════════════════════════════════
export const QUIZ_BANNER_IMAGES: Record<string, string> = {
  rijksmuseum: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=1000&auto=format&fit=crop',
  metropolitan: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1000&auto=format&fit=crop',
  chicago: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop',
  harvard: 'https://images.unsplash.com/photo-1582561424760-0321d683796d?q=80&w=1000&auto=format&fit=crop',
  vanda: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop',
  louvre: 'https://images.unsplash.com/photo-1563842609062-817abdfaccf4?q=80&w=1000&auto=format&fit=crop',
};

// ═══════════════════════════════════════════════════════════
// MUSEUM DETAIL PAGE — 4 highlight artworks per museum (all unique)
// ═══════════════════════════════════════════════════════════
export const MUSEUM_HIGHLIGHT_ARTWORKS: Record<string, SampleArtwork[]> = {
  rijksmuseum: [
    { externalId: 'laughing-cavalier-1', source: 'sample', title: 'The Laughing Cavalier', artist: 'Frans Hals', date: '1624', museum: 'Rijksmuseum', movement: 'Dutch Golden Age', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Laughing_Cavalier.jpg', tags: ['portrait', 'dutch'], description: 'A dashing cavalier with a mysterious smile, dressed in ornate clothing.', displayMode: 'contain-blur' },
    { externalId: 'rembrandt-self-1', source: 'sample', title: 'Self-Portrait', artist: 'Rembrandt van Rijn', date: '1659', museum: 'Rijksmuseum', movement: 'Dutch Golden Age', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg', tags: ['self-portrait', 'dutch'], description: 'Rembrandt at 53, rendered with unflinching honesty and masterful brushwork.' },
    { externalId: 'girl-red-hat-1', source: 'sample', title: 'Girl with a Red Hat', artist: 'Johannes Vermeer', date: '1665', museum: 'National Gallery of Art', movement: 'Dutch Golden Age', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Girl_with_Red_Hat_by_Johannes_Vermeer.jpg', tags: ['portrait', 'dutch'], description: 'A young woman in a vivid red hat glances over her shoulder.' },
    { externalId: 'triumph-bacchus-1', source: 'sample', title: 'The Triumph of Bacchus', artist: 'Diego Velázquez', date: '1629', museum: 'Museo del Prado', movement: 'Baroque', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Velazquez-Los_Borrachos.jpg', tags: ['baroque', 'mythology'], description: 'Bacchus crowns a soldier with vine leaves among drunken revelers.' },
  ],
  metropolitan: [
    { externalId: 'venus-milo-1', source: 'sample', title: 'Venus de Milo', artist: 'Alexandros of Antioch', date: '130–100 BC', museum: 'Musée du Louvre', movement: 'Classical', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Venus_de_Milo_-_Louvre_MR399_n4.jpg', tags: ['sculpture', 'greek', 'classical'], description: 'The iconic armless statue of the Greek goddess Aphrodite.' },
    { externalId: 'winged-victory-1', source: 'sample', title: 'Winged Victory of Samothrace', artist: 'Unknown Greek', date: '190 BC', museum: 'Musée du Louvre', movement: 'Hellenistic', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg', tags: ['sculpture', 'greek', 'hellenistic'], description: 'Nike alights on a ship\'s prow, robes billowing in the wind.' },
    { externalId: 'tutankhamun-1', source: 'sample', title: 'Mask of Tutankhamun', artist: 'Ancient Egyptian', date: '1323 BC', museum: 'Egyptian Museum', movement: 'Ancient Egyptian', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg', tags: ['ancient', 'egyptian', 'gold'], description: 'The solid gold funerary mask of the young pharaoh.' },
    { externalId: 'nefertiti-1', source: 'sample', title: 'Bust of Nefertiti', artist: 'Thutmose', date: '1345 BC', museum: 'Neues Museum', movement: 'Ancient Egyptian', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Nefertiti_berlin.jpg', tags: ['ancient', 'egyptian', 'bust'], description: 'The stunningly preserved bust of the Great Royal Wife of Akhenaten.' },
  ],
  chicago: [
    { externalId: 'bar-folies-1', source: 'sample', title: 'A Bar at the Folies-Bergère', artist: 'Édouard Manet', date: '1882', museum: 'Courtauld Gallery', movement: 'Impressionism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg', tags: ['impressionism', 'french', 'nightlife'], description: 'A barmaid gazes out from behind bottles, her reflection oddly displaced in the mirror behind.' },
    { externalId: 'wheat-field-crows-1', source: 'sample', title: 'Wheat Field with Crows', artist: 'Vincent van Gogh', date: '1890', museum: 'Van Gogh Museum', movement: 'Post-Impressionism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Vincent_van_Gogh_-_Wheat_Field_with_Crows_-_Google_Art_Project.jpg', tags: ['landscape', 'dutch', 'post-impressionism'], description: 'Dark crows swirl over a turbulent wheat field under an ominous sky.' },
    { externalId: 'dr-gachet-1', source: 'sample', title: 'Portrait of Dr. Gachet', artist: 'Vincent van Gogh', date: '1890', museum: 'Private Collection', movement: 'Post-Impressionism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/VanGogh_-_Bildnis_des_Dr._Gachet.jpeg', tags: ['portrait', 'dutch', 'post-impressionism'], description: 'Van Gogh\'s physician rests his head on his hand in melancholy contemplation.' },
    { externalId: 'starry-rhone-1', source: 'sample', title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', date: '1888', museum: 'Musée d\'Orsay', movement: 'Post-Impressionism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Starry_Night_Over_the_Rh%C3%B4ne.jpg', tags: ['landscape', 'night', 'post-impressionism'], description: 'Gaslight and starlight reflect on the Rhône river at Arles.' },
  ],
  harvard: [
    { externalId: 'son-of-man-1', source: 'sample', title: 'The Son of Man', artist: 'René Magritte', date: '1964', museum: 'Private Collection', movement: 'Surrealism', imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop', tags: ['surrealism', 'belgian', 'portrait'], description: 'A bowler-hatted man whose face is obscured by a floating green apple.' },
    { externalId: 'demoiselles-1', source: 'sample', title: 'Les Demoiselles d\'Avignon', artist: 'Pablo Picasso', date: '1907', museum: 'MoMA', movement: 'Proto-Cubism', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', tags: ['cubism', 'spanish', 'revolutionary'], description: 'Five angular women in fractured perspectives, the painting that shattered tradition.' },
    { externalId: 'dance-matisse-1', source: 'sample', title: 'The Dance', artist: 'Henri Matisse', date: '1910', museum: 'Hermitage Museum', movement: 'Fauvism', imageUrl: 'https://images.unsplash.com/photo-1576135038254-35bace5d8ae5?q=80&w=800&auto=format&fit=crop', tags: ['fauvism', 'french', 'dance'], description: 'Five figures dance in a ring, reduced to essential shapes of red, blue, and green.' },
    { externalId: 'pollock-31-1', source: 'sample', title: 'No. 31', artist: 'Jackson Pollock', date: '1950', museum: 'MoMA', movement: 'Abstract Expressionism', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop', tags: ['abstract', 'american', 'drip-painting'], description: 'A monumental drip painting with layers of tangled, rhythmic lines.' },
  ],
  vanda: [
    { externalId: 'christinas-world-1', source: 'sample', title: 'Christina\'s World', artist: 'Andrew Wyeth', date: '1948', museum: 'MoMA', movement: 'Regionalism', imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop', tags: ['realism', 'american', 'landscape'], description: 'A woman crawls through a dry field toward a distant farmhouse.' },
    { externalId: 'two-fridas-1', source: 'sample', title: 'The Two Fridas', artist: 'Frida Kahlo', date: '1939', museum: 'Museo de Arte Moderno', movement: 'Surrealism', imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4ee1?q=80&w=800&auto=format&fit=crop', tags: ['surrealism', 'mexican', 'double-portrait'], description: 'Two versions of Kahlo sit side by side, their hearts connected by a thin vein.' },
    { externalId: 'ophelia-1', source: 'sample', title: 'Ophelia', artist: 'John Everett Millais', date: '1851–1852', museum: 'Tate Britain', movement: 'Pre-Raphaelite', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg', tags: ['pre-raphaelite', 'shakespeare', 'tragedy'], description: 'Shakespeare\'s Ophelia floats singing in a stream, surrounded by flowers.' },
    { externalId: 'napoleon-1', source: 'sample', title: 'Napoleon Crossing the Alps', artist: 'Jacques-Louis David', date: '1801', museum: 'Château de Malmaison', movement: 'Neoclassicism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg', tags: ['neoclassicism', 'french', 'equestrian'], description: 'Napoleon rears his horse on a dramatic mountain pass.' },
  ],
  louvre: [
    { externalId: 'judith-caravaggio-1', source: 'sample', title: 'Judith Slaying Holofernes', artist: 'Caravaggio', date: '1599', museum: 'Galleria Nazionale d\'Arte Antica', movement: 'Baroque', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Caravaggio_-_Judith_Beheading_Holofernes_-_Google_Art_Project.jpg', tags: ['baroque', 'biblical', 'italian'], description: 'Judith beheads Holofernes with resolute determination in Caravaggio\'s visceral style.' },
    { externalId: 'saturn-1', source: 'sample', title: 'Saturn Devouring His Son', artist: 'Francisco Goya', date: '1819–1823', museum: 'Museo del Prado', movement: 'Romanticism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg', tags: ['dark', 'mythology', 'spanish'], description: 'A wild-eyed Titan consumes his child in Goya\'s most terrifying Black Painting.' },
    { externalId: 'raft-medusa-detail-1', source: 'sample', title: 'The Raft of the Medusa', artist: 'Théodore Géricault', date: '1818–1819', museum: 'Musée du Louvre', movement: 'Romanticism', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg', tags: ['romanticism', 'french', 'maritime'], description: 'Shipwreck survivors signal a distant ship from a makeshift raft.' },
    { externalId: 'arnolfini-1', source: 'sample', title: 'The Arnolfini Portrait', artist: 'Jan van Eyck', date: '1434', museum: 'National Gallery', movement: 'Early Netherlandish', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg', tags: ['portrait', 'symbolism', 'oil-painting'], description: 'A richly symbolic double portrait, one of the most complex paintings in Western art.' },
  ],
};

// ═══════════════════════════════════════════════════════════
// AUTH PAGE BACKGROUND IMAGES (unique — not used anywhere else)
// ═══════════════════════════════════════════════════════════
export const AUTH_IMAGES = {
  login: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg',
  register: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg',
};

// ═══════════════════════════════════════════════════════════
// DATA HELPERS
// ═══════════════════════════════════════════════════════════
export function getArtworkById(id: string): SampleArtwork | undefined {
  const allArrs = [
    SAMPLE_ARTWORKS,
    TRENDING_ARTWORKS,
    GALLERY_ARTWORKS,
    [FEATURED_ARTWORK],
    ...Object.values(MUSEUM_HIGHLIGHT_ARTWORKS)
  ];
  
  for (const arr of allArrs) {
    const found = arr.find(a => a.externalId === id);
    if (found) return found;
  }
  
  return undefined;
}

export function getAllArtworks(): SampleArtwork[] {
  return [
    ...SAMPLE_ARTWORKS,
    ...TRENDING_ARTWORKS,
    ...GALLERY_ARTWORKS,
    FEATURED_ARTWORK,
    ...Object.values(MUSEUM_HIGHLIGHT_ARTWORKS).flat()
  ];
}
