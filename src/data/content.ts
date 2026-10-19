export interface NavItem {
  label: string;
  href: string;
}

export interface QuickVisitItem {
  number: string;
  label: string;
  href: string;
}

export interface PillarCard {
  pillarLabel: string;
  title: string;
  description: string;
  tags: {
    label: string;
    href: string;
  }[];
}

export interface SlideImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface EcosystemCardData {
  id: string;
  category: string;
  badgeRight?: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
  image?: SlideImage;
  images?: SlideImage[];
}

export interface ResearchCardData {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaIcon: "download" | "arrow-right";
  href: string;
  image: SlideImage;
}

export interface NextStepCardData {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  variant: "solid" | "outline";
}

export interface FooterColumn {
  heading: string;
  headingUppercase?: boolean;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: "instagram" | "x" | "linkedin" | "youtube" | "tiktok";
  label: string;
  href: string;
}

export const siteContent = {
  brand: {
    name: "Crystal Kizor",
    logo: {
      src: "/images/crystal-kizor-logo.png",
      alt: "Crystal Kizor Logo",
    },
    email: "crystalkizor@gmail.com",
    copyright: "2026, Crystal Kizor. All rights reserved,",
    footerWordmark: "CRYSTAL KIZOR",
  },

  navigation: {
    links: [
      { label: "MY PHILOSOPHY", href: "#my-philosophy" },
      { label: "THE ECOSYSTEM", href: "#the-ecosystem" },
      { label: "RESEARCH & WRITINGS", href: "#research-media" },
    ] as NavItem[],
    cta: {
      label: "START HERE",
      href: "#next-steps",
    },
  },

  hero: {
    headline:
      "Designing climate-responsive spaces, contextual products and empowering people.",
    highlightedName: "Crystal Kizor",
    subheadlineRest:
      "is the Lead Principal at Studio COKA and the founder of an interconnected ecosystem advancing African architecture, functional design, professional education, and youth transformation.",
    primaryCta: {
      label: "SEE THE ECOSYSTEM",
      href: "#the-ecosystem",
    },
    secondaryCta: {
      label: "BOOK A CALL",
      href: "mailto:crystalkizor@gmail.com?subject=Book%20a%20Call%20with%20Crystal%20Kizor",
    },
    portrait: {
      src: "/images/hero-image.png",
      alt: "Crystal Kizor — Architect, Designer, Entrepreneur & Speaker",
    },
  },

  quickVisit: {
    label: "I am visiting to:",
    row1: [
      {
        number: "01.",
        label: "Build or Design a Space (Studio COKA)",
        href: "#studio-coka",
      },
      {
        number: "02.",
        label: "Furnish with African Design (ELEvated)",
        href: "#elevated",
      },
      {
        number: "03.",
        label: "Grow my Architecture Career (TEA)",
        href: "#tea",
      },
    ] as QuickVisitItem[],
    row2: [
      {
        number: "04.",
        label: "Book Crystal to Speak",
        href: "#speaking-engagements",
      },
      {
        number: "05.",
        label: "Partner on Youth & Education Impact",
        href: "#ako-alliance",
      },
    ] as QuickVisitItem[],
  },

  philosophy: {
    eyebrow: "MY PHILOSOPHY",
    headingLine1: "Seven expressions. Three pillars. One",
    headingLine2Prefix: "foundational mission: ",
    headingLine2Italic: "Intentional building.",
    introParagraph:
      "Whether designing an off-grid solar hospital, crafting locally rooted furniture, mentoring emerging architects, or discipling young people, every initiative in the Crystal Kizor ecosystem is connected by three core pillars.",
    pillars: [
      {
        pillarLabel: "PILLAR I",
        title: "Spaces & Objects",
        description:
          "Solving environmental and functional challenges through climate-responsive architecture and contemporary African product design.",
        tags: [
          { label: "Studio COKA", href: "#studio-coka" },
          { label: "ELEvated", href: "#elevated" },
        ],
      },
      {
        pillarLabel: "PILLAR II",
        title: "Industry & Ideas",
        description:
          "Equipping built-environment professionals, publishing original urban research, and shaping global conversations on African cities.",
        tags: [
          { label: "The Effective Architect", href: "#tea" },
          { label: "Speaking", href: "#speaking-engagements" },
          { label: "Research", href: "#research-media" },
        ],
      },
      {
        pillarLabel: "PILLAR III",
        title: "Youth, Education & Faith",
        description:
          "Expanding educational access for underserved children and guiding young people into identity, healing, and purpose in Christ.",
        tags: [
          { label: "Ako Alliance", href: "#ako-alliance" },
          { label: "Alive and Free", href: "#alive-and-free" },
        ],
      },
    ] as PillarCard[],
  },

  ecosystem: {
    eyebrow: "THE ECOSYSTEM",
    heading: "Ventures, Platforms & Initiatives",
    studioCoka: {
      id: "studio-coka",
      category: "ARCHITECTURE, INTERIORS & CONSTRUCTION",
      badgeRight: "FLAGSHIP STUDIO",
      title: "Studio COKA",
      description:
        "An architecture, interior design, and construction studio focused on thoughtful, climate-responsive design. From off-grid solar healthcare facilities to intelligent micro-living spaces, Studio COKA builds for longevity, passive comfort, and human dignity.",
      ctaLabel: "Explore Studio COKA",
      href: "mailto:crystalkizor@gmail.com?subject=Studio%20COKA%20Inquiry",
      images: [
        {
          src: "/images/studio-coka.png",
          alt: "Studio COKA Architecture & Exterior Courtyard",
          objectPosition: "center 59%",
        },
        {
          src: "/images/ecosystem/studio/studio-slide-1.jpeg",
          alt: "Studio COKA Facade & Outdoor Terrace",
          objectPosition: "center 45%",
        },
        {
          src: "/images/ecosystem/studio/studio-slide-2.jpeg",
          alt: "Studio COKA Interior Design & Warm Drapery",
          objectPosition: "center 42%",
        },
        {
          src: "/images/ecosystem/studio/studio-slide-3.jpeg",
          alt: "Studio COKA Timber-Accented Wellness & Fitness Space",
          objectPosition: "center 52%",
        },
      ],
    } as EcosystemCardData,
    speaking: {
      id: "speaking-engagements",
      category: "KEYNOTES, PANELS & CONVERSATIONS",
      title: "Speaking Engagements",
      description:
        "Thought-provoking talks on climate-responsive architecture, the future of African cities, sustainable construction, and building resilient design businesses.",
      ctaLabel: "Book Crystal to Speak",
      href: "mailto:crystalkizor@gmail.com?subject=Speaking%20Engagement%20Inquiry",
      image: {
        src: "/images/speaking-engagements.png",
        alt: "Crystal Kizor speaking on stage",
        objectPosition: "center 18%",
      },
    } as EcosystemCardData,
    tea: {
      id: "tea",
      category: "ARCHITECTURE EDUCATION & MEDIA",
      title: "The Effective Architect (TEA)",
      description:
        "An education and media platform equipping architects and built-environment professionals with the practical business, technical, and career strategies never taught in design school.",
      ctaLabel: "Join TEA Platform",
      href: "mailto:crystalkizor@gmail.com?subject=The%20Effective%20Architect%20(TEA)",
    } as EcosystemCardData,
    akoAlliance: {
      id: "ako-alliance",
      category: "EDUCATIONAL ACCESS INITIATIVE",
      title: "AKO Alliance",
      description:
        "A social impact initiative dedicated to expanding access to quality education and creating tangible learning opportunities for children and young people.",
      ctaLabel: "Partner with AKO",
      href: "mailto:crystalkizor@gmail.com?subject=Partner%20with%20AKO%20Alliance",
    } as EcosystemCardData,
    aliveAndFree: {
      id: "alive-and-free",
      category: "FAITH & YOUTH MOVEMENT",
      title: "Alive and Free",
      description:
        "A Christian youth movement helping young people walk in truth, emotional and spiritual healing, freedom, identity, purpose, and vibrant life in Christ.",
      ctaLabel: "Connect with Alive & Free",
      href: "mailto:crystalkizor@gmail.com?subject=Connect%20with%20Alive%20and%20Free",
    } as EcosystemCardData,
    elevated: {
      id: "elevated",
      category: "FURNITURE & PRODUCT DESIGN",
      badgeRight: "AFRICAN CRAFT",
      title: "ELEvated",
      description:
        "A contemporary furniture and product design brand creating functional, well-designed pieces rooted in African context, indigenous materials, and timeless craftsmanship.",
      ctaLabel: "Explore ELEvated",
      href: "mailto:crystalkizor@gmail.com?subject=ELEvated%20Design%20Inquiry",
      images: [
        {
          src: "/images/elevated.png",
          alt: "ELEvated Contemporary African Space & Craftsmanship",
          objectPosition: "center 67%",
        },
        {
          src: "/images/ecosystem/elevate/elevated-slide-1.jpeg",
          alt: "ELEvated Bespoke African Dining Table & Chairs",
          objectPosition: "center 68%",
        },
        {
          src: "/images/ecosystem/elevate/elevated-slide-2.png",
          alt: "ELEvated Terracotta Screen & Timber Architecture",
          objectPosition: "center 58%",
        },
      ],
    } as EcosystemCardData,
  },

  researchMedia: {
    eyebrow: "RESEARCH & WRITINGS",
    heading: "Selected Research, Guides & Essays",
    archiveLink: {
      label: "Read Full Archive",
      href: "#research-media",
    },
    items: [
      {
        id: "spatial-guide",
        category: "FREE ARCHITECTURAL GUIDE",
        title:
          "7 Things to Check Before You Build, Buy, Rent, or Redesign a Space",
        description:
          "A practical spatial evaluation checklist helping homeowners and developers avoid costly structural and environmental mistakes.",
        ctaLabel: "Download the Guide",
        ctaIcon: "download",
        href: "mailto:crystalkizor@gmail.com?subject=Request%3A%207%20Things%20to%20Check%20Spatial%20Guide",
        image: {
          src: "/images/research/research-spatial-guide.jpg",
          alt: "Architectural Spatial Evaluation & Design Guide",
          objectPosition: "center",
        },
      },
      {
        id: "off-grid-healthcare",
        category: "CLIMATE RESEARCH & CASE STUDY",
        title:
          "Designing Off-Grid Healthcare: Passive Cooling in Tropical Climates",
        description:
          "How natural cross-ventilation, solar integration, and thermal mass eliminate reliance on mechanical air conditioning.",
        ctaLabel: "Read Research Note",
        ctaIcon: "arrow-right",
        href: "mailto:crystalkizor@gmail.com?subject=Request%3A%20Off-Grid%20Healthcare%20Research%20Note",
        image: {
          src: "/images/research/research-passive-cooling.jpg",
          alt: "Passive Cooling & Climate-Responsive Tropical Architecture",
          objectPosition: "center",
        },
      },
      {
        id: "compact-urban-living",
        category: "URBANISM & CULTURE",
        title:
          "Rethinking Compact Urban Living & Empty Ancestral Homes in Africa",
        description:
          "Exploring micro-apartment efficiency (Project ARAM) and why culturally grounded spatial planning matters for modern African cities.",
        ctaLabel: "Watch & Read",
        ctaIcon: "arrow-right",
        href: "mailto:crystalkizor@gmail.com?subject=Request%3A%20Project%20ARAM%20Urbanism%20Study",
        image: {
          src: "/images/research/research-urban-living.jpg",
          alt: "Compact Urban Living & Contemporary African Residential Design",
          objectPosition: "center",
        },
      },
    ] as ResearchCardData[],
  },

  nextSteps: {
    eyebrow: "WHAT SHOULD YOU DO NEXT?",
    heading: "Choose your path into the ecosystem.",
    introParagraph:
      "Whether you are commissioning a building, furnishing an interior, organizing a conference, or looking to collaborate on impact, start right here.",
    cards: [
      {
        id: "commission",
        title: "Commission a Project or Product",
        description:
          "Inquire about architectural design, construction with Studio COKA, or bespoke furniture from ELEvated.",
        ctaLabel: "START A PROJECT INQUIRY",
        href: "mailto:crystalkizor@gmail.com?subject=Project%20or%20Product%20Inquiry%20(Studio%20COKA%20%2F%20ELEvated)",
        variant: "solid",
      },
      {
        id: "speak",
        title: "Book Crystal to Speak",
        description:
          "Invite Crystal for keynotes, panels, university lectures, or media features on architecture and entrepreneurship.",
        ctaLabel: "REQUEST SPEAKING KIT",
        href: "mailto:crystalkizor@gmail.com?subject=Request%20Speaking%20Kit%20—%20Crystal%20Kizor",
        variant: "outline",
      },
      {
        id: "partner",
        title: "Partner on Purpose",
        description:
          "Support educational access with AKO Alliance or connect with the Alive and Free youth movement.",
        ctaLabel: "COLLABORATE ON IMPACT",
        href: "mailto:crystalkizor@gmail.com?subject=Impact%20Collaboration%20(AKO%20Alliance%20%2F%20Alive%20and%20Free)",
        variant: "outline",
      },
      {
        id: "learn",
        title: "Learn & Grow with TEA",
        description:
          "Access career resources through The Effective Architect or download Crystal's spatial evaluation guides.",
        ctaLabel: "EXPLORE TEA & GUIDES",
        href: "#research-media",
        variant: "outline",
      },
    ] as NextStepCardData[],
  },

  footer: {
    enquiryHeading: "FOR FURTHER ENQUIRES, SEND AN EMAIL",
    columns: [
      {
        heading: "SPACES & OBJECTS",
        headingUppercase: true,
        links: [
          { label: "Studio COKA", href: "#studio-coka" },
          { label: "ELEvated", href: "#elevated" },
        ],
      },
      {
        heading: "INDUSTRY & IDEAS",
        headingUppercase: true,
        links: [
          { label: "The Effective Architect", href: "#tea" },
          { label: "Speaking Engagements", href: "#speaking-engagements" },
          {
            label: "Personal Research, Guides & Essays",
            href: "#research-media",
          },
        ],
      },
      {
        heading: "YOUTH, EDUCATION & FAITH",
        headingUppercase: false,
        links: [
          { label: "Ako Alliance", href: "#ako-alliance" },
          { label: "Alive and Free", href: "#alive-and-free" },
        ],
      },
    ] as FooterColumn[],
    socialHeading: "Connect with me via:",
    socials: [
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/crystalkizor/",
      },
      {
        platform: "x",
        label: "X (Twitter)",
        href: "https://x.com/crystal_kizor",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/crystal-kizor/",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@crystalkizor?si=F_pTugZB01Bxh4Jo",
      },
      {
        platform: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@crystalkizor",
      },
    ] as SocialLink[],
  },
};
