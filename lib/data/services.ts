export interface Service {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  whyTrust: string[];
  features: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  ctaHeading: string;
  ctaSubheading: string;
}

export const services: Service[] = [
  {
    slug: "commercial-roof-repair",
    name: "Commercial Roof Repair",
    shortName: "Roof Repair",
    title: "Commercial Roof Repair Harrisonburg VA | Emergency & Scheduled",
    description: "Fast, reliable commercial roof repairs in Harrisonburg and the Shenandoah Valley. EPDM, TPO, PVC, metal roof leak repair. Free inspection and same-day emergency service.",
    h1: "Commercial Roof Repair in Harrisonburg, Virginia",
    intro: "A leaking commercial roof doesn't wait for a convenient time. Whether you're dealing with storm damage, aging membrane failures, or persistent ponding water, Nova Roof delivers fast, reliable commercial roof repairs across Harrisonburg and the Shenandoah Valley. Our crews are trained on every major flat and low-slope roofing system, so we diagnose the root cause — not just the symptom — and fix it right the first time.",
    whyTrust: [
      "Commercial roof repair is more than patching a hole. The wrong fix can void your warranty, trap moisture inside the insulation, or simply fail again within months. At Nova Roof, every repair begins with a thorough inspection — including core cuts when necessary — so we understand what's happening beneath the surface before we touch a single seam.",
      "We work with EPDM, TPO, PVC, modified bitumen, metal, and built-up roofing systems. That broad experience allows us to match repair materials to your existing roof instead of layering incompatible products that accelerate damage. And if the damage is too extensive for a spot repair, we'll tell you honestly and recommend a restoration or replacement that makes financial sense."
    ],
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
    process: [
      "Every repair starts with a comprehensive roof inspection. We document the condition of every membrane seam, flashing detail, and drainage point with photos and measurements. From there, we provide a written scope of work that explains exactly what we'll do, what materials we'll use, and what it will cost — no surprises.",
      "Most repairs are completed in a single day with minimal disruption to your operations. For larger projects — like ponding water corrections or extensive flashing work — we'll provide a clear timeline and coordinate around your business hours."
    ],
    faqs: [
      {
        question: "How quickly can you respond to a commercial roof leak?",
        answer: "We respond to emergency leak calls within hours for buildings throughout Virginia's Shenandoah Valley. Most emergency tarping and temporary repairs are completed the same day."
      },
      {
        question: "Do you repair all types of commercial roofing systems?",
        answer: "Yes — we repair EPDM, TPO, PVC, modified bitumen, metal, and built-up roofing systems."
      },
      {
        question: "How much does a typical commercial roof repair cost?",
        answer: "Minor repairs typically range from $300-$2,000. Larger repairs involving flashing replacement or structural work may cost $3,000-$10,000+. We provide a free inspection and written estimate before any work begins."
      }
    ],
    relatedServices: ["preventative-maintenance", "roof-inspection", "membrane-restoration"],
    ctaHeading: "Need a roof repair?",
    ctaSubheading: "Get a free inspection and estimate — usually within 48 hours."
  },
  {
    slug: "preventative-maintenance",
    name: "Preventative Maintenance",
    shortName: "Maintenance",
    title: "Commercial Roof Maintenance Harrisonburg VA | Preventative Programs",
    description: "Scheduled commercial roof maintenance programs in Harrisonburg, VA. Reduce emergency repairs by 70% and extend your roof's lifespan. Free inspection included.",
    h1: "Preventative Roof Maintenance Programs in Harrisonburg, Virginia",
    intro: "The most expensive roof repair is the one you didn't see coming. Scheduled maintenance programs prevent up to 70% of emergency repairs while dramatically extending your roof's lifespan. At Nova Roof, we help commercial building owners shift from reactive roof management to proactive asset protection.",
    whyTrust: [
      "Our maintenance programs are built on documentation and accountability. Every visit produces a detailed photo report showing exactly what we inspected, what we found, and what we recommend. This systematic approach creates a historical record of your roof's condition — invaluable for budgeting, insurance claims, and warranty compliance.",
      "We don't just show up and look around. Our technicians follow a comprehensive checklist covering every membrane seam, flashing detail, drain, and penetration on your roof. Minor issues get fixed during the visit. Larger concerns get documented and quoted so you can plan ahead instead of reacting to emergencies."
    ],
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
    process: [
      "Our maintenance programs run year-round, with primary inspections scheduled for spring and fall — the ideal times to catch winter damage and prepare for summer UV exposure. Each visit takes 2-4 hours depending on roof size and complexity.",
      "After every inspection, you'll receive a digital report with photos, findings, and recommendations. We categorize issues by urgency so you can address critical items immediately while planning for less urgent work. Maintenance clients also receive priority scheduling for any repairs or emergency calls."
    ],
    faqs: [
      {
        question: "How often should a commercial roof be inspected?",
        answer: "We recommend bi-annual inspections — typically in spring and fall. This catches issues from winter weather and prepares your roof for summer heat and UV exposure."
      },
      {
        question: "What does a maintenance program cost?",
        answer: "Maintenance programs are customized based on roof size, system type, and condition. Most commercial buildings fall between $500-$2,000 per year for bi-annual service including minor repairs."
      },
      {
        question: "What happens during a maintenance visit?",
        answer: "Our technicians inspect every seam, flashing, drain, and penetration on your roof. They clear debris, clean drains, execute minor repairs on the spot, and document everything with photos and notes."
      }
    ],
    relatedServices: ["commercial-roof-repair", "roof-inspection", "membrane-restoration"],
    ctaHeading: "Protect your roof investment",
    ctaSubheading: "Start with a free inspection to establish your baseline condition."
  },
  {
    slug: "membrane-restoration",
    name: "Membrane Roof Restoration",
    shortName: "Membrane Restoration",
    title: "Membrane Roof Restoration Harrisonburg VA | EPDM, TPO, PVC",
    description: "Restore your commercial membrane roof for 40-60% less than replacement. 15-20 year renewable warranty on EPDM, TPO, and PVC systems in Harrisonburg, VA.",
    h1: "Membrane Roof Restoration in Harrisonburg, Virginia",
    intro: "Most commercial membrane roofs don't need to be replaced — they need to be restored. Our fluid-applied membrane restoration system extends EPDM, TPO, and PVC roofs by 15-20 years per application, at 40-60% less than the cost of full replacement. And because the system is renewable, you can restore your roof again when the warranty period ends — indefinitely.",
    whyTrust: [
      "We've partnered with Conklin, a manufacturer with over 45 years of experience in commercial roof coatings. Their acrylic membrane restoration systems are specifically engineered to bond with existing membrane substrates, creating a seamless waterproof barrier that eliminates the seams and joints where most leaks originate.",
      "Unlike generic roof coatings, our restoration process includes reinforcing every seam, penetration, and detail with polyester fabric embedded in the coating. This creates a fully reinforced monolithic membrane over your existing roof — not just a painted-on layer that will crack and peel."
    ],
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
    process: [
      "The restoration process begins with thorough cleaning to remove dirt, debris, and oxidation. We then make all necessary repairs to the existing membrane — sealing any active leaks, re-adhering lifted seams, and addressing flashing deficiencies.",
      "Next, we reinforce all seams, penetrations, and details with polyester fabric embedded in acrylic coating. Finally, we apply the full-coverage acrylic topcoat in multiple passes, creating a seamless, reflective, waterproof surface. The entire process typically takes 1-2 weeks depending on roof size."
    ],
    faqs: [
      {
        question: "Is my roof a candidate for restoration?",
        answer: "Most membrane roofs with underlying structure in good condition can be restored. We perform free inspections including core cuts to assess insulation saturation and structural integrity before recommending restoration."
      },
      {
        question: "How long does the restoration warranty last?",
        answer: "Our membrane restoration systems come with 15-20 year warranties depending on the coating system selected. When the warranty period ends, the roof can be re-coated and re-warranted — indefinitely."
      },
      {
        question: "How long does the restoration process take?",
        answer: "Most membrane restoration projects are completed in 1-2 weeks depending on roof size, weather, and the extent of preparation work required."
      },
      {
        question: "Will my business operations be disrupted?",
        answer: "Restoration work is performed entirely on the roof exterior with no disruption to interior operations. There's no tear-off noise, no debris falling, and no need to relocate equipment or inventory."
      }
    ],
    relatedServices: ["metal-roof-restoration", "commercial-roof-repair", "roof-inspection"],
    ctaHeading: "Extend your roof's life — without replacement",
    ctaSubheading: "Get a free inspection to see if your membrane roof is a restoration candidate."
  },
  {
    slug: "metal-roof-restoration",
    name: "Metal Roof Restoration",
    shortName: "Metal Restoration",
    title: "Metal Roof Restoration Harrisonburg VA | Coatings & Sealing",
    description: "Stop leaks and eliminate rust on your commercial metal roof. Seamless coating restoration with 10-20 year warranties in Harrisonburg and the Shenandoah Valley.",
    h1: "Metal Roof Restoration in Harrisonburg, Virginia",
    intro: "Commercial metal roofs are built to last — but fasteners back out, seams open, and rust takes hold. Our seamless metal roof restoration system stops leaks at every fastener and seam, eliminates rust progression, and adds a reflective surface that reduces cooling costs. All without the disruption and expense of tearing off your existing metal roof.",
    whyTrust: [
      "Metal roof restoration requires specialized materials and techniques. We use Conklin's polyurethane-modified acrylic coating systems specifically engineered for metal substrates. These coatings expand and contract with the metal through temperature cycles while maintaining a watertight seal.",
      "Our restoration process addresses the root causes of metal roof failure — not just the symptoms. We treat rust with penetrating inhibitors, seal every fastener with butyl caulk, and reinforce seams and transitions with embedded fabric before applying the final coating. The result is a seamless, monolithic surface that eliminates the joints where metal roofs typically fail."
    ],
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
    process: [
      "Metal restoration begins with thorough cleaning and rust treatment. We remove loose rust, treat remaining corrosion with rust-inhibiting primer, and clean the entire surface to ensure proper coating adhesion.",
      "Next, we seal every fastener with butyl caulk and reinforce all seams, transitions, and penetrations with polyester fabric embedded in coating. Finally, we apply the full-coverage elastomeric coating in multiple passes. The reflective white finish stops heat absorption and transforms the roof's appearance."
    ],
    faqs: [
      {
        question: "Can severely rusted metal roofs be restored?",
        answer: "It depends on the extent of deterioration. If the metal panels still have structural integrity, restoration is usually possible. We perform free inspections to assess rust severity and recommend the appropriate solution."
      },
      {
        question: "How long does metal roof restoration take?",
        answer: "Most metal roof restoration projects are completed in 1-2 weeks depending on roof size, rust severity, and weather conditions."
      },
      {
        question: "What warranty options are available?",
        answer: "We offer 10-year and 20-year warranty options depending on the coating system selected and the condition of the existing metal roof."
      },
      {
        question: "Will the coating peel or crack?",
        answer: "Our elastomeric coatings are designed to expand and contract with the metal through temperature cycles. When properly applied over prepared surfaces, they maintain flexibility and adhesion for the full warranty period."
      }
    ],
    relatedServices: ["membrane-restoration", "commercial-roof-replacement", "roof-inspection"],
    ctaHeading: "Stop leaks and eliminate rust",
    ctaSubheading: "Get a free inspection to see if your metal roof is a restoration candidate."
  },
  {
    slug: "commercial-roof-replacement",
    name: "Commercial Roof Replacement",
    shortName: "Roof Replacement",
    title: "Commercial Roof Replacement Harrisonburg VA | TPO, EPDM, PVC, Metal",
    description: "Full commercial roof replacement in Harrisonburg, VA. TPO, EPDM, PVC, and metal systems with manufacturer-backed warranties. Free estimate.",
    h1: "Commercial Roof Replacement in Harrisonburg, Virginia",
    intro: "Sometimes, replacement is the right choice. When insulation is saturated, structural damage has occurred, or the roof has simply reached the end of its serviceable life, Nova Roof provides full commercial roof replacement with quality materials and expert installation. But we'll always explore every alternative first — because replacement should be a last resort, not a default recommendation.",
    whyTrust: [
      "At Nova Roof, we're restoration specialists first. That means we approach every roof with an honest assessment of whether repair, restoration, or replacement makes the most financial sense for your building. We won't recommend replacement unless it's truly the right solution.",
      "When replacement is necessary, we bring the same attention to detail we apply to restoration work. We use premium membrane systems from leading manufacturers, install polyiso insulation for optimal energy efficiency, and back our work with manufacturer warranties that protect your investment for decades."
    ],
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
    process: [
      "Every replacement project begins with a thorough inspection and consultation. We assess the existing roof condition, identify any structural issues, and discuss system options that fit your building's needs and budget. You'll receive a detailed written proposal with clear pricing and timeline.",
      "During installation, we coordinate closely with your operations to minimize disruption. We complete tear-off in sections to limit exposure, install new insulation and membrane efficiently, and clean up completely each day. Final inspection and documentation ensure your warranty is fully activated."
    ],
    faqs: [
      {
        question: "How long does a commercial roof replacement take?",
        answer: "Timeline depends on roof size and complexity. Most commercial roof replacements take 2-6 weeks. We'll provide a detailed schedule during the proposal process."
      },
      {
        question: "What does commercial roof replacement cost per square foot?",
        answer: "Replacement costs typically range from $10-$18 per square foot depending on the system selected, insulation requirements, and existing roof conditions. We provide free detailed estimates."
      },
      {
        question: "Which roofing system should I choose?",
        answer: "The best system depends on your building's use, budget, and priorities. TPO offers excellent value and energy efficiency. PVC provides superior chemical resistance for restaurants and manufacturing. Metal offers the longest lifespan. We'll help you evaluate the options."
      },
      {
        question: "What warranties are available?",
        answer: "Manufacturer warranties range from 15-30 years depending on the system and installation specifications. We also provide workmanship warranties on our installation."
      }
    ],
    relatedServices: ["membrane-restoration", "metal-roof-restoration", "roof-inspection"],
    ctaHeading: "Need a new roof?",
    ctaSubheading: "Get a free inspection and detailed proposal — we'll explore every option."
  },
  {
    slug: "roof-inspection",
    name: "Free Roof Inspection",
    shortName: "Roof Inspection",
    title: "Free Commercial Roof Inspection Harrisonburg VA",
    description: "Get a free, no-obligation commercial roof inspection in Harrisonburg, VA. Photo-documented report with honest recommendations. Usually within 48 hours.",
    h1: "Free Commercial Roof Inspection in Harrisonburg, Virginia",
    intro: "Every project starts with understanding your roof's true condition. Nova Roof offers complimentary commercial roof inspections throughout Virginia's Shenandoah Valley. You'll receive a detailed photo-documented report with honest recommendations — whether that means a simple repair, a maintenance program, restoration, or yes, sometimes replacement. No pressure, no obligation.",
    whyTrust: [
      "Our inspections go beyond a visual walkthrough. We evaluate every membrane seam, flashing detail, drain, and penetration. When we suspect insulation damage, we perform core cuts to check for moisture saturation. We document everything with photos and measurements so you can see exactly what we see.",
      "Unlike some contractors who inspect with a replacement in mind, we approach every roof looking for ways to extend its life. Our business model is built on maintenance and restoration — so we have every incentive to help you avoid unnecessary replacement costs."
    ],
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
    process: [
      "Scheduling is easy — call us or submit the form on this page, and we'll typically be on your roof within a week. The inspection itself takes 1-3 hours depending on roof size and complexity.",
      "Within a few days of the inspection, you'll receive a comprehensive digital report including photos of key findings, condition assessments for each roof area, and our recommendations. If work is needed, we'll include preliminary cost estimates so you can plan accordingly."
    ],
    faqs: [
      {
        question: "Is the inspection really free?",
        answer: "Yes — completely free with no obligation. We believe building owners deserve honest information about their roof's condition. If you decide to work with us, great. If not, you'll still have valuable documentation of your roof's current state."
      },
      {
        question: "How long does the inspection take?",
        answer: "Most commercial roof inspections take 1-3 hours depending on roof size, number of penetrations, and complexity. We'll give you a time estimate when scheduling."
      },
      {
        question: "What will I receive after the inspection?",
        answer: "You'll receive a detailed digital report with photos, condition assessments, and written recommendations. If repairs or restoration are needed, we'll include preliminary cost estimates."
      },
      {
        question: "How quickly can you schedule an inspection?",
        answer: "We typically schedule inspections within one week of your request — often sooner. Emergency situations can usually be accommodated within 24-48 hours."
      }
    ],
    relatedServices: ["commercial-roof-repair", "preventative-maintenance", "membrane-restoration"],
    ctaHeading: "Ready for your free inspection?",
    ctaSubheading: "We'll be on your roof within a week — usually sooner."
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
