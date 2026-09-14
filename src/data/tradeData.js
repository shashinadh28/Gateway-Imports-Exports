export const COMPANY_INFO = {
  name: "Gateway Imports and Exports",
  brandName: "Gateway Workforce",
  tagline: "Connecting Global Markets. Powering Indian Businesses.",
  subheading: "Gateway Workforce is an international trading and sourcing company connecting trusted suppliers across the world with opportunities in the Indian market.",
  email: "trade@gatewayworkforce.com",
  phone: "+91 (0) 22 4988 7700",
  location: "Mumbai & New Delhi, India / Global Partner Hubs",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
};

export const SERVICES = [
  {
    id: "global-sourcing",
    title: "Global Sourcing",
    description: "Identifying products and suppliers from international markets based on the requirements of Indian businesses.",
    icon: "Globe2",
    badge: "Origin Discovery",
    details: "Thorough supplier validation, capability assessments, and tailored procurement across competitive international markets.",
  },
  {
    id: "import-trade",
    title: "Import & Trade",
    description: "Facilitating the movement of products from international suppliers into the Indian market.",
    icon: "Ship",
    badge: "Logistics Flow",
    details: "End-to-end trade facilitation, shipping logistics coordination, customs compliance, and port handling.",
  },
  {
    id: "supplier-network",
    title: "Supplier Network",
    description: "Connecting businesses with sourcing opportunities across established international markets.",
    icon: "Network",
    badge: "Direct Connections",
    details: "Direct access to established manufacturing belts across China, Japan, Vietnam, Central Asia, and global trade corridors.",
  },
  {
    id: "product-procurement",
    title: "Product Procurement",
    description: "Supporting businesses in identifying and procuring products across diverse categories.",
    icon: "PackageCheck",
    badge: "Procurement Ops",
    details: "Specification alignment, order consolidation, quality verification, and secure contract coordination.",
  },
  {
    id: "market-opportunities",
    title: "Market Opportunities",
    description: "Exploring international products and supply opportunities with potential in the Indian market.",
    icon: "TrendingUp",
    badge: "Strategic Insights",
    details: "Spotting emerging product trends and high-demand commercial goods with strong margin and supply feasibility.",
  },
  {
    id: "b2b-trading",
    title: "B2B Trading",
    description: "Building reliable trade relationships between international suppliers and Indian buyers.",
    icon: "Handshake",
    badge: "Long-Term Trust",
    details: "Structured trade agreements, transparent communication, and sustainable commercial partnerships.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    description: "Electronics, accessories and technology products.",
    icon: "Cpu",
    tag: "High Demand",
    examples: ["Smart accessories", "Audio peripherals", "Component modules", "Consumer tech"],
    accent: "from-blue-500/20 to-orange-500/10",
  },
  {
    id: "toys-consumer",
    title: "Toys & Consumer Goods",
    description: "Toys, lifestyle products and everyday consumer goods.",
    icon: "Gamepad2",
    tag: "Everyday Retail",
    examples: ["Educational toys", "Household utilities", "Lifestyle goods", "Novelty products"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "industrial",
    title: "Industrial Products",
    description: "Equipment, components and industrial supplies.",
    icon: "Wrench",
    tag: "Factory Grade",
    examples: ["Fasteners & fittings", "Pneumatic parts", "Industrial hardware", "Raw fabrication parts"],
    accent: "from-emerald-500/20 to-orange-500/10",
  },
  {
    id: "energy-commodities",
    title: "Energy & Commodities",
    description: "Selected energy-related products and commodities.",
    icon: "Zap",
    tag: "Strategic Trade",
    examples: ["Solar components", "Specialty chemicals", "Energy storage parts", "Selected commodities"],
    accent: "from-yellow-500/20 to-orange-500/10",
  },
  {
    id: "machinery",
    title: "Machinery & Equipment",
    description: "Machinery, tools and equipment sourced internationally.",
    icon: "Cog",
    tag: "Manufacturing",
    examples: ["Processing machines", "Packaging units", "Precision tooling", "Assembly apparatus"],
    accent: "from-indigo-500/20 to-orange-500/10",
  },
  {
    id: "other",
    title: "Other Products",
    description: "Specialized products based on market requirements.",
    icon: "Boxes",
    tag: "Custom Sourcing",
    examples: ["Bespoke requirements", "Private label specs", "Niche imports", "Bulk inquiries"],
    accent: "from-rose-500/20 to-orange-500/10",
  },
];

export const NETWORK_HUBS = [
  {
    id: "china",
    country: "China",
    flag: "🇨🇳",
    type: "Manufacturing & Sourcing Hub",
    summary: "World-leading electronics, machinery, consumer goods, and rapid hardware prototyping networks.",
    corridor: "East Asia → India Maritime & Air Express",
    coordinates: { x: 74, y: 44 }, // relative % in SVG map
    focus: "Consumer Electronics, Consumer Goods, Industrial Supplies",
  },
  {
    id: "japan",
    country: "Japan",
    flag: "🇯🇵",
    type: "Precision & Technology Hub",
    summary: "Renowned for high-precision components, advanced manufacturing equipment, and specialized technical tools.",
    corridor: "Pacific Corridor → Western & Southern Indian Ports",
    coordinates: { x: 86, y: 39 },
    focus: "Precision Machinery, Electronics, Specialized Components",
  },
  {
    id: "vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    type: "High-Growth Manufacturing Hub",
    summary: "Rapidly expanding production corridor for lifestyle goods, components, consumer goods, and assembly.",
    corridor: "ASEAN Corridors → Bay of Bengal Ports",
    coordinates: { x: 73, y: 55 },
    focus: "Toys, Consumer Goods, Assembly Hardware",
  },
  {
    id: "kyrgyzstan",
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    type: "Central Asian Trade Bridge",
    summary: "Strategic Eurasian gateway for regional commodities, specialized raw materials, and cross-border trade.",
    corridor: "Silk Route Land & Multimodal Transit → Northern India",
    coordinates: { x: 62, y: 36 },
    focus: "Selected Commodities, Regional Specialities, Bulk Trade",
  },
  {
    id: "other",
    country: "Other Global Markets",
    flag: "🌍",
    type: "Worldwide Trade Corridors",
    summary: "Agile sourcing across Southeast Asia, Middle East, and European manufacturing centers based on buyer demand.",
    corridor: "Global Trade Lines → Major Indian Gateways",
    coordinates: { x: 38, y: 46 },
    focus: "On-demand B2B procurement & niche product categories",
  },
];

export const DESTINATION_INDIA = {
  id: "india",
  country: "India",
  flag: "🇮🇳",
  coordinates: { x: 65, y: 53 },
  role: "Target Destination & Distribution",
  ports: "Nhava Sheva (Mumbai), Mundra, Chennai, Kolkata, Delhi Air Cargo",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Requirement",
    description: "Share your product or sourcing requirement with us.",
    details: "Provide your exact specifications, target volumes, compliance standards, and pricing goals. Our trade specialists review feasibility immediately.",
    icon: "FileText",
  },
  {
    step: "02",
    title: "Global Sourcing",
    description: "We explore suitable international suppliers and markets.",
    details: "We screen reliable suppliers across China, Japan, Vietnam, Central Asia, and other hubs to find the best match for quality and commercial viability.",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Trade Coordination",
    description: "We coordinate the sourcing and international trade process.",
    details: "From supplier alignment to export documentation, freight coordination, and trade facilitation, we manage each milestone with precision.",
    icon: "Truck",
  },
  {
    step: "04",
    title: "Indian Market",
    description: "Products are brought into the Indian market based on the requirement.",
    details: "Smooth customs clearance facilitation and coordinated delivery directly to your Indian facility or distribution network.",
    icon: "MapPin",
  },
];

