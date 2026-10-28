// Content for the live /service-area/<slug> pages.
//
// Each page is built around real NovaRoof projects in that area. Keep the copy
// specific and factual: no invented project counts, response times, crews or
// certifications. Add a project slug to `projectSlugs` whenever a new job in the
// area is published, so the page keeps getting new, unique local content.

export interface ServiceAreaFaq {
  question: string;
  answer: string;
}

export interface ServiceAreaPage {
  slug: string;
  /** Short name used in headings, e.g. "Harrisonburg" or "Roanoke Valley" */
  areaName: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  heroSubtext: string;
  intro: string[];
  /** Project slugs from projects-data.ts, most relevant first */
  projectSlugs: string[];
  /** Towns and communities covered by this page */
  towns: string[];
  buildingsHeading: string;
  buildings: string;
  approachHeading: string;
  approach: string;
  faqs: ServiceAreaFaq[];
  /** Optional replacement for the "About N miles from our office" sidebar line */
  distanceNote?: string;
}

/** Former city pages that now permanently redirect into a broader area page. */
export const MERGED_AREA_REDIRECTS: Record<string, string> = {
  bridgewater: "harrisonburg",
  waynesboro: "staunton",
  hampton: "hampton-roads",
  "virginia-beach": "hampton-roads",
};

