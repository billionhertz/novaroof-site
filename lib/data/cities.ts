export interface City {
  slug: string;
  name: string;
  state: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  localAreas: string[];
  landmarks: string[];
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

export const cities: City[] = [
  {
    slug: "harrisonburg-va",
    name: "Harrisonburg",
    state: "VA",
    title: "Commercial Roofing Harrisonburg VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Harrisonburg, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Harrisonburg, VA",
    intro: [
      "As the largest city in Virginia's Shenandoah Valley, Harrisonburg is home to a diverse mix of commercial properties — from the retail centers along University Boulevard to the industrial facilities on Neff Avenue, from the historic buildings around Court Square to the modern office complexes serving James Madison University and Eastern Mennonite University.",
      "Nova Roof is proud to call Harrisonburg home. Our headquarters at 30 Baxter Drive puts us minutes from commercial properties throughout the city, allowing us to respond quickly to emergencies and maintain close relationships with the building owners we serve.",
      "We've worked on commercial roofs across Harrisonburg — from the shopping centers at Harrisonburg Crossing to medical facilities near Sentara RMH, from warehouses along Route 11 to churches and nonprofits throughout the community. Whatever your building type, we have the experience to keep your roof performing.",
      "Harrisonburg's four-season climate creates unique roofing challenges. Summer UV exposure degrades membrane surfaces, while winter freeze-thaw cycles stress seams and flashings. Our maintenance and restoration programs are designed specifically for these conditions."
    ],
    localAreas: [
      "University Boulevard Corridor",
      "Harrisonburg Crossing",
      "Downtown Court Square",
      "Neff Avenue Industrial",
      "Route 11 Commercial",
      "Sentara RMH Medical District",
      "Port Republic Road",
      "East Market Street"
    ],
    landmarks: ["JMU", "EMU", "Court Square", "University Blvd", "Route 11", "Sentara RMH", "Neff Ave", "Harrisonburg Crossing"],
    testimonial: {
      text: "William was very responsive and hands on during our project, from the quoting process all the way through the completion and final inspection. Very happy with the end result!",
      author: "Z. Erskine",
      location: "Harrisonburg, VA"
    }
  },
  {
    slug: "staunton-va",
    name: "Staunton",
    state: "VA",
    title: "Commercial Roofing Staunton VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Staunton, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Staunton, VA",
    intro: [
      "Staunton's historic Wharf District and Beverley Street corridor showcase some of the finest Victorian architecture in Virginia — and many of those beautiful buildings have flat or low-slope commercial roofs that require specialized care. Nova Roof brings expertise in both historic building sensitivity and modern roofing technology.",
      "Beyond downtown, Staunton's commercial landscape includes the retail centers at Staunton Crossing, the industrial facilities along Route 11, and the growing business parks serving Augusta County. We work with building owners and property managers across all these sectors.",
      "The American Shakespeare Center and surrounding arts district require roofing contractors who understand the unique needs of cultural institutions. We've worked with nonprofits and historic properties throughout the region, providing solutions that respect both budget constraints and architectural integrity."
    ],
    localAreas: [
      "Wharf Historic District",
      "Beverley Street",
      "Staunton Crossing",
      "Route 11 Corridor",
      "Greenville Avenue",
      "West Beverley",
      "Augusta County Business Parks",
      "Downtown Arts District"
    ],
    landmarks: ["Wharf Historic District", "Beverley Street", "Augusta County", "Staunton Crossing", "American Shakespeare Center"]
  },
  {
    slug: "charlottesville-va",
    name: "Charlottesville",
    state: "VA",
    title: "Commercial Roofing Charlottesville VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Charlottesville, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Charlottesville, VA",
    intro: [
      "Charlottesville's commercial real estate market is anchored by the University of Virginia — but extends far beyond Grounds. From the boutique shops along the Downtown Mall to the medical facilities in the UVA Health district, from the retail centers at Barracks Road to the office parks along the Route 29 corridor, commercial roofing needs are diverse and demanding.",
      "We serve building owners throughout Charlottesville and Albemarle County, bringing Shenandoah Valley practicality to a market often dominated by contractors from Richmond and Northern Virginia. Our focus on maintenance and restoration means we're looking to extend your roof's life — not sell you a replacement you don't need.",
      "The Route 29 corridor presents particular roofing challenges with its mix of retail, office, and industrial buildings. We've developed efficient service routes throughout the corridor, allowing us to respond quickly to maintenance calls and emergencies."
    ],
    localAreas: [
      "Downtown Mall",
      "Barracks Road",
      "Route 29 Corridor",
      "UVA Health District",
      "Pantops",
      "Fifth Street Station",
      "Albemarle Square",
      "Rio Road Commercial"
    ],
    landmarks: ["UVA", "Downtown Mall", "Route 29 corridor", "Albemarle County", "Barracks Road"]
  },
  {
    slug: "waynesboro-va",
    name: "Waynesboro",
    state: "VA",
    title: "Commercial Roofing Waynesboro VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Waynesboro, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Waynesboro, VA",
    intro: [
      "Situated at the eastern edge of the Shenandoah Valley where the Blue Ridge Parkway meets the valley floor, Waynesboro serves as a gateway between the mountain communities and the broader region. The city's commercial landscape reflects this position — with retail centers serving local residents, industrial facilities along the South River, and hospitality businesses catering to Blue Ridge visitors.",
      "Waynesboro Town Center and the Wayne Avenue commercial corridor form the heart of the city's retail and service economy. We work with building owners throughout these areas, providing the maintenance and restoration services that keep commercial operations running smoothly.",
      "The city's industrial heritage lives on in manufacturing facilities and warehouses that require specialized roofing expertise. Many of these buildings feature metal roofs or older membrane systems that benefit significantly from our restoration programs."
    ],
    localAreas: [
      "Wayne Avenue",
      "Waynesboro Town Center",
      "South River Industrial",
      "Rosser Avenue",
      "Hopeman Parkway",
      "Basic City",
      "Lew Dewitt Boulevard",
      "Route 250 Corridor"
    ],
    landmarks: ["South River", "Wayne Avenue", "Waynesboro Town Center", "Augusta County", "Blue Ridge Parkway"]
  },
  {
    slug: "broadway",
    name: "Broadway",
    state: "VA",
    title: "Commercial Roofing Broadway VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Broadway, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Broadway, VA",
    intro: [
      "Broadway sits at the heart of Virginia's poultry industry, with processing facilities, agricultural suppliers, and supporting businesses forming the backbone of the local economy. These industrial buildings require roofing contractors who understand the unique demands of food processing environments — where cleanliness, temperature control, and continuous operation are paramount.",
      "Along Route 42 and throughout the Broadway commercial district, we serve retail, office, and light industrial buildings with the same attention to detail we bring to larger agricultural facilities. Our maintenance programs help building owners avoid the emergency repairs that disrupt business operations.",
      "The agricultural economy means many Broadway buildings operate around the clock. Our restoration systems minimize disruption during application, allowing facilities to maintain operations while we extend their roof's lifespan."
    ],
    localAreas: [
      "Route 42 Commercial",
      "Main Street",
      "Industrial Park",
      "Poultry Processing District",
      "Linville-Edom Road",
      "North Main",
      "Agricultural Supply Corridor"
    ],
    landmarks: ["Shenandoah Valley poultry industry", "Route 42", "agricultural businesses"]
  },
  {
    slug: "bridgewater-va",
    name: "Bridgewater",
    state: "VA",
    title: "Commercial Roofing Bridgewater VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Bridgewater, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Bridgewater, VA",
    intro: [
      "Bridgewater College anchors this small Shenandoah Valley town, but the commercial landscape extends beyond campus. Local businesses along Main Street, professional offices, and light industrial facilities all require roofing expertise that respects both tight budgets and high standards.",
      "The North River runs through town, and buildings near the waterway face particular challenges with humidity and drainage. Our inspection process identifies these site-specific concerns and addresses them with targeted maintenance and repair strategies.",
      "We appreciate Bridgewater's small-town character and work to maintain the personal relationships that make doing business here different from larger markets. When you call Nova Roof, you'll talk to people who know your building and understand your needs."
    ],
    localAreas: [
      "Main Street",
      "Bridgewater College Campus",
      "North River District",
      "Dry River Road",
      "Mount Crawford",
      "Spring Creek",
      "Route 42 Commercial"
    ],
    landmarks: ["Bridgewater College", "North River", "small-town commercial core"]
  },
  {
    slug: "elkton-va",
    name: "Elkton",
    state: "VA",
    title: "Commercial Roofing Elkton VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Elkton, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Elkton, VA",
    intro: [
      "Elkton serves as a gateway to Shenandoah National Park, with Route 33 connecting the valley to the Swift Run Gap entrance. This position creates a unique commercial mix — hospitality businesses serving park visitors, local retail along Main Street, and light industrial facilities supporting the regional economy.",
      "The South Fork of the Shenandoah River runs through town, and buildings along the waterway benefit from our expertise in moisture management and drainage solutions. River-adjacent properties face particular roofing challenges that generic contractors often overlook.",
      "We understand the seasonal nature of Elkton's tourism economy and schedule major work to minimize impact on peak visitor seasons. Our maintenance programs keep roofs performing year-round while preparing them for the heavy use summer months."
    ],
    localAreas: [
      "Route 33 Corridor",
      "Main Street",
      "South Fork District",
      "Blue & Gray Drive",
      "Spotswood Trail",
      "Shenandoah National Park Gateway"
    ],
    landmarks: ["Shenandoah National Park gateway", "Route 33", "South Fork of the Shenandoah River"]
  },
  {
    slug: "new-market-va",
    name: "New Market",
    state: "VA",
    title: "Commercial Roofing New Market VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in New Market, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in New Market, VA",
    intro: [
      "New Market's position along I-81 makes it a natural stopping point for travelers, and the commercial landscape reflects this — with hotels, restaurants, and service stations clustered near the interstate, while the historic downtown along Old Cross Road preserves the town's Civil War heritage.",
      "The New Market Battlefield State Historical Park draws visitors year-round, and hospitality businesses throughout town depend on well-maintained facilities. We work with hotel and restaurant owners to keep roofs performing without disrupting guest experiences.",
      "Beyond tourism, New Market serves surrounding agricultural communities with retail, professional services, and light industrial businesses. Our restoration programs offer these building owners a cost-effective alternative to full roof replacement."
    ],
    localAreas: [
      "I-81 Corridor",
      "Old Cross Road",
      "Congress Street",
      "Battlefield District",
      "Route 211",
      "Shenandoah Caverns Area",
      "Main Street Commercial"
    ],
    landmarks: ["New Market Battlefield", "I-81 corridor", "Old Cross Road"]
  },
  {
    slug: "winchester-va",
    name: "Winchester",
    state: "VA",
    title: "Commercial Roofing Winchester VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Winchester, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Winchester, VA",
    intro: [
      "As the northern anchor of the Shenandoah Valley, Winchester is a major commercial center with a diverse building inventory. Old Town Winchester's historic structures require sensitive roofing approaches, while the Apple Blossom Mall area and Route 7 corridors feature modern retail and office construction.",
      "Shenandoah University and the Winchester Medical Center create significant institutional roofing demand. We work with facilities managers at educational and healthcare institutions who require reliable, responsive roofing services that minimize disruption to critical operations.",
      "The Route 37 bypass has opened new commercial development, and we've built relationships with property managers throughout these newer business parks. Whether your building is a historic downtown structure or a modern industrial facility, we have the expertise to serve your needs."
    ],
    localAreas: [
      "Old Town Winchester",
      "Apple Blossom Mall",
      "Route 7 Corridor",
      "Medical District",
      "Shenandoah University Area",
      "Route 37 Business Parks",
      "Pleasant Valley Road",
      "Millwood Pike"
    ],
    landmarks: ["Old Town Winchester", "Apple Blossom Mall", "Route 7", "Shenandoah University", "medical district"]
  },
  {
    slug: "luray-va",
    name: "Luray",
    state: "VA",
    title: "Commercial Roofing Luray VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Luray, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Luray, VA",
    intro: [
      "Luray Caverns draws over 500,000 visitors annually, making tourism the economic engine of Page County. Hotels, restaurants, and attractions throughout town depend on well-maintained facilities to serve this steady stream of visitors — and roofing emergencies can devastate guest experiences and online reviews.",
      "Main Street Luray preserves small-town character while serving both visitors and residents. We work with building owners along Main Street who appreciate contractors that understand both historic preservation values and modern performance requirements.",
      "Beyond tourism, Luray serves the agricultural communities of Page County with retail, professional services, and light industrial businesses. Our restoration programs offer practical solutions for building owners looking to extend roof life without major capital expenditure."
    ],
    localAreas: [
      "Main Street",
      "Luray Caverns Area",
      "Route 211 Corridor",
      "Page Valley Shopping",
      "Industrial Park",
      "East Main",
      "Luray Ave Commercial"
    ],
    landmarks: ["Luray Caverns", "Main Street", "Page County", "tourism-based businesses"]
  },
  {
    slug: "dayton-va",
    name: "Dayton",
    state: "VA",
    title: "Commercial Roofing Dayton VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Dayton, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Dayton, VA",
    intro: [
      "Dayton's rural character belies its commercial significance. The Dayton Farmers Market draws visitors from throughout the region, while agricultural businesses, equipment dealers, and service providers support the surrounding farming communities.",
      "Silver Lake and the scenic countryside attract visitors, and hospitality businesses throughout the area require reliable roofing services. We understand the seasonal patterns of rural tourism and schedule work accordingly.",
      "Agricultural buildings present unique roofing challenges — from large-span metal structures to climate-controlled storage facilities. Our experience with industrial and agricultural properties throughout the Shenandoah Valley makes us well-equipped to serve Dayton's commercial needs."
    ],
    localAreas: [
      "Main Street",
      "Silver Lake Area",
      "Dayton Farmers Market",
      "Route 42",
      "Bowman Road",
      "Rural Commercial",
      "Agricultural District"
    ],
    landmarks: ["Silver Lake", "Dayton Farmers Market", "rural commercial buildings"]
  },
  {
    slug: "massanutten-va",
    name: "Massanutten",
    state: "VA",
    title: "Commercial Roofing Massanutten VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Massanutten, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Massanutten, VA",
    intro: [
      "Massanutten Resort is one of the largest employers in the Harrisonburg area, and the surrounding McGaheysville community has grown to support this hospitality economy. Hotels, vacation rentals, restaurants, and service businesses throughout the area require roofing contractors who understand the unique demands of tourism properties.",
      "Resort and hospitality buildings face particular roofing challenges — guest expectations are high, operational disruption must be minimized, and seasonal usage patterns affect scheduling. We work closely with property managers to plan maintenance and restoration work around peak seasons.",
      "Beyond the resort itself, the Massanutten area includes residential management companies, retail centers, and professional services that support the tourism economy. We serve this full range of commercial properties."
    ],
    localAreas: [
      "Massanutten Resort",
      "McGaheysville",
      "Resort Commercial District",
      "Route 33 Corridor",
      "Hospitality Row",
      "Vacation Property Management",
      "Summit Drive"
    ],
    landmarks: ["Massanutten Resort", "vacation/hospitality properties", "McGaheysville"]
  },
  {
    slug: "weyers-cave-va",
    name: "Weyers Cave",
    state: "VA",
    title: "Commercial Roofing Weyers Cave VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Weyers Cave, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Weyers Cave, VA",
    intro: [
      "The Shenandoah Valley Regional Airport puts Weyers Cave on the map for business travelers and cargo operations. Airport-adjacent businesses, aviation services, and the logistics facilities that cluster near airports all require specialized roofing expertise.",
      "Grand Caverns and the surrounding tourism district create hospitality demand, while Route 256 serves as a commercial corridor connecting the airport area to nearby communities. We serve building owners throughout this diverse commercial landscape.",
      "Industrial facilities near the airport often have large-span metal roofs that benefit significantly from our restoration programs. These coating systems eliminate the leaks and rust that plague older metal buildings while avoiding the massive expense of full replacement."
    ],
    localAreas: [
      "Airport District",
      "Route 256 Corridor",
      "Grand Caverns Area",
      "Industrial Park",
      "Weyers Cave Commercial",
      "Aviation Services District"
    ],
    landmarks: ["Shenandoah Valley Regional Airport", "Grand Caverns", "Route 256"]
  },
  {
    slug: "grottoes-va",
    name: "Grottoes",
    state: "VA",
    title: "Commercial Roofing Grottoes VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Grottoes, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Grottoes, VA",
    intro: [
      "Grottoes takes its name from Grand Caverns, one of the oldest show caves in America, and tourism remains important to the local economy. But beyond the caverns, Grottoes serves as a small-town commercial center for surrounding communities.",
      "The South River runs through town, and as with other river communities in the valley, buildings near the waterway face particular moisture and drainage challenges. Our inspection process identifies these site-specific concerns.",
      "We appreciate working with small-town building owners who value personal relationships and straightforward communication. When you work with Nova Roof, you'll deal with the same people from inspection through completion."
    ],
    localAreas: [
      "Main Street",
      "Grand Caverns Area",
      "South River District",
      "Route 256",
      "Dogwood Avenue",
      "Cave Road Commercial"
    ],
    landmarks: ["Grand Caverns", "South River", "small-town commercial district"]
  },
  {
    slug: "timberville-va",
    name: "Timberville",
    state: "VA",
    title: "Commercial Roofing Timberville VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Timberville, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Timberville, VA",
    intro: [
      "Timberville anchors the northern end of Rockingham County's poultry processing corridor, with major facilities requiring specialized roofing services that understand food processing environments. Temperature control, cleanliness, and minimal operational disruption are paramount.",
      "Cargill Meat Solutions and supporting businesses along Plains Mill Road create significant industrial roofing demand. These facilities often operate around the clock, requiring roofing contractors who can work efficiently and coordinate closely with operations managers.",
      "Beyond the processing facilities, Timberville's Main Street serves local residents with retail, professional services, and light commercial businesses. We provide the same responsive service to small-town building owners that we offer to industrial clients."
    ],
    localAreas: [
      "Plains Mill Road",
      "Main Street",
      "Industrial Corridor",
      "Poultry Processing District",
      "Route 42",
      "New Market Road",
      "Commercial Center"
    ],
    landmarks: ["Cargill Meat Solutions", "Plains Mill Road", "poultry processing facilities"]
  },
  {
    slug: "verona-va",
    name: "Verona",
    state: "VA",
    title: "Commercial Roofing Verona VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Verona, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Verona, VA",
    intro: [
      "Verona hosts the Augusta Expo, one of Virginia's premier event facilities, along with the Augusta County government center and a growing commercial corridor along Route 11. This mix of civic, hospitality, and commercial buildings creates diverse roofing demands.",
      "The Augusta Expo's large-span event facilities require roofing contractors who understand the unique needs of public assembly buildings. We work with facility managers to schedule maintenance and repairs around event calendars.",
      "Route 11 through Verona includes retail, office, and light industrial buildings serving both local residents and the broader Augusta County market. Our maintenance programs help these building owners avoid the emergency repairs that disrupt business operations."
    ],
    localAreas: [
      "Augusta Expo",
      "Route 11 Corridor",
      "Government Center",
      "Lee Highway Commercial",
      "Industrial Park",
      "Verona Crossing",
      "Middle River"
    ],
    landmarks: ["Augusta Expo", "Route 11", "Augusta County government center"]
  },
  {
    slug: "stuarts-draft-va",
    name: "Stuarts Draft",
    state: "VA",
    title: "Commercial Roofing Stuarts Draft VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Stuarts Draft, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Stuarts Draft, VA",
    intro: [
      "The Hershey Company's manufacturing facility puts Stuarts Draft on the map for industrial roofing, but the community's commercial landscape extends far beyond that single employer. Manufacturing facilities, distribution centers, and supporting businesses along Stuarts Draft Highway create significant demand for specialized roofing services.",
      "Industrial buildings in this corridor often feature large-span metal roofs that benefit dramatically from our restoration programs. These coating systems eliminate the leaks and rust that plague older metal structures while avoiding the massive expense and disruption of full replacement.",
      "Beyond the manufacturing corridor, Stuarts Draft serves local residents with retail, professional services, and light commercial businesses. We provide responsive service to building owners throughout the community."
    ],
    localAreas: [
      "Stuarts Draft Highway",
      "Manufacturing Corridor",
      "Hershey Area",
      "Route 340",
      "Industrial Park",
      "Retail District",
      "Lyndhurst"
    ],
    landmarks: ["Hershey plant", "Stuarts Draft Highway", "manufacturing corridor"]
  },
  {
    slug: "edinburg-va",
    name: "Edinburg",
    state: "VA",
    title: "Commercial Roofing Edinburg VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Edinburg, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Edinburg, VA",
    intro: [
      "Edinburg serves Shenandoah County with a classic small-town commercial core along Main Street, where historic buildings house retail shops, professional offices, and local services. These structures require roofing contractors who understand both historic preservation values and modern performance requirements.",
      "Stoney Creek runs through town, and buildings near the waterway benefit from our expertise in moisture management and drainage solutions. River-adjacent properties face particular roofing challenges that require targeted attention.",
      "We appreciate the personal relationships that define small-town business. When you work with Nova Roof in Edinburg, you'll deal with people who know your building and understand your needs — not a call center or rotating crew."
    ],
    localAreas: [
      "Main Street",
      "Stoney Creek District",
      "Route 11 Commercial",
      "Old Valley Pike",
      "Industrial Area",
      "Edinburgh Mill"
    ],
    landmarks: ["Shenandoah County", "Stoney Creek", "Main Street businesses"]
  },
  {
    slug: "woodstock-va",
    name: "Woodstock",
    state: "VA",
    title: "Commercial Roofing Woodstock VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Woodstock, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Woodstock, VA",
    intro: [
      "As the county seat of Shenandoah County, Woodstock combines civic functions with a vibrant commercial core. Court Street and Main Street feature a mix of government buildings, professional offices, and retail businesses — many in historic structures that require sensitive roofing approaches.",
      "The North Fork of the Shenandoah River runs through town, creating beautiful scenery but also challenging conditions for buildings near the waterway. Our inspection process identifies moisture-related concerns and addresses them with targeted solutions.",
      "We serve building owners throughout Woodstock and surrounding Shenandoah County, from the historic downtown to the newer commercial development along Route 11. Whatever your building type, we have the expertise to keep your roof performing."
    ],
    localAreas: [
      "Court Street",
      "Main Street",
      "North Fork District",
      "Route 11 Commercial",
      "Government Center",
      "Woodstock Museum Area",
      "Industrial Park"
    ],
    landmarks: ["Shenandoah County seat", "Court Street", "North Fork of the Shenandoah River"]
  },
  {
    slug: "lexington-va",
    name: "Lexington",
    state: "VA",
    title: "Commercial Roofing Lexington VA | Roof Repair & Restoration",
    description: "Nova Roof provides commercial roof repair, maintenance, and restoration services in Lexington, Virginia. Free inspections for Shenandoah Valley building owners.",
    h1: "Commercial Roofing in Lexington, VA",
    intro: [
      "Lexington's historic downtown is anchored by two prestigious institutions — Virginia Military Institute and Washington and Lee University — creating a unique commercial environment where historic preservation meets institutional demands. Main Street's carefully maintained buildings require roofing contractors who understand both aesthetics and performance.",
      "Beyond the academic community, Lexington serves as the commercial center of Rockbridge County, with retail, professional services, and light industrial businesses serving local residents and visitors. The Blue Ridge Parkway and Natural Bridge draw tourists year-round.",
      "We appreciate the high standards that define Lexington and bring that same attention to detail to every project. Whether you're managing a historic Main Street building or a modern commercial facility, Nova Roof delivers the quality workmanship this community expects."
    ],
    localAreas: [
      "Main Street",
      "VMI Area",
      "Washington and Lee District",
      "Route 11 Commercial",
      "Rockbridge County",
      "Historic Downtown",
      "South Main"
    ],
    landmarks: ["VMI", "Washington and Lee University", "Main Street", "historic downtown", "Rockbridge County"]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
