export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  content: {
    intro: string;
    details: string[];
    callToAction: string;
  };
}

export const services: Service[] = [
  {
    slug: "commercial-roof-repair",
    name: "Commercial Roof Repair",
    shortName: "Roof Repair",
    description: "Fast, reliable commercial roof repairs in Harrisonburg and the Shenandoah Valley. EPDM, TPO, PVC, metal roof leak repair.",
    metaDescription: "Fast, reliable commercial roof repairs in Harrisonburg and the Shenandoah Valley. EPDM, TPO, PVC, metal roof leak repair. Free inspection and same-day emergency service.",
    icon: "wrench",
    features: [
      "Active leak isolation and repair",
      "Flashing replacement at walls, curbs, and penetrations",
      "Seam re-welding on TPO and PVC membranes",
      "Ponding water correction and drainage improvements",
      "Storm and wind damage restoration",
      "Gutter and downspout repairs",
      "Skylight and roof hatch re-sealing",
      "Emergency tarping and temporary weatherproofing"
    ],
    benefits: [
      "Same-day emergency response",
      "Prevent interior damage",
      "Minimize business disruption",
      "Cost-effective solutions",
      "Warranty-backed repairs"
    ],
    content: {
      intro: "A leaking commercial roof doesn't wait for a convenient time. Whether you're dealing with storm damage, aging membrane failures, or persistent ponding water, Nova Roof delivers fast, reliable commercial roof repairs across Harrisonburg and the Shenandoah Valley. Our crews are trained on every major flat and low-slope roofing system, so we diagnose the root cause — not just the symptom — and fix it right the first time.",
      details: [
        "Commercial roof repair is more than patching a hole. The wrong fix can void your warranty, trap moisture inside the insulation, or simply fail again within months. At Nova Roof, every repair begins with a thorough inspection — including core cuts when necessary — so we understand what's happening beneath the surface before we touch a single seam.",
        "We work with EPDM, TPO, PVC, modified bitumen, metal, and built-up roofing systems. That broad experience allows us to match repair materials to your existing roof instead of layering incompatible products that accelerate damage. And if the damage is too extensive for a spot repair, we'll tell you honestly and recommend a restoration or replacement that makes financial sense.",
        "Every repair starts with a comprehensive roof inspection. We document the condition of every membrane seam, flashing detail, and drainage point with photos and measurements. From there, we provide a written scope of work that explains exactly what we'll do, what materials we'll use, and what it will cost — no surprises."
      ],
      callToAction: "Need a roof repair? Get a free inspection and estimate — usually within 48 hours."
    }
  },
  {
    slug: "preventative-maintenance",
    name: "Preventative Roof Maintenance",
    shortName: "Maintenance",
    description: "Scheduled commercial roof maintenance programs that reduce emergency repairs by 70% and extend your roof's lifespan.",
    metaDescription: "Scheduled commercial roof maintenance programs in Harrisonburg, VA. Reduce emergency repairs by 70% and extend your roof's lifespan. Free inspection included.",
    icon: "clipboard-check",
    features: [
      "Bi-annual comprehensive inspections",
      "Membrane seam integrity checks",
      "Flashing and caulk assessment",
      "Drain and gutter clearing",
      "Minor repair execution during visits",
      "Photo-documented condition reports",
      "Budget forecasting for future needs",
      "Priority scheduling for maintenance clients"
    ],
    benefits: [
      "Reduce emergency repairs by 70%",
      "Extend roof lifespan dramatically",
      "Maintain warranty compliance",
      "Lower total cost of ownership",
      "Peace of mind protection"
    ],
    content: {
      intro: "Most commercial roof problems don't appear overnight — they develop slowly over months or years. A scheduled maintenance program catches these issues early, when they're still inexpensive to fix, instead of waiting until water is dripping on your inventory or equipment.",
      details: [
        "Our systematic approach to maintenance documentation means you always know exactly what condition your roof is in. Every visit includes detailed photos, measurements, and condition ratings that track changes over time. This data helps you budget for future needs and makes warranty claims straightforward.",
        "Maintenance program clients receive priority scheduling for repairs, discounted labor rates, and proactive recommendations before small issues become emergencies. We work around your business hours and coordinate with your facility team to minimize disruption."
      ],
      callToAction: "Protect your roof investment. Start with a free inspection to establish your baseline condition."
    }
  },
  {
    slug: "membrane-restoration",
    name: "Membrane Roof Restoration",
    shortName: "Membrane Restoration",
    description: "Restore your commercial membrane roof for 40-60% less than replacement with 15-20 year renewable warranties.",
    metaDescription: "Restore your commercial membrane roof for 40-60% less than replacement. 15-20 year renewable warranty on EPDM, TPO, and PVC systems in Harrisonburg, VA.",
    icon: "layers",
    features: [
      "Works on EPDM, TPO, and PVC membranes",
      "15-20 year renewable warranty",
      "40-60% less than full replacement",
      "No tear-off or landfill waste",
      "Seamless waterproof barrier",
      "Improved UV reflectivity and energy efficiency",
      "Can be re-applied indefinitely",
      "Minimal business disruption during application"
    ],
    benefits: [
      "Significant cost savings vs replacement",
      "Extended roof life by 15-20 years",
      "Renewable warranty cycle",
      "Zero tear-off waste",
      "Improved energy efficiency"
    ],
    content: {
      intro: "Our renewable restoration system extends your roof's life 15–20 years per cycle. Works on EPDM, TPO, and PVC — no tear-off required. This isn't a temporary coating or band-aid fix — it's a complete roof restoration that creates a seamless, waterproof membrane over your existing system.",
      details: [
        "The restoration process begins with thorough cleaning and preparation of your existing membrane. We then repair any damaged areas, reinforce seams with fabric tape, and apply a UV-resistant acrylic topcoat that bonds permanently to the existing surface.",
        "The real beauty of membrane restoration is that it's renewable. When the first 15-20 year warranty period ends, we can simply recoat the roof for another 15-20 years of protection. This cycle can continue indefinitely, meaning you may never need a full tear-off replacement again."
      ],
      callToAction: "Find out if your roof is a candidate for restoration. Schedule your free inspection today."
    }
  },
  {
    slug: "metal-roof-restoration",
    name: "Metal Roof Restoration",
    shortName: "Metal Restoration",
    description: "Stop leaks and eliminate rust on your commercial metal roof with seamless coating restoration systems.",
    metaDescription: "Stop leaks and eliminate rust on your commercial metal roof. Seamless coating restoration with 10-20 year warranties in Harrisonburg and the Shenandoah Valley.",
    icon: "factory",
    features: [
      "Standing seam and corrugated metal systems",
      "Rust treatment and surface preparation",
      "Fastener and seam sealing",
      "Reflective elastomeric coating application",
      "Eliminates leaks at penetrations and transitions",
      "10-20 year warranty options",
      "Reduces interior temperature and energy costs",
      "No structural disruption or tear-off required"
    ],
    benefits: [
      "Eliminate rust and leaks",
      "10-20 year warranty options",
      "Improved energy efficiency",
      "Fraction of replacement cost",
      "No structural disruption"
    ],
    content: {
      intro: "Extend the life of your standing seam or corrugated metal roof with our liquid-applied restoration system. Stop leaks, eliminate rust, and restore performance — without a costly tear-off. Most metal roofs are structurally sound even when they're leaking; the problem is usually at the fasteners, seams, and penetrations.",
      details: [
        "Our metal roof restoration process starts with thorough rust treatment and surface preparation. We then seal every fastener and seam with elastomeric sealant before applying a reflective coating over the entire roof surface.",
        "The finished system is seamless, waterproof, and highly reflective. Building owners typically see immediate improvement in interior temperatures and reduced cooling costs during summer months."
      ],
      callToAction: "Stop fighting rust and leaks. Get a free metal roof assessment today."
    }
  },
  {
    slug: "commercial-roof-replacement",
    name: "Commercial Roof Replacement",
    shortName: "Replacement",
    description: "Full commercial roof replacement with TPO, EPDM, PVC, and metal systems when repair or restoration isn't viable.",
    metaDescription: "Full commercial roof replacement in Harrisonburg, VA. TPO, EPDM, PVC, and metal systems with manufacturer-backed warranties. Free estimate.",
    icon: "building",
    features: [
      "Complete tear-off and disposal",
      "TPO membrane systems",
      "EPDM rubber roofing",
      "PVC membrane systems",
      "Standing seam metal roofing",
      "Polyiso insulation with proper R-value",
      "Manufacturer-backed warranties",
      "Code-compliant installation"
    ],
    benefits: [
      "Modern, energy-efficient systems",
      "Long-term manufacturer warranties",
      "Increased property value",
      "Improved insulation and R-value",
      "Fresh start for problematic roofs"
    ],
    content: {
      intro: "When a roof is truly beyond repair or restoration, Nova Roof provides full commercial roof replacement with quality materials and expert installation. We'll always explore every alternative first — but when replacement is the right answer, we execute it professionally and efficiently.",
      details: [
        "Our honest approach means we don't push replacements when restoration or repair will do the job. But when we recommend replacement, it's because we've evaluated every option and determined that a new roof is the most cost-effective long-term solution for your building.",
        "We install all major commercial roofing systems including TPO, EPDM, PVC, and standing seam metal. Every installation includes proper insulation, code-compliant details, and a comprehensive manufacturer warranty."
      ],
      callToAction: "Get an honest assessment of your options. Request a free inspection and estimate."
    }
  },
  {
    slug: "roof-inspection",
    name: "Free Commercial Roof Inspection",
    shortName: "Inspection",
    description: "Complimentary, no-obligation commercial roof inspection with photo-documented report and honest recommendations.",
    metaDescription: "Get a free, no-obligation commercial roof inspection in Harrisonburg, VA. Photo-documented report with honest recommendations. Usually within 48 hours.",
    icon: "clipboard",
    features: [
      "Complete membrane surface evaluation",
      "Seam and flashing condition assessment",
      "Drainage system inspection",
      "Core cuts to check insulation saturation",
      "Penetration and curb detail evaluation",
      "Photo-documented findings report",
      "Written recommendations with cost estimates",
      "No-obligation honest assessment"
    ],
    benefits: [
      "No cost or obligation",
      "Detailed condition report",
      "Clear recommendations",
      "Budget planning information",
      "Usually within 48 hours"
    ],
    content: {
      intro: "Every roof project at Nova Roof starts with a complimentary, no-obligation inspection. We'll assess your roof's condition, identify any problem areas, and provide a detailed report with honest recommendations — whether that means minor repairs, scheduled maintenance, restoration, or replacement.",
      details: [
        "Our inspections are thorough. We check every seam, flashing, penetration, and drainage point. When warranted, we perform core cuts to evaluate insulation condition. Everything is documented with photos and measurements.",
        "The result is a comprehensive report that tells you exactly what shape your roof is in and what it needs. There's no pressure and no obligation — just honest information you can use to make informed decisions about your building."
      ],
      callToAction: "Ready for your free inspection? We'll be on your roof within a week — usually sooner."
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