export const serviceAreaPages: ServiceAreaPage[] = [
  {
    slug: "harrisonburg",
    areaName: "Harrisonburg",
    metaTitle: "Commercial Roofing in Harrisonburg, VA | Local Projects | NovaRoof",
    metaDescription:
      "Commercial roof repair, restoration and TPO retrofits in Harrisonburg and Rockingham County. See recent local projects from our Harrisonburg office.",
    headline: "Commercial Roofing in Harrisonburg & Rockingham County",
    heroSubtext:
      "Our office is on Baxter Drive in Harrisonburg. Here are some of the local roofs we've repaired, restored and replaced.",
    intro: [
      "Harrisonburg is home base for NovaRoof. Our office is at 30 Baxter Drive, so jobs in the city, Bridgewater and the rest of Rockingham County are close to home. Most of what we do here is low-slope commercial work: metal shops and warehouses, older rubber roofs, and buildings that have been patched more times than anyone can count.",
      "The projects below are recent Harrisonburg-area jobs. They range from a TPO retrofit underneath a rooftop solar array to an old ballasted rubber roof we stripped and overlaid, and a leak that several other contractors couldn't find.",
    ],
    projectSlugs: [
      "funkys-skate-center-harrisonburg",
      "recycle-management-early-road-harrisonburg",
      "construction-materials-harrisonburg",
      "james-river-equipment",
    ],
    towns: ["Harrisonburg", "Bridgewater", "Dayton", "Broadway", "Timberville", "Elkton", "Mount Crawford", "Penn Laird"],
    buildingsHeading: "Roofs We See Around Harrisonburg",
    buildings:
      "Harrisonburg and Rockingham County have a lot of pre-engineered metal buildings: shops, warehouses, equipment dealers, agricultural businesses and light manufacturing along the Route 11 and I-81 corridors. Many of those roofs are 20 to 40 years old, with loose or rusting fasteners, failed seam sealant and old skylights. There are also plenty of flat roofs on older commercial buildings, often ballasted EPDM or built-up roofs that have been repaired repeatedly instead of being fixed at the source.",
    approachHeading: "How We Approach Harrisonburg Roofs",
    approach:
      "We start by finding out why the roof is leaking and whether the existing roof is still dry and sound underneath. If it is, a restoration (sealing seams and fasteners and coating the roof) is usually the most cost-effective option. When a roof is past that point, we look at overlay and retrofit systems that avoid a full tear-off, like the TPO overlay at the Recycle Management building on Early Road or the TPO retrofit over metal at Funky's Skate Center.",
    faqs: [
      {
        question: "Do you work in Bridgewater and the rest of Rockingham County?",
        answer:
          "Yes. Our office is in Harrisonburg, so Bridgewater, Dayton, Broadway, Timberville, Elkton and the rest of Rockingham County are all close by. We handle everything from small leak repairs to full roof restorations and replacements in the area.",
      },
      {
        question: "Can a new roof be installed on a building that has rooftop solar panels?",
        answer:
          "Yes, but the panels have to come off first. At Funky's Skate Center in Harrisonburg, we removed the entire solar array, installed a TPO retrofit over the existing metal roof, and then reinstalled the panels on the new membrane.",
      },
      {
        question: "Other roofers haven't been able to stop our leak. Can you help?",
        answer:
          "Often, yes. Repeat leaks usually mean the repairs are being made in the wrong place. At a building on Waterman Drive, several local companies had tried to fix chronic leaks; we tracked down the actual source and sealed it permanently. We'd rather find the cause than keep patching symptoms.",
      },
      {
        question: "Do you offer free roof inspections in Harrisonburg?",
        answer:
          "Yes. We inspect commercial roofs in the Harrisonburg area at no charge, document what we find with photos, and give you repair, restoration or replacement options with pricing.",
      },
    ],
  },
  {
    slug: "richmond",
    areaName: "Richmond",
    metaTitle: "Commercial Roofing in Richmond, VA | Metal Roof & Spray Foam Projects",
    metaDescription:
      "Commercial metal roof restoration, spray foam and roof repair in Richmond, Chester, Ashland and Goochland. See recent NovaRoof projects in the Richmond area.",
    headline: "Commercial Roofing in the Richmond Area",
    heroSubtext:
      "Metal roof restorations, spray foam roofs and repairs from Chester to Ashland and out to Goochland County.",
    intro: [
      "The Richmond area is one of the places we work most outside of the Shenandoah Valley. Recent jobs run from Chester in Chesterfield County up to Ashland in Hanover County, and west to Oilville in Goochland County, along with several industrial buildings inside Richmond and Henrico.",
      "Most of these are metal buildings: warehouses, fabrication shops, equipment businesses and offices. Some needed a full restoration, some needed problems from an earlier coating job fixed, and some just needed the right repair in the right place.",
    ],
    projectSlugs: [
      "strickland-manufacturing-oilville",
      "spatco-energy-solutions-richmond",
      "superior-metal-fabricators-richmond",
      "agribusiness-service-ashland",
      "peterbilt-richmond",
      "electric-power-chester",
    ],
    towns: ["Richmond", "Henrico", "Chesterfield", "Chester", "Ashland", "Glen Allen", "Mechanicsville", "Oilville"],
    buildingsHeading: "Roofs We See Around Richmond",
    buildings:
      "The industrial and commercial parks along I-95, I-64 and I-295 are full of low-slope metal buildings. The common problems are the same ones we see statewide, just in larger numbers: rusted panels and flashing, fasteners that have backed out, old patches over seams and penetrations, and skylights that leak or have yellowed. We also see a fair number of metal roofs that were coated once before and are now failing because of poor prep or the wrong product.",
    approachHeading: "How We Approach Richmond-Area Roofs",
    approach:
      "If the metal is still structurally sound, we restore it: clean the roof, treat the rust, remove failed patches and rusted flashing, seal the seams and fasteners, and apply a base coat and top coat. Where the metal is badly rusted or the building needs insulation, a spray foam roof system over the existing metal is a strong alternative, as at Agribusiness Service in Ashland. When a previous coating has failed, like at Strickland Manufacturing in Oilville, we fix those problems first instead of coating over them.",
    faqs: [
      {
        question: "Do you serve Richmond if your office is in Harrisonburg?",
        answer:
          "Yes. We regularly work in Richmond, Henrico, Chesterfield, Hanover and Goochland. The projects on this page are all in the Richmond area, from Chester to Ashland and Oilville.",
      },
      {
        question: "Can you fix a metal roof coating that another contractor installed?",
        answer:
          "Usually. At Strickland Manufacturing in Oilville, the roof had already been coated once. We fixed the problems left from that first job, treated the rust, removed rusted flashing and cleaned out that area, and then applied a full base coat and top coat.",
      },
      {
        question: "What can be done about old or leaking skylights?",
        answer:
          "It depends on whether you still want the daylight. At Superior Metal Fabricators in Richmond, we cleaned the skylights and restored them with a clear polyurethane coating. On other buildings, owners choose to cover the skylights with metal panels and coat over them so they stop leaking for good.",
      },
      {
        question: "Can spray foam go over a rusted metal roof?",
        answer:
          "Yes, as long as the metal is still structurally sound. Spray polyurethane foam adheres directly to the prepared metal, covers the seams and fasteners in one continuous layer, adds insulation, and is then protected with a coating. That's the approach we used at Agribusiness Service in Ashland.",
      },
    ],
  },
  {
    slug: "fredericksburg",
    areaName: "Fredericksburg",
    metaTitle: "Commercial Roofing in Fredericksburg, VA | Metal Roof Restoration",
    metaDescription:
      "Commercial metal roof restoration and recoating in Fredericksburg, Stafford and Prince William County. See recent NovaRoof projects in the area.",
    headline: "Commercial Roofing in Fredericksburg, Stafford & Prince William",
    heroSubtext:
      "Metal roof restorations and recoats for commercial buildings along the I-95 corridor.",
    intro: [
      "Our work in this area has been concentrated along the I-95 corridor, from Stafford County outside Fredericksburg up to Woodbridge in Prince William County. Both recent jobs were metal roofs: one leaking standing-seam roof on a multi-tenant building, and one previously coated warehouse roof with problem skylights.",
      "Multi-tenant and flex buildings are common here, which means the roof work has to happen while tenants keep running their businesses underneath. Coating restorations work well for that, because there's no tear-off and the building stays closed in the whole time.",
    ],
    projectSlugs: ["potomac-creek-drive-fredericksburg", "potomac-millwork-woodbridge"],
    towns: ["Fredericksburg", "Stafford", "Falmouth", "Woodbridge", "Dumfries", "Spotsylvania"],
    buildingsHeading: "Roofs We See Around Fredericksburg",
    buildings:
      "The industrial and flex parks around Fredericksburg, Stafford and Prince William have a lot of standing-seam and screw-down metal roofs, many of them on buildings split between several tenants. Typical issues are leaking seams and fasteners, poorly flashed pipe penetrations and HVAC curbs, and skylights that have become the main source of leaks.",
    approachHeading: "How We Approach Fredericksburg-Area Roofs",
    approach:
      "On a standard metal restoration, we seal every seam and fastener, detail the penetrations, and apply a white reflective coating over the whole roof. That's what we did at 35 Potomac Creek Drive in Stafford County. Where skylights are part of the problem, covering them with metal panels before coating, as we did at Potomac Millwork in Woodbridge, removes the leak points entirely.",
    faqs: [
      {
        question: "Do you work in Stafford and Prince William County?",
        answer:
          "Yes. Our recent projects in this area include a multi-tenant building on Potomac Creek Drive in Stafford County and the Potomac Millwork warehouse in Woodbridge.",
      },
      {
        question: "Can a metal roof be restored while tenants are using the building?",
        answer:
          "In most cases, yes. A coating restoration doesn't remove the existing roof, so the building stays weathertight during the work. We coordinate around access, parking and rooftop equipment so tenants can keep operating.",
      },
      {
        question: "Can you recoat a metal roof that was already restored once?",
        answer:
          "Yes. At Potomac Millwork in Woodbridge, the roof had a previous coating restoration. We covered the skylights with metal panels, cleaned the roof and applied a full coating restoration over it.",
      },
    ],
  },
  {
    slug: "roanoke",
    areaName: "Roanoke Valley",
    metaTitle: "Commercial Roofing in Roanoke, Salem & Vinton, VA | NovaRoof Projects",
    metaDescription:
      "Commercial spray foam and metal roof restoration in Roanoke, Salem, Vinton and Radford. See recent NovaRoof projects in the Roanoke Valley.",
    headline: "Commercial Roofing in the Roanoke Valley",
    heroSubtext:
      "Spray foam roofs and metal roof restorations in Roanoke, Salem, Vinton and the New River Valley.",
    intro: [
      "Our Roanoke-area work has included churches, contractors and industrial buildings in Vinton, Salem and down the road in Radford. These were roofs where replacement would have been expensive and disruptive, and restoration or spray foam made more sense.",
      "At Lynn Haven Baptist Church in Vinton, the metal roof had rust, leaking screws and years of past repairs. At Kirby Cundiff Insulation in Salem and JWB Contractors in Radford, spray foam systems sealed the roofs and added insulation at the same time.",
    ],
    projectSlugs: ["lynn-haven-baptist-church", "kirby-cundiff-insulation", "jwb-contractors-radford"],
    towns: ["Roanoke", "Salem", "Vinton", "Cave Spring", "Radford", "Christiansburg"],
    buildingsHeading: "Roofs We See Around Roanoke",
    buildings:
      "The Roanoke Valley has a lot of older metal roofs on churches, shops and industrial buildings, plus flat roofs on commercial and institutional buildings. Common problems are rusted panels, screws that have loosened and lost their washers, and layer after layer of patches. Because the valley sees real winters, roofs also take a beating from freeze-thaw cycles at seams and flashings.",
    approachHeading: "How We Approach Roanoke-Area Roofs",
    approach:
      "For a metal roof that's still sound, we clean it, apply a rust-inhibiting primer, seal the screws, fasteners and seams, and coat the roof, the same process we used at Lynn Haven Baptist Church. For roofs with widespread leaks or no insulation, spray polyurethane foam with a protective coating creates one continuous, insulated layer over the existing roof.",
    faqs: [
      {
        question: "Do you work in Salem, Vinton and the New River Valley?",
        answer:
          "Yes. Our projects in this area include Lynn Haven Baptist Church in Vinton, Kirby Cundiff Insulation in Salem and JWB Contractors in Radford.",
      },
      {
        question: "Can a church's metal roof be restored instead of replaced?",
        answer:
          "Often, yes. If the panels are still structurally sound, a restoration with rust treatment, sealed fasteners and seams and a finish coating stops the leaks for far less than new metal. That's what we did at Lynn Haven Baptist Church in Vinton.",
      },
      {
        question: "Does a spray foam roof add insulation?",
        answer:
          "Yes. Spray polyurethane foam is an insulating material, so a foam roof adds R-value along with waterproofing. The amount depends on the thickness installed.",
      },
    ],
  },
  {
    slug: "staunton",
    areaName: "Staunton & Waynesboro",
    metaTitle: "Commercial Roofing in Staunton & Waynesboro, VA | NovaRoof Projects",
    metaDescription:
      "Commercial EPDM and metal roof restoration in Staunton, Waynesboro, Verona and Augusta County. See recent NovaRoof projects in the area.",
    headline: "Commercial Roofing in Staunton, Waynesboro & Augusta County",
    heroSubtext:
      "Roof restorations and repairs for commercial buildings across Augusta County, about 25 minutes from our Harrisonburg office.",
    intro: [
      "Staunton, Waynesboro and the rest of Augusta County are a short drive down I-81 from our Harrisonburg office, so this is close-to-home work for us. Recent projects include a downtown Staunton building with an EPDM roof and an agricultural business in Verona with a metal roof.",
      "Augusta County has a mix of historic downtown buildings with flat roofs and newer metal buildings in the industrial and agricultural areas, and we restore both.",
    ],
    projectSlugs: ["one-middlebrook-staunton", "augusta-seed-verona"],
    towns: ["Staunton", "Waynesboro", "Verona", "Fishersville", "Weyers Cave", "Stuarts Draft", "Grottoes"],
    buildingsHeading: "Roofs We See Around Staunton and Waynesboro",
    buildings:
      "Downtown Staunton and Waynesboro have many older masonry buildings with low-slope roofs, often EPDM or built-up roofs with parapet walls and internal drains. Out in the county, around Verona, Weyers Cave and Fishersville, there are more metal buildings for agriculture, distribution and light industry.",
    approachHeading: "How We Approach Augusta County Roofs",
    approach:
      "For EPDM roofs that are still attached and dry, a restoration that reinforces the seams and coats the membrane can add years of life without a tear-off. For metal buildings, we seal the seams and fasteners, treat any rust, and coat the roof.",
    faqs: [
      {
        question: "Do you cover Waynesboro and the rest of Augusta County?",
        answer:
          "Yes. Waynesboro, Verona, Fishersville, Weyers Cave, Stuarts Draft and the rest of Augusta County are all within easy reach of our Harrisonburg office.",
      },
      {
        question: "Can an older EPDM roof be restored?",
        answer:
          "If the membrane is still adhered and the insulation underneath is dry, usually yes. The seams are cleaned and reinforced, and the whole roof is coated. We check for wet insulation first, because coating over a wet roof only hides the problem.",
      },
      {
        question: "Do you offer free inspections in Staunton and Waynesboro?",
        answer:
          "Yes. We inspect commercial roofs in the area at no charge and walk you through the options, from repair to restoration to replacement.",
      },
    ],
  },
  {
    slug: "front-royal",
    areaName: "Northern Shenandoah Valley",
    metaTitle: "Commercial Roofing in Front Royal, Woodstock & Edinburg, VA | NovaRoof",
    metaDescription:
      "Commercial roof replacement, spray foam and restoration in Front Royal, Woodstock, Edinburg and Shenandoah County. See recent NovaRoof projects.",
    headline: "Commercial Roofing in Front Royal & the Northern Shenandoah Valley",
    heroSubtext:
      "Recent projects in Shenandoah County, and service from Front Royal to New Market.",
    intro: [
      "The northern end of the Shenandoah Valley, from Front Royal and Strasburg down through Woodstock and Edinburg to New Market, is an easy run up I-81 from Harrisonburg. Our recent work here includes a restaurant roof replacement in Woodstock and the post office roof in Edinburg.",
      "Many of the buildings in these towns are small, older commercial buildings with flat roofs that hold water. Fixing the drainage is usually as important as replacing or restoring the roof surface.",
    ],
    projectSlugs: ["edinburg-post-office", "los-trancas-woodstock"],
    towns: ["Front Royal", "Strasburg", "Woodstock", "Edinburg", "Mount Jackson", "New Market", "Luray"],
    buildingsHeading: "Roofs We See in the Northern Valley",
    buildings:
      "Main Street buildings in towns like Woodstock, Edinburg and Front Royal often have flat roofs with several layers of old roofing on them, little or no slope, and water that sits for days after a storm. Ponding water speeds up wear on most roof membranes and finds its way through any weak seam or flashing.",
    approachHeading: "How We Approach These Roofs",
    approach:
      "When a roof already has more than one layer, we often remove one before installing anything new. On the Edinburg Post Office, we tore off a layer and used spray foam to build slope into the roof so water runs off, then coated the foam. Where a full replacement is the better choice, as at Los Trancas in Woodstock, we install a new single-ply membrane.",
    faqs: [
      {
        question: "Do you work in Woodstock, Edinburg and Shenandoah County?",
        answer:
          "Yes. Recent projects include the Edinburg Post Office and Los Trancas Restaurant in Woodstock. We also cover Front Royal, Strasburg, Mount Jackson, New Market and Luray.",
      },
      {
        question: "Can you fix a flat roof that holds water?",
        answer:
          "Yes. Spray foam can be installed thicker in low areas to create slope toward drains or edges. On the Edinburg Post Office, we used foam to add slope so water runs off, then coated it.",
      },
      {
        question: "How many roof layers can stay on a building?",
        answer:
          "Building codes generally limit re-covering to roofs with only one existing layer, and extra layers add weight and can trap moisture. If your roof already has two layers, expect to remove at least one before a new system goes on.",
      },
    ],
  },
  {
    slug: "charlottesville",
    areaName: "Charlottesville",
    metaTitle: "Commercial Roofing in Charlottesville & Louisa County, VA | NovaRoof",
    metaDescription:
      "Commercial spray foam roofing, restoration and repair in Charlottesville, Albemarle and Louisa County. See a recent NovaRoof project near Zion Crossroads.",
    headline: "Commercial Roofing in Charlottesville & Central Virginia",
    heroSubtext:
      "Spray foam, restoration and repairs for commercial and church roofs in Albemarle, Fluvanna and Louisa County.",
    intro: [
      "Charlottesville is about 36 miles from our Harrisonburg office. We cover Charlottesville, Albemarle County and the surrounding counties east toward Zion Crossroads and Louisa.",
      "A recent project in this area was Central Virginia Assembly of God on Cross County Road in Mineral, in Louisa County. The church's long flat roof had a TPO layer over an old tar and gravel roof. We tore off the TPO, removed the gravel, and installed spray foam with two coats of acrylic.",
    ],
    projectSlugs: ["central-virginia-assembly-of-god-mineral"],
    towns: ["Charlottesville", "Crozet", "Zion Crossroads", "Louisa", "Mineral", "Palmyra", "Gordonsville"],
    buildingsHeading: "Roofs We See Around Charlottesville",
    buildings:
      "Churches, schools, offices and retail buildings around Charlottesville and the surrounding counties often have older flat roofs: tar and gravel built-up roofs, or newer membranes installed over them. When a membrane is laid over an uneven gravel roof, it can wear and leak sooner than expected.",
    approachHeading: "How We Approach These Roofs",
    approach:
      "If an existing roof has too many layers or a surface that isn't suitable to build on, we remove what needs to come off first. Spray foam then creates a continuous, insulated roof over the prepared surface, and a coating protects the foam from UV and weather.",
    faqs: [
      {
        question: "Do you work in Louisa and Fluvanna County?",
        answer:
          "Yes. Our recent work in this area includes Central Virginia Assembly of God in Mineral, near Zion Crossroads. We also cover Charlottesville, Albemarle, Fluvanna and Orange County.",
      },
      {
        question: "Can spray foam be installed over a tar and gravel roof?",
        answer:
          "The loose gravel has to come off first so the foam can bond to a clean, solid surface. At Central Virginia Assembly of God, we removed the TPO layer and the gravel before spraying foam and applying two coats of acrylic.",
      },
      {
        question: "Do you offer free roof inspections in Charlottesville?",
        answer:
          "Yes. We inspect commercial roofs in the Charlottesville area at no charge and give you options with pricing.",
      },
    ],
  },
  {
    slug: "lynchburg",
    areaName: "Lynchburg",
    metaTitle: "Commercial Roofing in Lynchburg, VA | TPO Roof Replacement | NovaRoof",
    metaDescription:
      "Commercial TPO roof replacement, restoration and repair in Lynchburg and the surrounding counties. See a recent NovaRoof project in Lynchburg.",
    headline: "Commercial Roofing in Lynchburg",
    heroSubtext:
      "Roof replacement, restoration and repairs for commercial buildings in Lynchburg and the surrounding area.",
    intro: [
      "Lynchburg is about 73 miles from our Harrisonburg office. We cover the city along with Bedford, Amherst and Campbell counties.",
      "Our recent Lynchburg work includes a TPO roof replacement at Oakley Market. Not every roof can be restored, and when replacement is the right call, we install a new single-ply system.",
    ],
    projectSlugs: ["oakley-market-lynchburg"],
    towns: ["Lynchburg", "Forest", "Madison Heights", "Bedford", "Amherst", "Rustburg"],
    buildingsHeading: "Roofs We See Around Lynchburg",
    buildings:
      "Lynchburg has a large stock of older commercial buildings, from the downtown and Rivermont areas to retail and industrial buildings out along Wards Road and Route 29. Low-slope roofs on these buildings often have aging membranes, wet insulation in spots, and flashing details that have failed at walls and rooftop units.",
    approachHeading: "How We Approach Lynchburg Roofs",
    approach:
      "We check the roof for wet insulation and deck problems before recommending anything. If most of the roof is dry and sound, restoration saves the cost of a tear-off. If the existing roof has failed, we replace it with a TPO membrane, as at Oakley Market.",
    faqs: [
      {
        question: "Do you serve Lynchburg and the surrounding counties?",
        answer:
          "Yes. We work in Lynchburg as well as Forest, Bedford, Amherst and Campbell County. Our recent work there includes a TPO roof replacement at Oakley Market.",
      },
      {
        question: "How do I know if my roof should be restored or replaced?",
        answer:
          "The biggest factor is whether the insulation under the membrane is dry. A roof with mostly dry insulation and a sound deck is usually a restoration candidate. Widespread wet insulation, deck damage, or multiple failed layers point toward replacement.",
      },
      {
        question: "Do you offer free roof inspections in Lynchburg?",
        answer:
          "Yes. We inspect commercial roofs in the Lynchburg area at no charge and provide repair, restoration and replacement options.",
      },
    ],
  },
  {
    slug: "hampton-roads",
    areaName: "Hampton Roads",
    metaTitle: "Commercial Roofing in Hampton Roads, VA | Hampton, Virginia Beach & Williamsburg",
    metaDescription:
      "Commercial roof coatings, EPDM restoration and spray foam in Hampton, Virginia Beach and Williamsburg. See recent NovaRoof projects in Hampton Roads.",
    headline: "Commercial Roofing in Hampton Roads",
    heroSubtext:
      "Roof restorations for hotels, churches and warehouses in Hampton, Virginia Beach and the Williamsburg area.",
    intro: [
      "Hampton Roads is a long way from our Harrisonburg office, but it has become a regular area for us. Recent jobs include the Hilton Garden Inn Hampton Coliseum Central, First Lynnhaven Baptist Church in Virginia Beach, and an 18,000 square foot warehouse in Toano, just outside Williamsburg.",
      "All three were restorations rather than tear-offs: a water-based silicone coating over a hotel's shingle roofs, a seam-reinforced coating over a church's EPDM roof, and spray foam with a coating over a metal warehouse that had no insulation.",
    ],
    projectSlugs: ["hilton-garden-inn-hampton", "first-lynnhaven-baptist-church", "toano-warehouse-spray-foam"],
    towns: ["Hampton", "Newport News", "Williamsburg", "Toano", "Norfolk", "Virginia Beach", "Chesapeake"],
    buildingsHeading: "Roofs We See Around Hampton Roads",
    buildings:
      "Coastal weather is hard on roofs. Salt air speeds up corrosion on metal roofs and fasteners, and strong wind from tropical storms and nor'easters puts stress on shingles, membrane seams and roof edges. Around Hampton Roads we see a lot of hotels, churches, offices and warehouses whose roofs are still structurally sound but are leaking, faded or worn at the seams.",
    approachHeading: "How We Approach Hampton Roads Roofs",
    approach:
      "When the roof underneath is still sound, a coating restoration usually costs far less than replacement and keeps the building open during the work. At the Hilton Garden Inn in Hampton, we coated the shingle roofs with WIMAR Performance Coatings, a water-based silicone designed to significantly increase wind and hail resistance. At First Lynnhaven Baptist Church, we cleaned the EPDM, reinforced every seam and coated the roof. In Toano, spray foam covered the damaged metal panels and added R-10 insulation.",
    faqs: [
      {
        question: "Do you work in Hampton Roads if your office is in Harrisonburg?",
        answer:
          "Yes. Recent projects include the Hilton Garden Inn in Hampton, First Lynnhaven Baptist Church in Virginia Beach and a commercial warehouse in Toano. We travel to the area for commercial roof restorations, coatings and spray foam work.",
      },
      {
        question: "Can an asphalt shingle roof be coated instead of replaced?",
        answer:
          "Yes, if the shingles are still attached and the deck is sound. At the Hilton Garden Inn in Hampton, we applied a water-based silicone made for shingle roofs. It refreshed the color and is designed to significantly increase the roof's wind and hail resistance, without a tear-off around an operating hotel.",
      },
      {
        question: "Can a church's EPDM roof be restored?",
        answer:
          "Often, yes. At First Lynnhaven Baptist Church in Virginia Beach, we cleaned the black EPDM membrane, reinforced all of the seams with sealant, and coated the roof. That avoids the cost and disruption of tearing off a roof that is still attached and dry.",
      },
      {
        question: "Does coastal salt air affect commercial metal roofs?",
        answer:
          "Yes. Salt in the air speeds up rust on exposed metal panels, fasteners and flashing. Keeping the metal sealed with a coating, or covered with spray foam and a coating, protects it from the moisture and salt that drive corrosion.",
      },
    ],
    distanceNote: "We travel to Hampton Roads for commercial roofing projects",
  },
];

export const SERVICE_AREA_PAGE_SLUGS = serviceAreaPages.map((p) => p.slug);

export function getServiceAreaPage(slug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((p) => p.slug === slug);
}

/** The service-area page whose project list includes this project, if any. */
export function getServiceAreaForProject(projectSlug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((p) => p.projectSlugs.includes(projectSlug));
}
