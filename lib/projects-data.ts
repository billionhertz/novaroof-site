export interface Project {
  slug: string;
  name: string;
  location: string;
  category: string;
  roofType: string;
  systemDescription: string;
  description: string;
  image: string;
  /** Slug of the roof system in roof-systems-data.ts this project used. Links the case study to /systems/<systemSlug>. */
  systemSlug: string;
  /** Slug of the city in cities-data.ts, set ONLY when a matching /service-area/<citySlug> page exists. Leave undefined for locations without a city page. */
  citySlug?: string;
  squareFootage?: string;
  completedYear?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

export const projects: Project[] = [
  {
    slug: "lynn-haven-baptist-church",
    name: "Lynn Haven Baptist Church",
    location: "Chesapeake, VA",
    category: "METAL RESTORATION",
    roofType: "Metal Roof Restoration",
    systemDescription: "Seamless Polyurethane-Modified Acrylic Coating System (20-Year)",
    description: "This large church facility's standing seam metal roof was experiencing widespread leaks at fasteners and seams, along with significant rust development. The congregation needed a cost-effective solution that wouldn't disrupt Sunday services.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lynnhaven-baptist-church-metal-roof-restoration-ZhILPqOPRBfVppG4XcZ1ZYoxkag8MR.jpg",
    systemSlug: "metal-restoration",
    squareFootage: "32,000 sq ft",
    completedYear: "2024",
    challenge: "The church's metal roof had multiple leak points and advancing rust. The facility is in constant use, requiring a restoration approach that minimized disruption.",
    solution: "We applied our 20-year seamless polyurethane-modified acrylic coating system. This included thorough rust treatment, fastener sealing, seam reinforcement with embedded fabric, and multiple coating passes.",
    results: [
      "Eliminated all active leaks",
      "20-year manufacturer warranty",
      "No disruption to church services",
      "Significant energy savings from reflective coating"
    ]
  },
  {
    slug: "peterbilt-richmond",
    name: "Peterbilt Store",
    location: "Richmond, VA",
    category: "RESTORATION",
    roofType: "Spray Foam Restoration",
    systemDescription: "Polyurethane Spray Foam with Acrylic Coating System",
    description: "This commercial truck dealership and service center needed a roofing solution that could handle the demanding industrial environment while improving energy efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peterbilt-richmond-va-spray-foam-roof-restoration-Ev7OvUCYw68YFCJC9ArYWUAvgwrrOQ.jpg",
    systemSlug: "spray-foam",
    citySlug: "richmond",
    squareFootage: "48,000 sq ft",
    completedYear: "2024",
    challenge: "The existing modified bitumen roof had multiple leak points and poor insulation. The facility's large bay doors and heavy HVAC demands made energy efficiency critical.",
    solution: "We installed a spray foam roofing system with acrylic topcoat. The seamless application addressed all leak points while adding significant insulation value.",
    results: [
      "Seamless waterproof membrane",
      "Dramatically improved insulation (R-30+)",
      "Reduced HVAC costs",
      "15-year warranty with renewal options"
    ]
  },
  {
    slug: "kirby-cundiff-insulation",
    name: "Kirby Cundiff Insulation",
    location: "Salem, VA",
    category: "RESTORATION",
    roofType: "Spray Foam Restoration",
    systemDescription: "Polyurethane Spray Foam with Acrylic Coating System",
    description: "This insulation contractor's headquarters presented an interesting challenge — they needed a roofing solution that demonstrated the energy efficiency they sell to their own customers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kirby-cundiff-insulation-spray-foam-roof-restoration-7H7XgSbvqZxbmzmCJM73F1cSa0hiE0.jpg",
    systemSlug: "spray-foam",
    squareFootage: "18,000 sq ft",
    completedYear: "2023",
    challenge: "The existing flat roof had ponding water issues and insufficient insulation. As an insulation contractor, the company wanted a roof that showcased energy efficiency.",
    solution: "Spray foam roofing was the obvious choice. We addressed ponding by building up low areas and created a seamless, highly insulated roof system.",
    results: [
      "Eliminated ponding water",
      "Superior insulation value",
      "Showcase project for client's business",
      "Minimal business disruption"
    ]
  },
  {
    slug: "jwb-contractors-radford",
    name: "JWB Contractors",
    location: "Radford, VA",
    category: "RESTORATION",
    roofType: "Spray Foam Restoration",
    systemDescription: "Polyurethane Spray Foam with Acrylic Coating System",
    description: "This general contractor's office and warehouse facility needed a comprehensive roof restoration that could be completed quickly to avoid disruption to their operations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jwb-contractors-radford-va-spray-foam-roof-restoration-ARHWb99Cxmg3W5VK616dfi3CaZ4BXT.jpg",
    systemSlug: "spray-foam",
    squareFootage: "22,000 sq ft",
    completedYear: "2023",
    challenge: "Multiple leak points throughout the facility were affecting office operations and stored materials. The company needed a fast solution with minimal disruption.",
    solution: "Spray foam provided the fastest path to a watertight roof. We completed the project in under a week, sealing all penetrations and creating a seamless membrane.",
    results: [
      "Completed in one week",
      "All leaks eliminated",
      "Improved energy efficiency",
      "15-year warranty"
    ]
  },
  {
    slug: "james-river-equipment",
    name: "James River Equipment",
    location: "Harrisonburg, VA",
    category: "METAL RESTORATION",
    roofType: "TPO Retrofit Over Metal",
    systemDescription: "60-Mil TPO Overlay Retrofit System (20-Year)",
    description: "This John Deere equipment dealership's large metal roof was leaking at numerous points. Rather than replace the metal, we installed a complete TPO overlay system.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/james-river-equipment-tpo-retrofit-metal-roof-HyiXonvhYgM89zJGLUsAxdZrT60iQd.jpg",
    systemSlug: "tpo",
    citySlug: "harrisonburg",
    squareFootage: "42,000 sq ft",
    completedYear: "2024",
    challenge: "The standing seam metal roof had widespread leaks at fasteners and seams. A traditional metal replacement would have been extremely expensive for this large facility.",
    solution: "We installed a 60-mil TPO membrane directly over the existing metal roof with new polyiso insulation. This created a completely new roof without tear-off.",
    results: [
      "Full 20-year manufacturer warranty",
      "Significant cost savings vs. metal replacement",
      "Improved insulation value",
      "No tear-off waste"
    ]
  },
  {
    slug: "los-trancas-woodstock",
    name: "Los Trancas Restaurant",
    location: "Woodstock, VA",
    category: "REPLACEMENT",
    roofType: "PVC Roof Replacement",
    systemDescription: "25-Year PVC Membrane with R-30 Polyiso Insulation",
    description: "This busy Mexican restaurant needed a roof system that could handle grease exposure from kitchen exhaust. PVC's chemical resistance made it the clear choice.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/los-trancas-restaurant-woodstock-pvc-roof-replacement-lntYk7Tq2fIL7Qncmo9d7TAGbcx8Yo.jpg",
    systemSlug: "pvc",
    citySlug: "woodstock",
    squareFootage: "5,500 sq ft",
    completedYear: "2024",
    challenge: "Restaurant roofs face unique challenges from grease and cooking oils. The existing EPDM roof was deteriorating rapidly from chemical exposure.",
    solution: "We installed a 60-mil PVC membrane system with R-30 polyiso insulation. PVC's inherent resistance to grease and chemicals ensures long-term performance.",
    results: [
      "Chemical-resistant membrane",
      "25-year manufacturer warranty",
      "Improved energy efficiency",
      "Proper protection for restaurant environment"
    ]
  },
  {
    slug: "augusta-seed-verona",
    name: "Augusta Seed",
    location: "Verona, VA",
    category: "METAL RESTORATION",
    roofType: "Metal Roof Restoration",
    systemDescription: "Seamless Metal Roof Restoration System (10-Year)",
    description: "This agricultural seed company's metal warehouse roof needed restoration to stop leaks and prevent further rust development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/augusta-seed-verona-va-metal-roof-restoration-kcFmmNvwfZ6stMiSfIoU9JteXwnfbc.jpg",
    systemSlug: "metal-restoration",
    citySlug: "verona",
    squareFootage: "28,000 sq ft",
    completedYear: "2023",
    challenge: "Widespread rust and leaks were threatening stored seed inventory. The company needed a cost-effective solution that could be completed quickly.",
    solution: "Our 10-year metal restoration system addressed rust, sealed all fasteners and seams, and provided a reflective coating to reduce interior temperatures.",
    results: [
      "Eliminated leaks protecting inventory",
      "Significant cost savings vs. replacement",
      "Reduced interior temperatures",
      "10-year warranty"
    ]
  },
  {
    slug: "oakley-market-lynchburg",
    name: "Oakley Market",
    location: "Lynchburg, VA",
    category: "REPLACEMENT",
    roofType: "TPO Roof Replacement",
    systemDescription: "60-Mil TPO Membrane with Polyiso Insulation (20-Year)",
    description: "This neighborhood grocery store's aging built-up roof needed full replacement. TPO provided the durability and energy efficiency the owner was looking for.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oakley-market-lynchburg-tpo-roof-replacement-STJgqER346qYviiFDoO9uXmSZ7K7am.jpg",
    systemSlug: "tpo",
    citySlug: "lynchburg",
    squareFootage: "8,200 sq ft",
    completedYear: "2023",
    challenge: "The existing built-up roof had reached end of life with multiple leak points. The store needed minimal disruption during replacement.",
    solution: "Complete tear-off and installation of 60-mil TPO with new polyiso insulation. Work was scheduled to minimize impact on store operations.",
    results: [
      "20-year manufacturer warranty",
      "Improved energy efficiency",
      "No disruption to store operations",
      "Modern, reflective roof system"
    ]
  },
  {
    slug: "family-dollar-china-grove",
    name: "Family Dollar",
    location: "China Grove, NC",
    category: "METAL RESTORATION",
    roofType: "Metal Roof Restoration",
    systemDescription: "Seamless Polyurethane-Modified Acrylic Coating System",
    description: "This retail location's metal roof was experiencing widespread rust and multiple leaks. Our restoration system extended the roof's life at a fraction of replacement cost.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-dollar-china-grove-metal-roof-restoration-4hBT8qpT0Rq3ybYpzbllAkqM594lIa.jpg",
    systemSlug: "metal-restoration",
    squareFootage: "8,500 sq ft",
    completedYear: "2023",
    challenge: "The metal roof had significant rust development and leaks at fasteners and seams. Corporate needed a cost-effective solution that wouldn't disrupt store operations.",
    solution: "Our seamless metal restoration included rust treatment, fastener sealing, and a reflective coating that also reduced cooling costs.",
    results: [
      "Store remained open during work",
      "All leaks eliminated",
      "Reduced cooling costs",
      "Fraction of replacement cost"
    ]
  },
  {
    slug: "electric-power-chester",
    name: "Electric Power Inc.",
    location: "Chester, VA",
    category: "METAL RESTORATION",
    roofType: "Metal Roof Restoration",
    systemDescription: "Seamless Acrylic Restoration System (10-Year)",
    description: "This electrical contractor's warehouse and office facility needed metal roof restoration to address leaks and improve energy efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electric-power-inc-chester-va-metal-roof-restoration-EatWE71ujFGdugiDjxWa2QpVYca0e9.jpg",
    systemSlug: "metal-restoration",
    squareFootage: "16,000 sq ft",
    completedYear: "2024",
    challenge: "Leaks were affecting stored electrical equipment and office areas. The company needed a quick, effective solution.",
    solution: "Our 10-year acrylic restoration system sealed all leak points and added a reflective surface to reduce cooling loads.",
    results: [
      "Protected valuable equipment from leaks",
      "Reduced cooling costs",
      "10-year warranty",
      "Completed in one week"
    ]
  },
  {
    slug: "one-middlebrook-staunton",
    name: "One Middlebrook Avenue",
    location: "Staunton, VA",
    category: "RESTORATION",
    roofType: "EPDM Membrane Restoration",
    systemDescription: "Seamless Acrylic Membrane Restoration System",
    description: "This commercial office building's aging EPDM roof was showing seam failures and UV deterioration. Our restoration system extended its life by 15+ years.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one-middlebrook-avenue-staunton-epdm-membrane-restoration-ZBL9aoXytgqu5SXISo1xXVfB70oLvn.jpg",
    systemSlug: "membrane-restoration",
    citySlug: "staunton",
    squareFootage: "12,000 sq ft",
    completedYear: "2024",
    challenge: "The EPDM membrane had multiple seam failures and was showing signs of UV degradation. Water intrusion was affecting tenant spaces.",
    solution: "Our acrylic restoration system reinforced all seams with fabric, addressed penetration details, and added a reflective UV-resistant topcoat.",
    results: [
      "15-year warranty",
      "Eliminated seam failures",
      "Improved energy efficiency",
      "Tenant spaces protected"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectsBySystem(systemSlug: string): Project[] {
  return projects.filter((project) => project.systemSlug === systemSlug);
}

export function getProjectsByCity(citySlug: string): Project[] {
  return projects.filter((project) => project.citySlug === citySlug);
}
