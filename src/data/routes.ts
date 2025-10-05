export interface Destination {
  id: string;
  name: string;
  nameAlt?: string; // Alternative name (e.g., "Skopje Airport" vs "Alexander the Great Airport")
  nameMk: string;
  country: string;
  countryMk: string;
  type: 'city' | 'airport' | 'tourist' | 'resort';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface RouteInfo {
  from: string; // destination ID
  to: string; // destination ID
  distance: string;
  duration: string;
  pricing: {
    eClass?: { min: number; max: number; currency: string };
    vClass?: { min: number; max: number; currency: string };
    octavia?: { min: number; max: number; currency: string };
  };
  highlights?: string[];
  popular?: boolean; // Mark popular routes for featured sections
  vehicleRecommendations: string[];
  description?: string;
  descriptionMk?: string;
}

// All destinations organized by country
export const destinations: Destination[] = [
  // NORTH MACEDONIA
  { id: 'skopje', name: 'Skopje', nameMk: 'Скопје', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'skopje-airport', name: 'Skopje Airport', nameAlt: 'Alexander the Great Airport', nameMk: 'Аеродром Скопје', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'airport' },
  { id: 'ohrid', name: 'Ohrid', nameMk: 'Охрид', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'bitola', name: 'Bitola', nameMk: 'Битола', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'prilep', name: 'Prilep', nameMk: 'Прилеп', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'tetovo', name: 'Tetovo', nameMk: 'Тетово', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'gostivar', name: 'Gostivar', nameMk: 'Гостивар', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'strumica', name: 'Strumica', nameMk: 'Струмица', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'city' },
  { id: 'mavrovo', name: 'Mavrovo', nameMk: 'Маврово', country: 'North Macedonia', countryMk: 'Северна Македонија', type: 'resort' },

  // ALBANIA
  { id: 'tirana', name: 'Tirana', nameMk: 'Тирана', country: 'Albania', countryMk: 'Албанија', type: 'city' },
  { id: 'tirana-airport', name: 'Tirana Airport', nameAlt: 'Mother Teresa Airport', nameMk: 'Аеродром Тирана', country: 'Albania', countryMk: 'Албанија', type: 'airport' },
  { id: 'durres', name: 'Durrës', nameMk: 'Драч', country: 'Albania', countryMk: 'Албанија', type: 'city' },
  { id: 'saranda', name: 'Sarandë', nameMk: 'Саранда', country: 'Albania', countryMk: 'Албанија', type: 'city' },
  { id: 'vlore', name: 'Vlorë', nameMk: 'Валона', country: 'Albania', countryMk: 'Албанија', type: 'city' },

  // KOSOVO
  { id: 'pristina', name: 'Pristina', nameMk: 'Приштина', country: 'Kosovo', countryMk: 'Косово', type: 'city' },
  { id: 'pristina-airport', name: 'Pristina Airport', nameAlt: 'Adem Jashari Airport', nameMk: 'Аеродром Приштина', country: 'Kosovo', countryMk: 'Косово', type: 'airport' },
  { id: 'prizren', name: 'Prizren', nameMk: 'Призрен', country: 'Kosovo', countryMk: 'Косово', type: 'city' },
  { id: 'peja', name: 'Peja', nameMk: 'Пеја', country: 'Kosovo', countryMk: 'Косово', type: 'city' },

  // SERBIA
  { id: 'belgrade', name: 'Belgrade', nameMk: 'Белград', country: 'Serbia', countryMk: 'Србија', type: 'city' },
  { id: 'belgrade-airport', name: 'Belgrade Airport', nameAlt: 'Nikola Tesla Airport', nameMk: 'Аеродром Белград', country: 'Serbia', countryMk: 'Србија', type: 'airport' },
  { id: 'nis', name: 'Niš', nameMk: 'Ниш', country: 'Serbia', countryMk: 'Србија', type: 'city' },
  { id: 'novi-sad', name: 'Novi Sad', nameMk: 'Нови Сад', country: 'Serbia', countryMk: 'Србија', type: 'city' },

  // BULGARIA
  { id: 'sofia', name: 'Sofia', nameMk: 'Софија', country: 'Bulgaria', countryMk: 'Бугарија', type: 'city' },
  { id: 'sofia-airport', name: 'Sofia Airport', nameMk: 'Аеродром Софија', country: 'Bulgaria', countryMk: 'Бугарија', type: 'airport' },
  { id: 'plovdiv', name: 'Plovdiv', nameMk: 'Пловдив', country: 'Bulgaria', countryMk: 'Бугарија', type: 'city' },
  { id: 'burgas', name: 'Burgas', nameMk: 'Бургас', country: 'Bulgaria', countryMk: 'Бугарија', type: 'city' },

  // GREECE
  { id: 'thessaloniki', name: 'Thessaloniki', nameMk: 'Солун', country: 'Greece', countryMk: 'Грција', type: 'city' },
  { id: 'thessaloniki-airport', name: 'Thessaloniki Airport', nameMk: 'Аеродром Солун', country: 'Greece', countryMk: 'Грција', type: 'airport' },
  { id: 'athens', name: 'Athens', nameMk: 'Атина', country: 'Greece', countryMk: 'Грција', type: 'city' },
  { id: 'athens-airport', name: 'Athens Airport', nameMk: 'Аеродром Атина', country: 'Greece', countryMk: 'Грција', type: 'airport' },

  // CROATIA
  { id: 'zagreb', name: 'Zagreb', nameMk: 'Загреб', country: 'Croatia', countryMk: 'Хрватска', type: 'city' },
  { id: 'zagreb-airport', name: 'Zagreb Airport', nameMk: 'Аеродром Загреб', country: 'Croatia', countryMk: 'Хрватска', type: 'airport' },
  { id: 'split', name: 'Split', nameMk: 'Сплит', country: 'Croatia', countryMk: 'Хрватска', type: 'city' },
  { id: 'dubrovnik', name: 'Dubrovnik', nameMk: 'Дубровник', country: 'Croatia', countryMk: 'Хрватска', type: 'city' },
  { id: 'rijeka', name: 'Rijeka', nameMk: 'Ријека', country: 'Croatia', countryMk: 'Хрватска', type: 'city' },

  // MONTENEGRO
  { id: 'podgorica', name: 'Podgorica', nameMk: 'Подгорица', country: 'Montenegro', countryMk: 'Црна Гора', type: 'city' },
  { id: 'podgorica-airport', name: 'Podgorica Airport', nameMk: 'Аеродром Подгорица', country: 'Montenegro', countryMk: 'Црна Гора', type: 'airport' },
  { id: 'budva', name: 'Budva', nameMk: 'Будва', country: 'Montenegro', countryMk: 'Црна Гора', type: 'resort' },
  { id: 'kotor', name: 'Kotor', nameMk: 'Котор', country: 'Montenegro', countryMk: 'Црна Гора', type: 'city' },
  { id: 'tivat', name: 'Tivat', nameMk: 'Тиват', country: 'Montenegro', countryMk: 'Црна Гора', type: 'city' },

  // BOSNIA AND HERZEGOVINA
  { id: 'sarajevo', name: 'Sarajevo', nameMk: 'Сараево', country: 'Bosnia and Herzegovina', countryMk: 'Босна и Херцеговина', type: 'city' },
  { id: 'sarajevo-airport', name: 'Sarajevo Airport', nameMk: 'Аеродром Сараево', country: 'Bosnia and Herzegovina', countryMk: 'Босна и Херцеговина', type: 'airport' },
  { id: 'mostar', name: 'Mostar', nameMk: 'Мостар', country: 'Bosnia and Herzegovina', countryMk: 'Босна и Херцеговина', type: 'city' },
  { id: 'banja-luka', name: 'Banja Luka', nameMk: 'Бања Лука', country: 'Bosnia and Herzegovina', countryMk: 'Босна и Херцеговина', type: 'city' },

  // SLOVENIA
  { id: 'ljubljana', name: 'Ljubljana', nameMk: 'Љубљана', country: 'Slovenia', countryMk: 'Словенија', type: 'city' },
  { id: 'ljubljana-airport', name: 'Ljubljana Airport', nameMk: 'Аеродром Љубљана', country: 'Slovenia', countryMk: 'Словенија', type: 'airport' },
  { id: 'maribor', name: 'Maribor', nameMk: 'Марибор', country: 'Slovenia', countryMk: 'Словенија', type: 'city' },
  { id: 'bled', name: 'Bled', nameMk: 'Блед', country: 'Slovenia', countryMk: 'Словенија', type: 'tourist' },

  // HUNGARY
  { id: 'budapest', name: 'Budapest', nameMk: 'Будимпешта', country: 'Hungary', countryMk: 'Унгарија', type: 'city' },
  { id: 'budapest-airport', name: 'Budapest Airport', nameMk: 'Аеродром Будимпешта', country: 'Hungary', countryMk: 'Унгарија', type: 'airport' },
  { id: 'balaton', name: 'Lake Balaton', nameMk: 'Езеро Балатон', country: 'Hungary', countryMk: 'Унгарија', type: 'resort' },

  // ROMANIA
  { id: 'bucharest', name: 'Bucharest', nameMk: 'Букурешт', country: 'Romania', countryMk: 'Романија', type: 'city' },
  { id: 'bucharest-airport', name: 'Bucharest Airport', nameMk: 'Аеродром Букурешт', country: 'Romania', countryMk: 'Романија', type: 'airport' },
  { id: 'brasov', name: 'Brașov', nameMk: 'Брашов', country: 'Romania', countryMk: 'Романија', type: 'city' },
  { id: 'cluj-napoca', name: 'Cluj-Napoca', nameMk: 'Клуж-Напока', country: 'Romania', countryMk: 'Романија', type: 'city' },

  // AUSTRIA
  { id: 'vienna', name: 'Vienna', nameMk: 'Виена', country: 'Austria', countryMk: 'Австрија', type: 'city' },
  { id: 'vienna-airport', name: 'Vienna Airport', nameMk: 'Аеродром Виена', country: 'Austria', countryMk: 'Австрија', type: 'airport' },
  { id: 'salzburg', name: 'Salzburg', nameMk: 'Салцбург', country: 'Austria', countryMk: 'Австрија', type: 'city' },
  { id: 'innsbruck', name: 'Innsbruck', nameMk: 'Инсбрук', country: 'Austria', countryMk: 'Австрија', type: 'city' },

  // ITALY
  { id: 'venice', name: 'Venice', nameMk: 'Венеција', country: 'Italy', countryMk: 'Италија', type: 'city' },
  { id: 'venice-airport', name: 'Venice Airport', nameMk: 'Аеродром Венеција', country: 'Italy', countryMk: 'Италија', type: 'airport' },
  { id: 'milan', name: 'Milan', nameMk: 'Милано', country: 'Italy', countryMk: 'Италија', type: 'city' },
  { id: 'milan-malpensa', name: 'Milan Malpensa Airport', nameMk: 'Аеродром Милано Малпенса', country: 'Italy', countryMk: 'Италија', type: 'airport' },
  { id: 'rome', name: 'Rome', nameMk: 'Рим', country: 'Italy', countryMk: 'Италија', type: 'city' },
  { id: 'rome-fiumicino', name: 'Rome Fiumicino Airport', nameMk: 'Аеродром Рим Фијумичино', country: 'Italy', countryMk: 'Италија', type: 'airport' },
  { id: 'florence', name: 'Florence', nameMk: 'Фиренца', country: 'Italy', countryMk: 'Италија', type: 'city' },
  { id: 'trieste', name: 'Trieste', nameMk: 'Трст', country: 'Italy', countryMk: 'Италија', type: 'city' },

  // SWITZERLAND
  { id: 'zurich', name: 'Zurich', nameMk: 'Цирих', country: 'Switzerland', countryMk: 'Швајцарија', type: 'city' },
  { id: 'zurich-airport', name: 'Zurich Airport', nameMk: 'Аеродром Цирих', country: 'Switzerland', countryMk: 'Швајцарија', type: 'airport' },
  { id: 'geneva', name: 'Geneva', nameMk: 'Женева', country: 'Switzerland', countryMk: 'Швајцарија', type: 'city' },
  { id: 'geneva-airport', name: 'Geneva Airport', nameMk: 'Аеродром Женева', country: 'Switzerland', countryMk: 'Швајцарија', type: 'airport' },
  { id: 'bern', name: 'Bern', nameMk: 'Берн', country: 'Switzerland', countryMk: 'Швајцарија', type: 'city' },

  // GERMANY
  { id: 'munich', name: 'Munich', nameMk: 'Минхен', country: 'Germany', countryMk: 'Германија', type: 'city' },
  { id: 'munich-airport', name: 'Munich Airport', nameMk: 'Аеродром Минхен', country: 'Germany', countryMk: 'Германија', type: 'airport' },
  { id: 'frankfurt', name: 'Frankfurt', nameMk: 'Франкфурт', country: 'Germany', countryMk: 'Германија', type: 'city' },
  { id: 'frankfurt-airport', name: 'Frankfurt Airport', nameMk: 'Аеродром Франкфурт', country: 'Germany', countryMk: 'Германија', type: 'airport' },
  { id: 'berlin', name: 'Berlin', nameMk: 'Берлин', country: 'Germany', countryMk: 'Германија', type: 'city' },
  { id: 'berlin-airport', name: 'Berlin Airport', nameMk: 'Аеродром Берлин', country: 'Germany', countryMk: 'Германија', type: 'airport' },
  { id: 'stuttgart', name: 'Stuttgart', nameMk: 'Штутгарт', country: 'Germany', countryMk: 'Германија', type: 'city' },

  // FRANCE
  { id: 'paris', name: 'Paris', nameMk: 'Париз', country: 'France', countryMk: 'Франција', type: 'city' },
  { id: 'paris-cdg', name: 'Paris Charles de Gaulle Airport', nameMk: 'Аеродром Париз Шарл де Гол', country: 'France', countryMk: 'Франција', type: 'airport' },
  { id: 'lyon', name: 'Lyon', nameMk: 'Лион', country: 'France', countryMk: 'Франција', type: 'city' },
  { id: 'marseille', name: 'Marseille', nameMk: 'Марсеј', country: 'France', countryMk: 'Франција', type: 'city' },
  { id: 'nice', name: 'Nice', nameMk: 'Ница', country: 'France', countryMk: 'Франција', type: 'city' },
  { id: 'nice-airport', name: 'Nice Airport', nameMk: 'Аеродром Ница', country: 'France', countryMk: 'Франција', type: 'airport' },
];

// Helper function to get destination by ID
export function getDestination(id: string): Destination | undefined {
  return destinations.find(d => d.id === id);
}

// Helper function to get all destinations by country
export function getDestinationsByCountry(country: string): Destination[] {
  return destinations.filter(d => d.country === country);
}

// Helper function to create route slug
export function createRouteSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

// Popular and commonly requested routes with detailed information
export const routes: RouteInfo[] = [
  // DOMESTIC ROUTES (North Macedonia)
  {
    from: 'skopje',
    to: 'skopje-airport',
    distance: '22 km',
    duration: '25-30 min',
    pricing: {
      eClass: { min: 25, max: 35, currency: 'EUR' },
      vClass: { min: 35, max: 45, currency: 'EUR' },
      octavia: { min: 20, max: 30, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Quick and reliable airport transfer from Skopje city center to Alexander the Great Airport.',
    descriptionMk: 'Брз и доверлив аеродромски трансфер од центарот на Скопје до Аеродром Александар Велики.'
  },
  {
    from: 'skopje',
    to: 'ohrid',
    distance: '170 km',
    duration: '2-2.5 hours',
    pricing: {
      eClass: { min: 100, max: 130, currency: 'EUR' },
      vClass: { min: 140, max: 170, currency: 'EUR' },
      octavia: { min: 80, max: 100, currency: 'EUR' }
    },
    popular: true,
    highlights: ['UNESCO World Heritage Site', 'Scenic lake views', 'Ancient churches'],
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Comfortable transfer to the pearl of Macedonia - Ohrid, with its stunning lake and rich history.',
    descriptionMk: 'Удобен трансфер до бисерот на Македонија - Охрид, со неговото прекрасно езеро и богата историја.'
  },
  {
    from: 'skopje-airport',
    to: 'ohrid',
    distance: '185 km',
    duration: '2.5-3 hours',
    pricing: {
      eClass: { min: 110, max: 140, currency: 'EUR' },
      vClass: { min: 150, max: 180, currency: 'EUR' },
      octavia: { min: 90, max: 110, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Direct transfer from Skopje Airport to Ohrid, perfect for tourists arriving by air.',
    descriptionMk: 'Директен трансфер од Аеродром Скопје до Охрид, совршено за туристи кои пристигнуваат со авион.'
  },
  {
    from: 'skopje',
    to: 'bitola',
    distance: '175 km',
    duration: '2-2.5 hours',
    pricing: {
      eClass: { min: 105, max: 135, currency: 'EUR' },
      vClass: { min: 145, max: 175, currency: 'EUR' },
      octavia: { min: 85, max: 105, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Transfer to Bitola, the city of consuls, known for its architecture and nearby Heraclea.',
    descriptionMk: 'Трансфер до Битола, градот на конзули, познат по својата архитектура и блиската Хераклеа.'
  },
  {
    from: 'skopje',
    to: 'mavrovo',
    distance: '110 km',
    duration: '1.5-2 hours',
    pricing: {
      eClass: { min: 70, max: 90, currency: 'EUR' },
      vClass: { min: 100, max: 120, currency: 'EUR' },
      octavia: { min: 60, max: 75, currency: 'EUR' }
    },
    highlights: ['National Park', 'Mountain resort', 'Skiing in winter'],
    vehicleRecommendations: ['V-Class', 'Octavia'],
    description: 'Scenic transfer to Mavrovo National Park, perfect for nature lovers and ski enthusiasts.',
    descriptionMk: 'Живописен трансфер до Национален Парк Маврово, совршен за љубители на природата и скијање.'
  },

  // REGIONAL ROUTES - Kosovo
  {
    from: 'skopje',
    to: 'pristina',
    distance: '90 km',
    duration: '1.5 hours',
    pricing: {
      eClass: { min: 60, max: 80, currency: 'EUR' },
      vClass: { min: 85, max: 105, currency: 'EUR' },
      octavia: { min: 50, max: 65, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Quick cross-border transfer to Kosovo\'s capital, Pristina.',
    descriptionMk: 'Брз прекуграничен трансфер до главниот град на Косово, Приштина.'
  },
  {
    from: 'skopje-airport',
    to: 'pristina',
    distance: '105 km',
    duration: '1.5-2 hours',
    pricing: {
      eClass: { min: 70, max: 90, currency: 'EUR' },
      vClass: { min: 95, max: 115, currency: 'EUR' },
      octavia: { min: 60, max: 75, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Airport transfer from Skopje to Pristina, convenient for international travelers.',
    descriptionMk: 'Аеродромски трансфер од Скопје до Приштина, погоден за меѓународни патници.'
  },
  {
    from: 'skopje',
    to: 'prizren',
    distance: '125 km',
    duration: '2 hours',
    pricing: {
      eClass: { min: 80, max: 100, currency: 'EUR' },
      vClass: { min: 110, max: 130, currency: 'EUR' },
      octavia: { min: 65, max: 85, currency: 'EUR' }
    },
    highlights: ['Historic Ottoman architecture', 'Fortress views', 'Cultural heritage'],
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Transfer to the beautiful historic city of Prizren, known for its Ottoman heritage.',
    descriptionMk: 'Трансфер до прекрасниот историски град Призрен, познат по своето отоманско наследство.'
  },

  // REGIONAL ROUTES - Albania
  {
    from: 'skopje',
    to: 'tirana',
    distance: '290 km',
    duration: '4-5 hours',
    pricing: {
      eClass: { min: 180, max: 220, currency: 'EUR' },
      vClass: { min: 240, max: 280, currency: 'EUR' },
      octavia: { min: 150, max: 180, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Long-distance transfer to Albania\'s vibrant capital, Tirana.',
    descriptionMk: 'Долг трансфер до живиот главен град на Албанија, Тирана.'
  },
  {
    from: 'ohrid',
    to: 'tirana',
    distance: '140 km',
    duration: '2.5-3 hours',
    pricing: {
      eClass: { min: 90, max: 120, currency: 'EUR' },
      vClass: { min: 130, max: 160, currency: 'EUR' },
      octavia: { min: 75, max: 95, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Scenic cross-border transfer from Ohrid to Tirana.',
    descriptionMk: 'Живописен прекуграничен трансфер од Охрид до Тирана.'
  },

  // REGIONAL ROUTES - Serbia
  {
    from: 'skopje',
    to: 'belgrade',
    distance: '435 km',
    duration: '5-6 hours',
    pricing: {
      eClass: { min: 280, max: 340, currency: 'EUR' },
      vClass: { min: 370, max: 430, currency: 'EUR' },
      octavia: { min: 230, max: 280, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Long-distance premium transfer to Serbia\'s capital, Belgrade.',
    descriptionMk: 'Долг премиум трансфер до главниот град на Србија, Белград.'
  },
  {
    from: 'skopje',
    to: 'nis',
    distance: '180 km',
    duration: '2.5-3 hours',
    pricing: {
      eClass: { min: 115, max: 145, currency: 'EUR' },
      vClass: { min: 155, max: 185, currency: 'EUR' },
      octavia: { min: 95, max: 115, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class', 'Octavia'],
    description: 'Transfer to Niš, an important Serbian city with rich history.',
    descriptionMk: 'Трансфер до Ниш, важен српски град со богата историја.'
  },

  // REGIONAL ROUTES - Greece
  {
    from: 'skopje',
    to: 'thessaloniki',
    distance: '235 km',
    duration: '3-3.5 hours',
    pricing: {
      eClass: { min: 150, max: 190, currency: 'EUR' },
      vClass: { min: 200, max: 240, currency: 'EUR' },
      octavia: { min: 125, max: 155, currency: 'EUR' }
    },
    popular: true,
    highlights: ['Mediterranean coast', 'Greek culture', 'Shopping'],
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Popular transfer to Thessaloniki, Greece\'s second-largest city and coastal gem.',
    descriptionMk: 'Популарен трансфер до Солун, вториот најголем град на Грција и крајбрежен бисер.'
  },
  {
    from: 'skopje-airport',
    to: 'thessaloniki',
    distance: '250 km',
    duration: '3.5-4 hours',
    pricing: {
      eClass: { min: 160, max: 200, currency: 'EUR' },
      vClass: { min: 210, max: 250, currency: 'EUR' },
      octavia: { min: 135, max: 165, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Direct airport transfer to Thessaloniki, ideal for cruise passengers and tourists.',
    descriptionMk: 'Директен аеродромски трансфер до Солун, идеален за патници на крстарење и туристи.'
  },

  // REGIONAL ROUTES - Bulgaria
  {
    from: 'skopje',
    to: 'sofia',
    distance: '240 km',
    duration: '3.5-4 hours',
    pricing: {
      eClass: { min: 155, max: 195, currency: 'EUR' },
      vClass: { min: 205, max: 245, currency: 'EUR' },
      octavia: { min: 130, max: 160, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Cross-border transfer to Sofia, Bulgaria\'s capital and largest city.',
    descriptionMk: 'Прекуграничен трансфер до Софија, главниот и најголем град на Бугарија.'
  },

  // LONG-DISTANCE ROUTES - Croatia
  {
    from: 'skopje',
    to: 'zagreb',
    distance: '850 km',
    duration: '9-10 hours',
    pricing: {
      eClass: { min: 550, max: 650, currency: 'EUR' },
      vClass: { min: 720, max: 820, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Premium long-distance transfer to Zagreb, Croatia. Includes rest stops and refreshments.',
    descriptionMk: 'Премиум долг трансфер до Загреб, Хрватска. Вклучува одмори и освежителни пијалаци.'
  },
  {
    from: 'skopje',
    to: 'dubrovnik',
    distance: '750 km',
    duration: '8-9 hours',
    pricing: {
      eClass: { min: 480, max: 580, currency: 'EUR' },
      vClass: { min: 640, max: 740, currency: 'EUR' }
    },
    highlights: ['Adriatic coast', 'UNESCO Old Town', 'Game of Thrones filming location'],
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Spectacular transfer to the Pearl of the Adriatic - Dubrovnik.',
    descriptionMk: 'Spektакуларен трансфер до Бисерот на Јадран - Дубровник.'
  },

  // LONG-DISTANCE ROUTES - Montenegro
  {
    from: 'skopje',
    to: 'podgorica',
    distance: '380 km',
    duration: '5-6 hours',
    pricing: {
      eClass: { min: 245, max: 295, currency: 'EUR' },
      vClass: { min: 325, max: 375, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Transfer to Montenegro\'s capital, gateway to the Adriatic coast.',
    descriptionMk: 'Трансфер до главниот град на Црна Гора, капија до јадранскиот брег.'
  },
  {
    from: 'skopje',
    to: 'budva',
    distance: '420 km',
    duration: '5.5-6.5 hours',
    pricing: {
      eClass: { min: 270, max: 320, currency: 'EUR' },
      vClass: { min: 355, max: 405, currency: 'EUR' }
    },
    popular: true,
    highlights: ['Adriatic beaches', 'Old Town', 'Nightlife'],
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Transfer to Budva, Montenegro\'s premier beach resort and entertainment hub.',
    descriptionMk: 'Трансфер до Будва, премиерскиот плажен ресорт и забавен центар на Црна Гора.'
  },

  // LONG-DISTANCE ROUTES - Bosnia
  {
    from: 'skopje',
    to: 'sarajevo',
    distance: '580 km',
    duration: '7-8 hours',
    pricing: {
      eClass: { min: 370, max: 440, currency: 'EUR' },
      vClass: { min: 490, max: 560, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Long-distance transfer to Sarajevo, the heart of Bosnia and Herzegovina.',
    descriptionMk: 'Долг трансфер до Сараево, срцето на Босна и Херцеговина.'
  },

  // LONG-DISTANCE ROUTES - Slovenia
  {
    from: 'skopje',
    to: 'ljubljana',
    distance: '950 km',
    duration: '10-11 hours',
    pricing: {
      eClass: { min: 610, max: 710, currency: 'EUR' },
      vClass: { min: 800, max: 900, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Premium multi-day transfer to Ljubljana. Overnight stop recommended.',
    descriptionMk: 'Премиум повеќедневен трансфер до Љубљана. Препорачливо е ноќевање.'
  },

  // LONG-DISTANCE ROUTES - Hungary
  {
    from: 'skopje',
    to: 'budapest',
    distance: '870 km',
    duration: '9-10 hours',
    pricing: {
      eClass: { min: 560, max: 660, currency: 'EUR' },
      vClass: { min: 735, max: 835, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Executive transfer to the beautiful Hungarian capital, Budapest.',
    descriptionMk: 'Извршен трансфер до прекрасниот унгарски главен град, Будимпешта.'
  },

  // LONG-DISTANCE ROUTES - Austria
  {
    from: 'skopje',
    to: 'vienna',
    distance: '1050 km',
    duration: '11-12 hours',
    pricing: {
      eClass: { min: 675, max: 775, currency: 'EUR' },
      vClass: { min: 885, max: 985, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Premium long-distance transfer to Vienna. Multi-day journey with overnight stop.',
    descriptionMk: 'Премиум долг трансфер до Виена. Повеќедневно патување со ноќевање.'
  },

  // LONG-DISTANCE ROUTES - Italy
  {
    from: 'skopje',
    to: 'venice',
    distance: '1100 km',
    duration: '11-12 hours',
    pricing: {
      eClass: { min: 710, max: 810, currency: 'EUR' },
      vClass: { min: 930, max: 1030, currency: 'EUR' }
    },
    highlights: ['Romantic canals', 'Historic architecture', 'Italian cuisine'],
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Exclusive transfer to Venice, the city of canals. Overnight stop included.',
    descriptionMk: 'Ексклузивен трансфер до Венеција, градот на каналите. Вклучено ноќевање.'
  },
  {
    from: 'skopje',
    to: 'milan',
    distance: '1300 km',
    duration: '13-14 hours',
    pricing: {
      eClass: { min: 840, max: 940, currency: 'EUR' },
      vClass: { min: 1100, max: 1200, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Premium transfer to Milan, Italy\'s fashion capital. Multi-day service.',
    descriptionMk: 'Премиум трансфер до Милано, модната престолнина на Италија. Повеќедневна услуга.'
  },

  // LONG-DISTANCE ROUTES - Switzerland
  {
    from: 'skopje',
    to: 'zurich',
    distance: '1450 km',
    duration: '14-15 hours',
    pricing: {
      eClass: { min: 935, max: 1035, currency: 'EUR' },
      vClass: { min: 1225, max: 1325, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Executive multi-day transfer to Zurich. Includes overnight accommodation stops.',
    descriptionMk: 'Извршен повеќедневен трансфер до Цирих. Вклучува ноќевања.'
  },

  // LONG-DISTANCE ROUTES - Germany
  {
    from: 'skopje',
    to: 'munich',
    distance: '1200 km',
    duration: '12-13 hours',
    pricing: {
      eClass: { min: 775, max: 875, currency: 'EUR' },
      vClass: { min: 1015, max: 1115, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Premium transfer to Munich. Perfect for Oktoberfest or business travel.',
    descriptionMk: 'Премиум трансфер до Минхен. Совршено за Октоберфест или бизнис патувања.'
  },
  {
    from: 'skopje',
    to: 'frankfurt',
    distance: '1500 km',
    duration: '15-16 hours',
    pricing: {
      eClass: { min: 970, max: 1070, currency: 'EUR' },
      vClass: { min: 1270, max: 1370, currency: 'EUR' }
    },
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Long-distance executive transfer to Frankfurt. Multi-day journey with rest stops.',
    descriptionMk: 'Долг извршен трансфер до Франкфурт. Повеќедневно патување со одмори.'
  },

  // LONG-DISTANCE ROUTES - France
  {
    from: 'skopje',
    to: 'nice',
    distance: '1700 km',
    duration: '17-18 hours',
    pricing: {
      eClass: { min: 1100, max: 1200, currency: 'EUR' },
      vClass: { min: 1440, max: 1540, currency: 'EUR' }
    },
    highlights: ['French Riviera', 'Mediterranean coast', 'Luxury destination'],
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Exclusive multi-day transfer to the French Riviera. Premium service with overnight stops.',
    descriptionMk: 'Ексклузивен повеќедневен трансфер до Француската Ривиера. Премиум услуга со ноќевања.'
  },
  {
    from: 'skopje',
    to: 'paris',
    distance: '2000 km',
    duration: '20-22 hours',
    pricing: {
      eClass: { min: 1300, max: 1400, currency: 'EUR' },
      vClass: { min: 1700, max: 1800, currency: 'EUR' }
    },
    popular: true,
    vehicleRecommendations: ['E-Class', 'V-Class'],
    description: 'Ultimate luxury transfer to Paris. Multi-day journey with premium accommodations.',
    descriptionMk: 'Врвен луксузен трансфер до Париз. Повеќедневно патување со премиум сместување.'
  }
];

// Get all routes from a specific origin
export function getRoutesFrom(fromId: string): RouteInfo[] {
  return routes.filter(r => r.from === fromId);
}

// Get all routes to a specific destination
export function getRoutesTo(toId: string): RouteInfo[] {
  return routes.filter(r => r.to === toId);
}

// Get route between two destinations
export function getRoute(fromId: string, toId: string): RouteInfo | undefined {
  return routes.find(r => r.from === fromId && r.to === toId);
}

// Get popular routes
export function getPopularRoutes(): RouteInfo[] {
  return routes.filter(r => r.popular === true);
}

// Get all unique countries
export function getAllCountries(): string[] {
  return [...new Set(destinations.map(d => d.country))];
}
