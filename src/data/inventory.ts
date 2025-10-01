export type GearCategory =
  | 'Switcher'
  | 'I/O Card'
  | 'Switcher Console'
  | 'Camera'
  | 'Support'
  | 'Rigging'
  | 'OB';

export type GearAvailability = 'In Stock' | 'On Request';

export interface GearItem {
  id: string;
  slug: string;
  name: string;
  category: GearCategory;
  brand: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  specs: string[];
  availability: GearAvailability;
}

export const inventory: GearItem[] = [
  {
    id: 'bm-production-studio-4k',
    slug: 'blackmagic-production-studio-4k',
    name: 'Blackmagic Production Studio 4K',
    category: 'Switcher',
    brand: 'Blackmagic Design',
    images: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Ultra HD live production switcher with 6G-SDI and HDMI connections.',
    longDescription:
      'The Blackmagic Production Studio 4K delivers advanced 4K UHD live switching with a familiar broadcast workflow. Ideal for multi-camera productions requiring SD, HD, and Ultra HD in a single unit.',
    specs: [
      '8 x 6G-SDI / HDMI 4K inputs',
      'Built-in multi-view with 4 views',
      'Integrated 8 channel audio mixer',
      'Assignable aux output'
    ],
    availability: 'In Stock'
  },
  {
    id: 'bm-decklink-quad-2',
    slug: 'blackmagic-decklink-quad-2',
    name: 'Blackmagic DeckLink Quad 2',
    category: 'I/O Card',
    brand: 'Blackmagic Design',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: '8-channel SDI capture and playback on a single PCIe card.',
    longDescription:
      'DeckLink Quad 2 is engineered for broadcast professionals who need maximum flexibility in SDI capture and output. Each channel can be configured independently for format and direction, empowering complex studio pipelines.',
    specs: [
      '8 independent 3G-SDI connections',
      'Switchable between capture or playback per channel',
      'Supports SD to 1080p60',
      'Genlock and tri-sync support'
    ],
    availability: 'On Request'
  },
  {
    id: 'atem-1-me-4k',
    slug: 'blackmagic-atem-1-me-production-studio-4k',
    name: 'Blackmagic ATEM 1 M/E Production Studio 4K',
    category: 'Switcher Console',
    brand: 'Blackmagic Design',
    images: [
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512427691650-1e0c0f28b31d?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Compact 4K live production switcher with professional control surface.',
    longDescription:
      'The ATEM 1 M/E Production Studio 4K combines powerful live switching with a tactile control surface for precise operation. Perfect for flypacks and control rooms that demand reliability and speed.',
    specs: [
      '10 x 6G-SDI inputs',
      '4 built-in chroma keyers',
      'Multi-view with 10 windows',
      '2 downstream keyers'
    ],
    availability: 'In Stock'
  },
  {
    id: 'sony-pxw-x70',
    slug: 'sony-pxw-x70',
    name: 'Sony PXW-X70',
    category: 'Camera',
    brand: 'Sony',
    images: [
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Compact 4K-ready XDCAM camcorder with 1.0-type sensor.',
    longDescription:
      'Sony’s PXW-X70 delivers broadcast-quality images from a portable package. With Wi-Fi streaming, dual XLR audio, and flexible recording codecs, it’s a workhorse for documentary and live event capture.',
    specs: [
      '1.0-type Exmor R CMOS sensor',
      'Up to 4K recording via upgrade',
      '3G-SDI and HDMI outputs',
      'Dual XLR professional audio'
    ],
    availability: 'In Stock'
  },
  {
    id: 'gimbal-pro',
    slug: '3-axis-gimbal-pro',
    name: '3-Axis Gimbal (Pro)',
    category: 'Support',
    brand: 'DJI',
    images: [
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Precision-balanced gimbal for cinematic stabilization.',
    longDescription:
      'This professional 3-axis gimbal supports mirrorless and cinema cameras with smooth stabilization and customizable profiles for dynamic movement sequences.',
    specs: [
      'Payload up to 4.5 kg',
      'Auto-tune stabilization profiles',
      'Modular accessory ecosystem',
      '12-hour battery life'
    ],
    availability: 'In Stock'
  },
  {
    id: 'carbon-fiber-tripod',
    slug: 'carbon-fiber-tripod',
    name: 'Carbon Fiber Tripod',
    category: 'Rigging',
    brand: 'Sachtler',
    images: [
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Lightweight carbon sticks with fluid head for fast setups.',
    longDescription:
      'Engineered for travel and fast-paced productions, this carbon fiber tripod delivers strong torsional rigidity with a fluid head for silky pans and tilts.',
    specs: [
      '75mm bowl with fluid head',
      'Height range 0.6m – 1.7m',
      'Quick-release camera plate',
      'Weather-sealed leg locks'
    ],
    availability: 'In Stock'
  },
  {
    id: 'portable-jib-arm',
    slug: 'portable-jib-arm',
    name: 'Portable JIB Arm',
    category: 'Rigging',
    brand: 'Kessler',
    images: [
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Compact jib system for sweeping cinematic moves.',
    longDescription:
      'The portable jib arm packs down for travel yet delivers extended reach and smooth vertical motion. Ideal for live events needing dynamic camera angles.',
    specs: [
      'Maximum reach 2.2m',
      'Integrated counterbalance system',
      'Tool-less setup',
      'Mitchell / 100mm bowl base compatibility'
    ],
    availability: 'On Request'
  },
  {
    id: 'full-production-ob',
    slug: 'full-production-ob',
    name: 'Full Production OB',
    category: 'OB',
    brand: 'Vider Rentals',
    images: [
      'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'All-in-one outside broadcast truck package for turnkey productions.',
    longDescription:
      'Our flagship OB solution includes multi-camera switching, full audio suites, graphics, comms, and redundancy built for mission-critical broadcasts. Delivered with engineering support and integration.',
    specs: [
      '12-camera 4K / HD switcher core',
      'Integrated Dante audio infrastructure',
      'Replay and graphics workstations',
      'Redundant power and climate control'
    ],
    availability: 'On Request'
  }
];

export const featuredGear = inventory.slice(0, 5);
