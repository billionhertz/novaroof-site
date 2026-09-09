export interface RoofSystem {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaDescription: string;
  h1: string;
  intro: string;
  features: string[];
  benefits: string[];
  applications: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  ctaHeading: string;
  ctaSubheading: string;
}

export const roofSystems: RoofSystem[] = [
  {
    slug: "spray-foam",
    name: "Spray Foam Roofing System",
    shortName: "Spray Foam",
    description: "Self-adhering polyurethane foam system providing seamless waterproofing and the highest insulation value per inch.",
    metaDescription: "Spray foam roofing in Harrisonburg, VA. Seamless waterproofing with superior insulation in one system. R-6.5 per inch. Free estimate from NovaRoof.",
    h1: "Spray Foam Roofing System",
    intro: "Spray polyurethane foam (SPF) roofing delivers the highest R-value of any commercial roofing material while providing completely seamless waterproofing. It self-adheres to virtually any substrate and conforms to complex roof shapes, making it ideal for buildings with numerous penetrations or irregular geometries.",
    features: [
      "R-6.5 insulation value per inch",
      "Completely seamless application",
      "Self-adhering to existing roof",
      "Self-flashing at penetrations",
      "Lightweight material",
      "Renewable coating system",
      "Custom thickness for R-value needs",
      "Strengthens existing structure"
    ],
    benefits: [
      "Highest insulation value available",
      "30-50% reduction in HVAC costs",
      "Eliminates thermal bridging",
      "No seams or fasteners to fail",
      "Indefinite service life with maintenance"
    ],
    applications: [
      "Buildings with many penetrations",
      "Complex roof geometries",
      "Energy retrofit projects",
      "Cold storage facilities",
      "Historic buildings"
    ],
    process: [
      "The existing roof surface is cleaned and prepared. Any necessary repairs are completed and loose materials are secured or removed.",
      "Spray foam is applied as a liquid using specialized equipment. It expands into a solid closed-cell foam that adheres directly to the existing surface, creating a seamless monolithic layer.",
      "A protective coating is applied over the cured foam. This coating protects the foam from UV exposure and can be recoated every 10-15 years to maintain the warranty."
    ],
    faqs: [
      {
        question: "How long does spray foam roofing last?",
        answer: "With proper maintenance, spray foam roofs can last indefinitely. The protective coating is simply reapplied every 10-15 years, eliminating the need for tear-off and replacement."
      },
      {
        question: "Can spray foam be applied over my existing roof?",
        answer: "In most cases, yes. Spray foam can be applied over most existing roof substrates including membrane, metal, and built-up roofing. The existing surface must be properly prepared."
      },
      {
        question: "What R-value can I achieve with spray foam?",
        answer: "Spray foam provides R-6.5 per inch. We can apply any thickness needed to achieve your target R-value. Most applications range from 1-3 inches."
      }
    ],
    ctaHeading: "Discover Spray Foam Benefits",
    ctaSubheading: "Find out if spray foam is right for your building."
  },
  {
    slug: "tpo",
    name: "TPO Roofing System",
    shortName: "TPO Roofing",
    description: "Thermoplastic polyolefin single-ply membrane with heat-welded seams and excellent energy efficiency.",
    metaDescription: "TPO roofing installation in Harrisonburg, VA. Energy-efficient single-ply membrane with heat-welded seams. 20-30 year warranties. Free quote from NovaRoof.",
    h1: "TPO Roofing System",
    intro: "TPO (Thermoplastic Polyolefin) has become the most popular commercial roofing membrane in America for good reason. Its combination of heat-welded seams, energy efficiency, and cost-effectiveness makes it an excellent choice for new construction and re-roofing projects.",
    features: [
      "Heat-welded seams stronger than membrane",
      "Energy Star rated reflectivity",
      "UV and chemical resistant",
      "Multiple attachment options",
      "Available in 45, 60, and 80 mil",
      "20-30 year warranty options",
      "White, tan, and gray colors",
      "Recyclable material"
    ],
    benefits: [
      "Up to 30% reduction in cooling costs",
      "Excellent puncture and tear resistance",
      "Low maintenance requirements",
      "Environmentally friendly",
      "Cost-effective installation"
    ],
    applications: [
      "Office buildings",
      "Retail centers",
      "Warehouses",
      "Manufacturing facilities",
      "Healthcare facilities"
    ],
    process: [
      "Installation begins with removing the existing roof (if applicable) and preparing the deck. We install polyiso insulation to achieve the specified R-value.",
      "TPO membrane is rolled out and positioned. Seams are heat-welded using robotic welding equipment for consistent, watertight seams that are stronger than the membrane itself.",
      "Penetrations, edges, and details are sealed with pre-formed TPO accessories. Final inspection ensures all seams and details meet manufacturer specifications."
    ],
    faqs: [
      {
        question: "How long does a TPO roof last?",
        answer: "Quality TPO installations typically last 25-30 years with proper maintenance. We offer manufacturer warranties up to 30 years on our TPO systems."
      },
      {
        question: "Is TPO or EPDM better?",
        answer: "Both are excellent choices with different advantages. TPO offers better energy efficiency and welded seams. EPDM has a longer track record and lower material cost. We can help you choose."
      },
      {
        question: "What thickness TPO should I choose?",
        answer: "We typically recommend 60-mil TPO for most commercial applications. 80-mil is available for high-traffic or demanding environments."
      }
    ],
    ctaHeading: "Install TPO Roofing",
    ctaSubheading: "Request a free assessment for your TPO roofing project."
  },
  {
    slug: "pvc",
    name: "PVC Roofing System",
    shortName: "PVC Roofing",
    description: "Premium single-ply membrane with exceptional chemical resistance and fire performance.",
    metaDescription: "PVC roofing installation in Harrisonburg, VA. Chemical-resistant membrane for restaurants and industrial facilities. 30+ year warranties. Free estimate.",
    h1: "PVC Roofing System",
    intro: "PVC (Polyvinyl Chloride) roofing offers the highest level of chemical resistance available in single-ply membranes. It's the premium choice for restaurants, food processing facilities, and any application where chemicals, grease, or other contaminants are present on the roof.",
    features: [
      "Heat-welded seams",
      "Superior chemical resistance",
      "Inherent fire resistance",
      "High reflectivity",
      "Multiple attachment options",
      "30+ year warranty available",
      "Resists oils, greases, and chemicals",
      "Excellent flexibility"
    ],
    benefits: [
      "Best choice for chemical environments",
      "Outstanding fire performance",
      "Longer service life than TPO",
      "Energy efficient",
      "Low maintenance"
    ],
    applications: [
      "Restaurants and commercial kitchens",
      "Food processing facilities",
      "Chemical plants",
      "Hospitals and laboratories",
      "High-chemical environments"
    ],
    process: [
      "PVC installation follows the same process as TPO — deck preparation, insulation installation, and membrane attachment.",
      "Seams are heat-welded using the same robotic equipment. PVC welds are exceptionally strong and chemical-resistant.",
      "All details are completed with PVC-specific accessories. The finished system provides a seamless, chemical-resistant surface."
    ],
    faqs: [
      {
        question: "When should I choose PVC over TPO?",
        answer: "Choose PVC if your roof is exposed to grease, oils, or chemicals — such as restaurants with rooftop exhaust fans. PVC resists these substances while TPO and EPDM can degrade."
      },
      {
        question: "Is PVC more expensive than TPO?",
        answer: "Yes, PVC typically costs 10-20% more than TPO. However, its superior chemical resistance and longer track record often justify the premium for appropriate applications."
      },
      {
        question: "How long does PVC roofing last?",
        answer: "PVC roofs routinely last 30+ years. The material has a longer track record than TPO, with many installations exceeding 35 years of service."
      }
    ],
    ctaHeading: "Install PVC Roofing",
    ctaSubheading: "Request a PVC roofing quote for your facility."
  },
  {
    slug: "urethane-coating",
    name: "Urethane Coating System",
    shortName: "Urethane Coating",
    description: "Polyurethane-modified acrylic coating system for restoring and protecting various roof substrates.",
    metaDescription: "Urethane roof coating in Harrisonburg, VA. Restore and protect your commercial roof with our polyurethane-modified coating system. Free inspection.",
    h1: "Urethane Coating System",
    intro: "Urethane (polyurethane-modified acrylic) roof coatings combine the adhesion and flexibility of polyurethane with the UV resistance and longevity of acrylic. This hybrid technology creates a premium coating system suitable for a wide range of roof substrates.",
    features: [
      "Superior adhesion to multiple substrates",
      "Excellent flexibility and elongation",
      "UV-resistant formulation",
      "Seamless application",
      "Available in multiple colors",
      "10-20 year warranty options",
      "Chemical and ponding water resistant",
      "Reflective energy-saving finish"
    ],
    benefits: [
      "Works on more substrate types",
      "Better adhesion than pure acrylics",
      "Excellent ponding water resistance",
      "Superior flexibility in cold weather",
      "Premium protection for demanding environments"
    ],
    applications: [
      "Metal roofs",
      "Spray foam roofs",
      "Built-up roofing",
      "Modified bitumen",
      "Concrete roof decks"
    ],
    process: [
      "Surface preparation includes cleaning, rust treatment (for metal), and repair of any damaged areas. Proper preparation is critical for coating adhesion.",
      "Seams, fasteners, and details are reinforced with polyester fabric embedded in coating. This creates a fully reinforced system at all critical points.",
      "Urethane coating is applied in multiple passes to achieve specified thickness. The reflective finish provides energy savings and a fresh appearance."
    ],
    faqs: [
      {
        question: "What's the difference between urethane and acrylic coatings?",
        answer: "Urethane coatings offer better adhesion and flexibility than pure acrylics, making them suitable for more demanding applications. They also resist ponding water better than standard acrylics."
      },
      {
        question: "Can urethane coatings be used on ponding water areas?",
        answer: "Yes, urethane coatings are more resistant to ponding water than standard acrylics. However, we still recommend addressing drainage issues where possible."
      },
      {
        question: "How long does urethane coating last?",
        answer: "Our urethane coating systems carry 10-20 year warranties depending on application and substrate. Like other coatings, they can be recoated at the end of the warranty period."
      }
    ],
    ctaHeading: "Protect Your Roof",
    ctaSubheading: "Get a free inspection to see if urethane coating is right for your roof."
  }
];

export function getRoofSystemBySlug(slug: string): RoofSystem | undefined {
  return roofSystems.find((system) => system.slug === slug);
}

export function getAllRoofSystemSlugs(): string[] {
  return roofSystems.map((system) => system.slug);
}