export const WHY_US_POINTS = [
  {
    title: "Global Reach",
    description: "Access to sourcing opportunities across international markets.",
    icon: "Globe",
    highlight: "Direct presence across established global export hubs",
  },
  {
    title: "Diverse Product Opportunities",
    description: "Explore products across multiple industries and categories.",
    icon: "Layers",
    highlight: "Cross-category sourcing agility from electronics to machinery",
  },
  {
    title: "B2B Focus",
    description: "Built around business-to-business sourcing and trading relationships.",
    icon: "Building2",
    highlight: "Tailored to wholesale, enterprise, and manufacturing volumes",
  },
  {
    title: "Market Connectivity",
    description: "Connecting international supply with opportunities in India.",
    icon: "Route",
    highlight: "Bridging foreign manufacturing belts with Indian industrial demand",
  },
  {
    title: "Long-Term Partnerships",
    description: "Focused on building sustainable relationships with suppliers and buyers.",
    icon: "ShieldCheck",
    highlight: "Committed to reliability, consistency, and transparent execution",
  },
];

export const EXECUTIVE_TEAM = [
  {
    id: "somaiya-akter",
    name: "Somaiya Akter",
    role: "Chief Trade Officer",
    image: null,
    placeholderLabel: "Executive 1 (Arch Portrait)",
  },
  {
    id: "duhan-homenith",
    name: "Duhan Homenith",
    role: "Head of Global Sourcing",
    image: null,
    placeholderLabel: "Executive 2 (Arch Portrait)",
  },
  {
    id: "monia-ramon",
    name: "Monia Ramon",
    role: "Supply Chain Director",
    image: null,
    placeholderLabel: "Executive 3 (Arch Portrait)",
  },
  {
    id: "saad-alam",
    name: "Saad Alam",
    role: "Customs & Compliance Lead",
    image: null,
    placeholderLabel: "Executive 4 (Arch Portrait)",
  },
];

