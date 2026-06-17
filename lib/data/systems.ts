export interface RoofSystem {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  badge: string;
  intro: string;
  characteristics: string[];
  benefits: string[];
  ctaQuestion: string;
}

export const systems: RoofSystem[] = [
  {
    slug: "membrane-restoration",
    name: "Membrane Restoration System",
    title: "Membrane Restoration System | EPDM, TPO, PVC Coatings",
    description: "Nova Roof's membrane restoration system extends your commercial roof 15-20 years. Works on EPDM, TPO, and PVC. No tear-off, renewable warranty.",
    h1: "Membrane Restoration System",
    badge: "Manufactured by Conklin",
    intro: "Our fluid-applied membrane restoration system bonds directly to existing EPDM, TPO, and PVC roofs, creating a seamless waterproof barrier without the cost and disruption of tear-off. The acrylic coating is reinforced with polyester fabric at all seams and details, then finished with a UV-resistant reflective topcoat that reduces cooling costs and can be renewed indefinitely.",
    characteristics: [
      "Fluid-applied acrylic coating system",
      "Bonds directly to existing membrane",
      "Reinforced with polyester fabric at seams and details",
      "UV-resistant reflective white finish",
      "Compatible with EPDM, TPO, and PVC substrates",
      "Can be applied in sections to minimize disruption"
    ],
    benefits: [
      "15-20 year renewable warranty",
      "40-60% less than full replacement",
      "Zero tear-off waste sent to landfill",
      "Improved energy efficiency from reflective surface",
      "Seamless waterproof barrier with no laps or joints",
      "Can be renewed indefinitely"
    ],
    ctaQuestion: "Is membrane restoration right for your building?"
  },
  {
    slug: "metal-restoration",
    name: "Metal Roof Restoration System",
    title: "Metal Roof Restoration System | Seamless Coating",
    description: "Restore your commercial metal roof with Nova Roof's seamless coating system. Eliminate rust and leaks with 10-20 year warranties.",
    h1: "Metal Roof Restoration System",
    badge: "Manufactured by Conklin",
    intro: "Our seamless polyurethane-modified acrylic coating system is specifically engineered for standing seam and corrugated metal roofs. The system includes rust inhibitor pre-treatment, fastener and seam sealing with embedded reinforcement, and a highly reflective elastomeric topcoat that expands and contracts with the metal through temperature cycles.",
    characteristics: [
      "Polyurethane-modified acrylic coating",
      "Designed for standing seam and corrugated metal",
      "Penetrating rust inhibitor pre-treatment",
      "Reinforced at fasteners, seams, and penetrations",
      "Single-component application for uniform coverage",
      "Highly reflective white finish"
    ],
    benefits: [
      "10-20 year warranty options",
      "Eliminates fastener-back leaks permanently",
      "Stops rust progression and prevents new corrosion",
      "Reduces interior temperature by reflecting solar heat",
      "No structural disruption during application",
      "Fraction of the cost of metal roof replacement"
    ],
    ctaQuestion: "Is metal restoration right for your building?"
  },
  {
    slug: "spray-foam",
    name: "Polyurethane Spray Foam",
    title: "Spray Foam Roofing System | Polyurethane SPF",
    description: "Polyurethane spray foam roofing from Nova Roof. Superior insulation R-6 per inch, seamless waterproofing, and structural strength. Harrisonburg VA.",
    h1: "Polyurethane Spray Foam",
    badge: "Manufactured by Conklin",
    intro: "Polyurethane spray foam is one of the most effective commercial roofing systems available — combining superior insulation, seamless waterproofing, and structural strength in a single application. Unlike conventional systems with seams and fasteners that eventually fail, spray foam creates a continuous, monolithic surface that rises around every obstruction on the roof without a single lap or joint.",
    characteristics: [
      "Two-component polyurethane foam sprayed directly to the roof deck",
      "Fully adhered seamless monolithic membrane with no seams or laps",
      "Self-flashing — foam rises around penetrations, curbs, and edges",
      "Protected by a durable reflective acrylic or silicone topcoat",
      "Thickness adjusted on-site to level low spots and improve drainage",
      "Can be applied over most existing roofing substrates"
    ],
    benefits: [
      "Adds R-6 to R-7 of insulation per inch — exceptional thermal performance",
      "Eliminates thermal bridging common with traditional insulation systems",
      "Creates a single seamless waterproof surface with zero seams to fail",
      "Reduces heating and cooling costs significantly",
      "Adds compressive strength without meaningful structural load",
      "Available with renewable warranties — recoat and re-warrant indefinitely"
    ],
    ctaQuestion: "Is spray foam right for your building?"
  },
  {
    slug: "tpo",
    name: "TPO Roofing System",
    title: "TPO Roofing System | Commercial TPO Installation",
    description: "TPO roofing systems for commercial buildings in Virginia. Heat-welded seams, energy-efficient white membrane. New installation and retrofit.",
    h1: "TPO Roofing System",
    badge: "Industry Standard System",
    intro: "TPO (Thermoplastic Polyolefin) has become one of the fastest-growing commercial roofing membranes, combining heat-welded seam strength with excellent energy efficiency and competitive pricing. The white reflective surface meets Energy Star standards, reducing cooling costs while providing reliable waterproofing performance.",
    characteristics: [
      "Single-ply thermoplastic membrane",
      "Heat-welded seams for watertight bond",
      "Available in 45-mil, 60-mil, and 80-mil thicknesses",
      "White reflective surface meets Energy Star standards",
      "Excellent chemical and UV resistance",
      "Can be mechanically attached, adhered, or ballasted"
    ],
    benefits: [
      "Superior seam strength from hot-air welding",
      "Excellent resistance to UV, ozone, and chemical exposure",
      "Energy Star rated reflective surface reduces cooling costs",
      "Available in wide widths to minimize seams",
      "Compatible with polyiso insulation for high R-values",
      "Manufacturer warranties up to 30 years"
    ],
    ctaQuestion: "Is TPO right for your building?"
  },
  {
    slug: "pvc",
    name: "PVC Roofing System",
    title: "PVC Roofing System | Commercial PVC Membrane",
    description: "PVC roofing membranes for commercial buildings. Superior chemical resistance, heat-welded seams, and long-term durability. Nova Roof Virginia.",
    h1: "PVC Roofing System",
    badge: "Industry Standard System",
    intro: "PVC (Polyvinyl Chloride) is the premium choice for commercial roofs requiring superior chemical resistance — particularly restaurants, food processing facilities, and manufacturing buildings where grease and chemicals are present. Heat-welded seams create bonds stronger than the membrane itself, and PVC's inherent fire resistance adds an extra layer of protection.",
    characteristics: [
      "Reinforced polyvinyl chloride membrane",
      "Hot-air welded seams stronger than the membrane itself",
      "Available in 50-mil, 60-mil, and 80-mil options",
      "Inherently fire-resistant material",
      "Excellent chemical, grease, and oil resistance",
      "Factory-fabricated corners and details for precision"
    ],
    benefits: [
      "Best-in-class chemical resistance for restaurants and manufacturing",
      "Hot-air welded seams create permanent watertight bond",
      "Outstanding fire resistance without additional treatments",
      "Long track record — PVC roofs from the 1960s still in service",
      "Reflective surface contributes to energy savings",
      "Warranties up to 25-30 years from manufacturers"
    ],
    ctaQuestion: "Is PVC right for your building?"
  },
  {
    slug: "urethane-coating",
    name: "Urethane Coating System",
    title: "Urethane Coating System | Roof Restoration Coating",
    description: "Urethane coating restoration system for commercial roofs. Seamless waterproof barrier with renewable warranty. Nova Roof Harrisonburg VA.",
    h1: "Urethane Coating System",
    badge: "Manufactured by Conklin",
    intro: "Our urethane coating system is a high-performance liquid-applied solution that creates a seamless elastomeric membrane over existing roof surfaces. The two-component aromatic urethane base coat provides exceptional adhesion and durability, while the aliphatic urethane or acrylic topcoat protects against UV degradation.",
    characteristics: [
      "Two-component aromatic urethane base coat",
      "Aliphatic urethane or acrylic topcoat for UV protection",
      "Tensile strength exceeds 2000 psi when cured",
      "Elongation of 300%+ accommodates building movement",
      "Applied in multiple passes for uniform mil thickness",
      "Compatible with metal, BUR, modified bitumen, and concrete substrates"
    ],
    benefits: [
      "Creates seamless monolithic waterproof membrane",
      "Exceptional adhesion to virtually any substrate",
      "Accommodates thermal expansion and building movement",
      "Highly reflective surface reduces cooling costs",
      "Renewable — can be recoated and re-warranted",
      "No tear-off required for existing roof systems"
    ],
    ctaQuestion: "Is urethane coating right for your building?"
  }
];

export function getSystemBySlug(slug: string): RoofSystem | undefined {
  return systems.find((system) => system.slug === slug);
}

export function getAllSystemSlugs(): string[] {
  return systems.map((system) => system.slug);
}