export const FAQ_ITEMS = [
  {
    question: "1. Is it full transport, logistics & international sourcing?",
    answer: "Yes. Gateway Workforce provides integrated cross-border trade facilitation. We identify verified global manufacturers, negotiate commercial supply agreements, inspect specifications, and coordinate end-to-end maritime and air cargo logistics directly into major Indian trade ports.",
  },
  {
    question: "2. How do you verify international suppliers before shipping?",
    answer: "Our international sourcing desks conduct rigorous background audits, business license validation, factory capacity evaluations, and pre-shipment quality inspections before any cargo leaves overseas warehouses.",
  },
  {
    question: "3. What product categories can Indian businesses source through you?",
    answer: "We specialize in consumer electronics, machinery & industrial tools, toys & consumer goods, energy equipment, hardware components, and bespoke commercial procurement tailored to your exact bill of materials.",
  },
  {
    question: "4. What customs and import documentation do you handle?",
    answer: "We facilitate comprehensive customs clearance coordination, including Harmonized System (HS) code classification, Bill of Lading documentation, certificates of origin, import compliance, and GST tax clearance support.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Singhania",
    role: "Director of Procurement, Zenith Electronics",
    quote: "Gateway Workforce solved our overseas component bottleneck. Their supplier network in East Asia provided consistent batch quality and prompt maritime dispatch.",
    rating: 5,
    avatar: null,
  },
  {
    id: 2,
    name: "Madhavi Rao",
    role: "Managing Partner, Apex Retail Hub",
    quote: "Sourcing consumer lifestyle goods directly into Mumbai was seamless. Gateway managed vendor negotiations and customs documentation with zero delays.",
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    name: "Vikramaditya Mehta",
    role: "Chief Operating Officer, Indus Precision Tools",
    quote: "Their transparent communication and deep understanding of international trade corridors make Gateway Workforce our trusted long-term global sourcing partner.",
    rating: 5,
    avatar: null,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "New Additions To Our Global Sourcing Corridors",
    date: "18 Aug 2024",
    author: "By Admin",
    category: "Trade Corridors",
    summary: "Expanding direct manufacturing connections across Vietnam and East Asia for rapid electronics procurement.",
    image: null,
  },
  {
    id: 2,
    title: "Customs Delivery & Spring Freight Rates in 2024",
    date: "24 Aug 2024",
    author: "By Admin",
    category: "Logistics",
    summary: "Navigating international maritime tariff adjustments and optimizing container cargo loads for Indian ports.",
    image: null,
  },
  {
    id: 3,
    title: "Solving Complexity Across Long Haul Ocean Logistics",
    date: "02 Sep 2024",
    author: "By Admin",
    category: "Supply Chain",
    summary: "Best practices for multi-modal freight tracking, cargo safety insurance, and expedited customs clearance.",
    image: null,
  },
];

