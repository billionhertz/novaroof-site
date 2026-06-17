// Unique content for each city page to ensure 50%+ unique content per page

export interface CityContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  heroSubtext: string;
  intro: string;
  localLandmarks: string[];
  industries: string[];
  weatherChallenges: string;
  uniqueParagraph: string;
  servicesEmphasis: string;
}

export const cityContent: Record<string, CityContent> = {
  "richmond": {
    slug: "richmond",
    metaTitle: "Commercial Roofing Richmond VA | TPO, EPDM & Restoration",
    metaDescription: "NovaRoof restores and replaces commercial roofs across Richmond VA — from Scott's Addition warehouses to Short Pump retail. Free roof inspections for RVA building owners.",
    headline: "Commercial Roofing Services in Richmond, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Richmond's commercial buildings. Free inspections — call today.",
    intro: "As Virginia's capital city and a major regional economic center, Richmond presents a diverse commercial roofing market spanning historic buildings in the Fan District to modern corporate campuses in the West End. NovaRoof operates from our Richmond location, giving us deep familiarity with the city's commercial property landscape. From Scott's Addition breweries to Broad Street office towers, we've built lasting relationships with Richmond businesses.",
    localLandmarks: ["Virginia State Capitol", "Carytown", "Scott's Addition", "Shockoe Bottom", "Short Pump Town Center", "VCU Medical Center"],
    industries: ["Finance & Banking", "Healthcare", "Government", "Higher Education", "Manufacturing", "Hospitality"],
    weatherChallenges: "Richmond's location at the fall line of the James River creates a climate with hot, humid summers and variable winters. The city's mix of historic and modern buildings presents diverse roofing challenges, from maintaining century-old flat roofs in Shockoe Bottom to servicing contemporary metal roofs in suburban office parks.",

    uniqueParagraph: "Richmond's commercial real estate spans from the historic warehouses of Manchester to the gleaming corporate headquarters along Interstate 64. Our Richmond team has developed expertise in the city's diverse building types, including the flat-roofed industrial buildings that have been converted to breweries and creative offices in Scott's Addition. We serve clients throughout the metro area, from the government buildings downtown to the retail centers of Short Pump and Midlothian.",
    servicesEmphasis: "For Richmond's diverse commercial building stock, we offer solutions ranging from membrane restoration for historic flat roofs to complete TPO replacements for modern facilities. Our preventative maintenance programs are popular with Richmond property managers overseeing multiple buildings."
  },
  "roanoke": {
    slug: "roanoke",
    metaTitle: "Commercial Roofing Roanoke VA | Metal & Flat Roof Repair",
    metaDescription: "Commercial roof repair, restoration, and replacement in Roanoke VA. NovaRoof serves the Blue Ridge region's medical, industrial, and retail buildings. Free inspection.",
    headline: "Commercial Roofing Services in Roanoke, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Roanoke's commercial buildings. Free inspections — call today.",
    intro: "Roanoke, the largest city in western Virginia and the commercial heart of the Blue Ridge region, presents unique roofing challenges shaped by mountain weather patterns. From the historic downtown market district to the medical campuses and industrial parks, Roanoke businesses need roofing contractors who understand the region's climate extremes. NovaRoof's Harrisonburg location puts us within easy reach of Roanoke, where we've built a strong reputation among commercial property owners.",
    localLandmarks: ["Roanoke City Market", "Carilion Clinic", "Virginia Tech Carilion", "Downtown Roanoke", "Valley View Mall", "Tanglewood Mall"],
    industries: ["Healthcare", "Higher Education", "Manufacturing", "Rail & Transportation", "Finance", "Tourism"],
    weatherChallenges: "Roanoke's valley location creates unique weather patterns including temperature inversions, heavy snowfall, and rapid freeze-thaw cycles that stress commercial roofs. The surrounding mountains can funnel winds through the valley, creating uplift concerns for flat roof membranes.",

    uniqueParagraph: "As the Star City of the South, Roanoke serves as the economic hub for a wide region of western Virginia. Our team has completed commercial roofing projects throughout the Roanoke Valley, from the bustling medical corridor centered on Carilion Clinic to the industrial facilities along the rail lines that made Roanoke a transportation center. We understand how the valley's unique geography affects roof performance and design our systems accordingly.",
    servicesEmphasis: "For Roanoke's commercial buildings, we emphasize roofing systems rated for significant snow loads and resistant to freeze-thaw damage. Our spray foam systems provide added insulation value important for Roanoke's cold winters, while our membrane restorations include reinforced edge details to resist the valley's wind patterns."
  },
  "lynchburg": {
    slug: "lynchburg",
    metaTitle: "Commercial Roofing Lynchburg VA | Repair & Restoration",
    metaDescription: "NovaRoof delivers commercial roof restoration, TPO replacement, and emergency repairs throughout Lynchburg VA and the Hill City region. Free commercial roof inspection.",
    headline: "Commercial Roofing Services in Lynchburg, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Lynchburg's commercial buildings. Free inspections — call today.",
    intro: "Lynchburg, the Hill City perched above the James River, is home to a unique concentration of higher education institutions and a growing healthcare sector. The city's historic downtown and diverse commercial landscape require roofing contractors who can handle everything from century-old warehouse roofs to modern university facilities. NovaRoof's Harrisonburg office is positioned to serve Lynchburg clients with responsive, professional service.",
    localLandmarks: ["Liberty University", "Centra Health", "Downtown Lynchburg", "Monument Terrace", "Randolph College", "University of Lynchburg"],
    industries: ["Higher Education", "Healthcare", "Manufacturing", "Finance", "Tourism"],
    weatherChallenges: "Lynchburg's hillside terrain creates drainage challenges for commercial roofs, while the city's location at the edge of the Blue Ridge means variable weather including occasional heavy snowfall. The concentration of institutional buildings requires contractors familiar with campus environments.",

    uniqueParagraph: "Lynchburg's status as a regional education and healthcare hub creates steady demand for professional commercial roofing services. Our team has completed projects on multiple Lynchburg campuses, understanding the unique requirements of working in educational environments where noise and access must be carefully managed. We've also served the historic commercial buildings of Downtown Lynchburg and the industrial facilities along the James River corridor.",
    servicesEmphasis: "For Lynchburg's educational and healthcare facilities, we offer low-disruption installation methods and flexible scheduling around academic calendars. Our roofing systems for institutional buildings include walkable surfaces for maintenance access and reflective coatings to reduce cooling costs."
  },
  "harrisonburg": {
    slug: "harrisonburg",
    metaTitle: "Commercial Roofing Harrisonburg VA | Local Roof Experts",
    metaDescription: "Headquartered in Harrisonburg, NovaRoof is the Shenandoah Valley's local commercial roofing contractor. Fast repairs, restoration, and replacement. Free inspection.",
    headline: "Commercial Roofing Services in Harrisonburg, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Harrisonburg's commercial buildings. Free inspections — call today.",
    intro: "Harrisonburg, home to James Madison University and the vibrant downtown that has earned national recognition, is where NovaRoof was founded. We know Harrisonburg's commercial landscape intimately, from the historic buildings along Main Street to the growing commercial developments on the east side of town. Our deep roots in the community mean we're invested in the long-term success of Harrisonburg businesses.",
    localLandmarks: ["James Madison University", "Downtown Harrisonburg", "Rockingham Memorial Hospital", "Harrisonburg Farmers Market", "Court Square", "Valley Mall"],
    industries: ["Higher Education", "Healthcare", "Agriculture", "Manufacturing", "Retail", "Hospitality"],
    weatherChallenges: "Harrisonburg's Shenandoah Valley location creates a four-season climate with cold winters, warm summers, and significant precipitation. The valley's agricultural heritage means many commercial buildings have metal roofs that require specialized maintenance and restoration.",

    uniqueParagraph: "As our hometown, Harrisonburg holds special meaning for the NovaRoof team. We've watched Downtown Harrisonburg transform into a nationally recognized dining and arts destination, and we're proud to have protected many of the historic buildings that make our downtown special. From JMU campus facilities to the poultry processing plants that drive the local economy, we understand Harrisonburg's diverse commercial roofing needs better than any outside contractor ever could.",
    servicesEmphasis: "For Harrisonburg's commercial properties, we offer the full range of our services with same-day emergency response capability. Our preventative maintenance programs are especially popular with downtown building owners who want to protect their historic investments for the long term."
  },
  "charlottesville": {
    slug: "charlottesville",
    metaTitle: "Commercial Roofing Charlottesville VA | Roof Restoration",
    metaDescription: "Commercial roofing for Charlottesville & Albemarle County — Route 29 retail, UVA-area offices, and historic downtown buildings. NovaRoof offers free roof inspections.",
    headline: "Commercial Roofing Services in Charlottesville, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Charlottesville's commercial buildings. Free inspections — call today.",
    intro: "Charlottesville, home to the University of Virginia and Thomas Jefferson's Monticello, combines historic preservation with contemporary commerce. The city's commercial roofing needs range from carefully restored buildings on the Downtown Mall to modern research facilities in the surrounding business parks. NovaRoof serves Charlottesville from our Harrisonburg location, just 45 minutes away over the Blue Ridge.",
    localLandmarks: ["University of Virginia", "Downtown Mall", "UVA Medical Center", "Monticello", "Barracks Road", "Stonefield"],
    industries: ["Higher Education", "Healthcare & Research", "Tourism", "Technology", "Retail", "Professional Services"],
    weatherChallenges: "Charlottesville's location at the foot of the Blue Ridge creates variable weather conditions including heavy rainfall, occasional severe storms, and winter weather that can arrive quickly from the mountains. Historic preservation requirements in some areas add complexity to roofing projects.",

    uniqueParagraph: "Charlottesville's identity as a UNESCO World Heritage site adjacent to UVA and Monticello shapes the city's approach to commercial buildings. Our team has experience navigating the historic preservation requirements that apply to Downtown Mall properties and other designated areas. We've also served the modern commercial developments at Stonefield, the research facilities near UVA, and the retail centers along Route 29. Our proximity to Charlottesville allows us to respond quickly while bringing the expertise of a regional commercial roofing specialist.",
    servicesEmphasis: "For Charlottesville's historic commercial buildings, we offer restoration approaches using approved materials and methods. For modern university and research facilities, our high-performance membrane systems meet stringent energy efficiency and environmental requirements."
  },
  "fredericksburg": {
    slug: "fredericksburg",
    metaTitle: "Commercial Roofing Fredericksburg VA | Repair & Replace",
    metaDescription: "NovaRoof serves Fredericksburg VA building owners with commercial roof restoration, replacement, and leak repair along the I-95 corridor. Free roof inspection.",
    headline: "Commercial Roofing Services in Fredericksburg, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Fredericksburg's commercial buildings. Free inspections — call today.",
    intro: "Fredericksburg, a historic city midway between Washington, D.C. and Richmond, has become a thriving commercial center serving the growing Northern Virginia commuter population. The city's blend of preserved historic downtown and modern retail developments creates diverse commercial roofing needs. NovaRoof serves Fredericksburg clients with the expertise needed for both historic rehabilitation and contemporary construction.",
    localLandmarks: ["Historic Downtown Fredericksburg", "Central Park", "Spotsylvania Towne Centre", "Mary Washington Healthcare", "University of Mary Washington"],
    industries: ["Retail", "Healthcare", "Education", "Government", "Hospitality", "Professional Services"],
    weatherChallenges: "Fredericksburg's location in Virginia's Piedmont region means hot, humid summers and variable winters. The city's position on the Rappahannock River adds humidity concerns, while spring and summer storms can be severe.",

    uniqueParagraph: "Fredericksburg's historic downtown is one of Virginia's best-preserved commercial districts, with buildings dating to the colonial era. Our team has experience meeting the preservation requirements that protect Fredericksburg's heritage while solving modern waterproofing challenges. We've also served the contemporary retail and commercial developments along I-95, the medical facilities of Mary Washington Healthcare, and the growing business parks that serve the region's commuter population.",
    servicesEmphasis: "For Fredericksburg's historic commercial buildings, we offer restoration approaches using traditional and approved materials. For modern developments, our energy-efficient membrane systems help retailers and office buildings manage operating costs in a competitive market."
  },
  "staunton": {
    slug: "staunton",
    metaTitle: "Commercial Roofing Staunton VA | Historic & Flat Roofs",
    metaDescription: "Commercial roof repair and restoration in Staunton VA, from the historic Wharf District to Augusta County business parks. NovaRoof offers free roof inspections.",
    headline: "Commercial Roofing Services in Staunton, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Staunton's commercial buildings. Free inspections — call today.",
    intro: "Staunton, a small city with an outsized reputation for historic preservation and the arts, presents unique commercial roofing challenges. The city's remarkable collection of Victorian-era commercial buildings requires contractors who understand historic preservation, while the surrounding Augusta County industrial base needs modern roofing solutions. NovaRoof serves Staunton from nearby Harrisonburg, combining local knowledge with professional capability.",
    localLandmarks: ["Historic Downtown Staunton", "Blackfriars Playhouse", "American Shakespeare Center", "Frontier Culture Museum", "Augusta Health"],
    industries: ["Arts & Culture", "Healthcare", "Manufacturing", "Tourism", "Agriculture"],
    weatherChallenges: "Staunton's Valley location creates a four-season climate with cold winters and warm summers. The city's historic building stock often includes complex roof configurations that require experienced contractors.",

    uniqueParagraph: "Staunton's downtown is among the best-preserved Victorian commercial districts in the nation, attracting visitors from around the world to the American Shakespeare Center and the city's arts scene. Our team has developed expertise in Staunton's unique historic building stock, learning how to preserve architectural character while solving waterproofing challenges. We've served buildings throughout downtown, the medical facilities at Augusta Health, and the industrial operations in the surrounding area.",
    servicesEmphasis: "For Staunton's historic commercial buildings, we specialize in restoration approaches that maintain Victorian-era appearances. Our membrane coatings can extend the life of existing roofs without altering their visible character, while our replacement systems for modern buildings meet current energy standards."
  },
  "waynesboro": {
    slug: "waynesboro",
    metaTitle: "Commercial Roofing Waynesboro VA | Industrial Roof Pros",
    metaDescription: "NovaRoof restores and repairs commercial and industrial roofs throughout Waynesboro VA, from Wayne Avenue retail to South River manufacturing. Free inspection.",
    headline: "Commercial Roofing Services in Waynesboro, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Waynesboro's commercial buildings. Free inspections — call today.",
    intro: "Waynesboro, nestled at the gateway to the Blue Ridge Parkway and Shenandoah National Park, combines small-city charm with a significant manufacturing heritage. The city's commercial roofing needs range from historic downtown buildings to large industrial facilities that have driven the local economy for generations. NovaRoof serves Waynesboro from our nearby Harrisonburg location, providing responsive service to this Valley community.",
    localLandmarks: ["Downtown Waynesboro", "South River", "Blue Ridge Parkway Gateway", "Augusta Medical Center", "P. Buckley Moss Museum"],
    industries: ["Manufacturing", "Healthcare", "Tourism", "Retail", "Agriculture"],
    weatherChallenges: "Waynesboro's location at the foot of Afton Mountain creates variable weather, with rapid changes as weather systems cross the Blue Ridge. Significant rainfall and occasional heavy snowfall challenge commercial roofs.",

    uniqueParagraph: "Waynesboro's manufacturing heritage has left the city with a substantial inventory of industrial roofing that requires specialized care. Our team has extensive experience with Waynesboro's manufacturing facilities, understanding the operational constraints of factories that can't simply shut down for roofing work. We've also served the historic downtown businesses and the growing tourism-related commercial properties that benefit from Waynesboro's Blue Ridge location.",
    servicesEmphasis: "For Waynesboro's industrial facilities, we specialize in metal roof restoration that can be performed while operations continue. Our spray foam systems provide both weatherproofing and insulation improvements for manufacturing buildings, while maintenance programs help prevent costly production interruptions."
  },
  "front-royal": {
    slug: "front-royal",
    metaTitle: "Commercial Roofing Front Royal VA | Repair & Restoration",
    metaDescription: "Commercial roofing for Front Royal VA — downtown storefronts and hospitality buildings near Shenandoah National Park. NovaRoof provides free roof inspections.",
    headline: "Commercial Roofing Services in Front Royal, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Front Royal's commercial buildings. Free inspections — call today.",
    intro: "Front Royal, the gateway to Shenandoah National Park and the northern Shenandoah Valley, is a town where tourism and small-town commerce meet. The town's commercial roofing needs range from downtown storefronts to hospitality facilities serving park visitors. NovaRoof serves Front Royal from our Harrisonburg location, bringing professional commercial roofing capabilities to this scenic community.",
    localLandmarks: ["Shenandoah National Park", "Skyline Caverns", "Downtown Front Royal", "Warren County Courthouse", "Randolph-Macon Academy"],
    industries: ["Tourism", "Hospitality", "Retail", "Education", "Government"],
    weatherChallenges: "Front Royal's location at the northern end of the Shenandoah Valley and gateway to the Blue Ridge creates variable weather conditions. Tourism-dependent businesses need reliable roofing to maintain operations during peak seasons.",

    uniqueParagraph: "Front Royal's economy revolves around its position as the primary gateway to Shenandoah National Park, making the town's hospitality sector essential to local commerce. Our team understands the seasonal demands of tourism businesses and schedules projects to minimize disruption during peak visitation periods. We've served hotels, restaurants, and shops throughout Front Royal, as well as the institutional buildings that support the year-round community.",
    servicesEmphasis: "For Front Royal's hospitality facilities, we emphasize scheduling flexibility and minimal guest disruption. Our roofing systems include enhanced weatherproofing for the variable mountain-edge climate, while our maintenance programs help tourism businesses avoid unexpected closures."
  },
  "bridgewater": {
    slug: "bridgewater",
    metaTitle: "Commercial Roofing Bridgewater VA | Fast Local Service",
    metaDescription: "Just minutes from our HQ, NovaRoof gives Bridgewater VA businesses the fastest commercial roof response in the Valley — repair, restoration, and replacement. Free inspection.",
    headline: "Commercial Roofing Services in Bridgewater, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Bridgewater's commercial buildings. Free inspections — call today.",
    intro: "Bridgewater, a small town just south of Harrisonburg, is home to Bridgewater College and the commercial enterprises that serve this academic community and the surrounding agricultural area. As Harrisonburg's closest neighbor, Bridgewater benefits from NovaRoof's proximity and our deep familiarity with the local community. We're proud to serve Bridgewater businesses with the same dedication we bring to our hometown.",
    localLandmarks: ["Bridgewater College", "Downtown Bridgewater", "North River", "Turner Ashby High School"],
    industries: ["Higher Education", "Agriculture", "Retail", "Manufacturing", "Healthcare"],
    weatherChallenges: "Bridgewater's Valley floor location means it experiences all the weather patterns of the Harrisonburg area, including cold winters with snowfall and warm, humid summers.",

    uniqueParagraph: "Bridgewater's close connection to Harrisonburg means our team knows this community well. We've served Bridgewater College's campus facilities for years, understanding the scheduling requirements of an academic environment. Our work extends to the agricultural businesses and small commercial buildings throughout town. Being just minutes from our headquarters means Bridgewater clients enjoy the fastest possible response times.",
    servicesEmphasis: "For Bridgewater College and local businesses, we provide responsive local service with regional expertise. Our maintenance programs are popular with institutional clients who want proactive roof care, while our restoration services help property owners extend roof life affordably."
  },
  "woodbridge": {
    slug: "woodbridge",
    metaTitle: "Commercial Roofing Woodbridge VA | Repair & Restoration",
    metaDescription: "NovaRoof serves Woodbridge VA and Prince William County with commercial roof restoration, replacement, and leak repair along the I-95 corridor. Free roof inspection.",
    headline: "Commercial Roofing Services in Woodbridge, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Woodbridge's commercial buildings. Free inspections — call today.",
    intro: "Woodbridge sits at the heart of Prince William County's busy I-95 commercial corridor, where retail centers, office parks, and distribution facilities serve one of Northern Virginia's fastest-growing communities. From the shops around Potomac Mills to the office buildings along Prince William Parkway, Woodbridge property owners need commercial roofing contractors who can work efficiently in a high-traffic suburban environment. NovaRoof brings dependable restoration and repair services to the Woodbridge market.",
    localLandmarks: ["Potomac Mills", "Stonebridge at Potomac Town Center", "Prince William Parkway", "Sentara Northern Virginia Medical Center", "Occoquan Bay"],
    industries: ["Retail", "Distribution & Logistics", "Healthcare", "Professional Services", "Hospitality"],
    weatherChallenges: "Woodbridge's location near the Potomac and Occoquan rivers brings humidity and seasonal storms, while its dense commercial development means roofing work must be coordinated around steady customer and tenant traffic. The mix of large retail rooftops and multi-tenant office buildings demands systems that resist ponding and handle heavy HVAC loads.",
    uniqueParagraph: "Woodbridge's explosive retail and residential growth has produced a commercial building stock that ranges from big-box stores to mixed-use developments. Our team understands the logistics of working on busy retail rooftops near Potomac Mills and the multi-tenant coordination required for office and medical buildings along the Route 1 and I-95 corridors. We schedule work to keep stores open and tenants undisturbed.",
    servicesEmphasis: "For Woodbridge's large retail and distribution rooftops, we recommend TPO and silicone restoration systems that resist ponding water and reflect heat to lower cooling costs. Our preventative maintenance programs help property managers protect multi-tenant investments."
  },
  "strasburg": {
    slug: "strasburg",
    metaTitle: "Commercial Roofing Strasburg VA | Metal & Flat Roofs",
    metaDescription: "Commercial roof repair and restoration in Strasburg VA. NovaRoof serves the northern Shenandoah Valley's retail, industrial, and agricultural buildings. Free inspection.",
    headline: "Commercial Roofing Services in Strasburg, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Strasburg's commercial buildings. Free inspections — call today.",
    intro: "Strasburg, positioned where the North Fork of the Shenandoah River meets the I-81 corridor, blends a historic downtown with a growing base of industrial and distribution facilities. The town's commercial roofing needs span antique-district storefronts, manufacturing buildings, and the warehouses that take advantage of its interstate access. NovaRoof serves Strasburg from our nearby Harrisonburg headquarters with both restoration expertise and rapid response.",
    localLandmarks: ["Downtown Strasburg", "Strasburg Antiques", "North Fork Shenandoah River", "Signal Knob", "Hupp's Hill"],
    industries: ["Manufacturing", "Distribution & Logistics", "Retail", "Agriculture", "Tourism"],
    weatherChallenges: "Strasburg's northern Valley location brings cold, snowy winters and humid summers, with freeze-thaw cycles that stress seams and flashings on flat and metal roofs. The town's older masonry storefronts and large industrial roofs each require different maintenance strategies.",
    uniqueParagraph: "Strasburg's mix of a well-preserved historic district and modern industrial development gives the town an unusually varied commercial roofscape. Our team has the experience to restore aging membrane and metal roofs on warehouse and manufacturing buildings near the interstate while handling the more sensitive needs of downtown's historic commercial structures. Our proximity means Strasburg clients get prompt service and quick emergency response.",
    servicesEmphasis: "For Strasburg's industrial and warehouse buildings, we specialize in metal roof restoration and seamless coating systems that stop leaks and add reflectivity. For downtown commercial properties, we offer membrane restoration that protects historic buildings without full replacement."
  },
  "woodstock": {
    slug: "woodstock",
    metaTitle: "Commercial Roofing Woodstock VA | Roof Repair & Restore",
    metaDescription: "NovaRoof provides commercial roof restoration, replacement, and repair throughout Woodstock VA and Shenandoah County. Free inspections for Valley building owners.",
    headline: "Commercial Roofing Services in Woodstock, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Woodstock's commercial buildings. Free inspections — call today.",
    intro: "Woodstock, the seat of Shenandoah County, anchors the central Valley's commercial life with a historic Main Street, county institutions, and a steady mix of retail and hospitality businesses serving both residents and I-81 travelers. NovaRoof has completed local projects here — including a full PVC roof replacement for a downtown restaurant — and brings hands-on familiarity with Woodstock's commercial building stock.",
    localLandmarks: ["Woodstock Tower", "Main Street Woodstock", "Shenandoah County Courthouse", "Massanutten Military Academy", "Seven Bends State Park"],
    industries: ["Retail", "Hospitality & Restaurants", "Government", "Agriculture", "Healthcare"],
    weatherChallenges: "Woodstock's Valley-floor setting means hot, humid summers and cold winters with snow and ice that test roof seams and drainage. Restaurant and hospitality buildings face added challenges from kitchen exhaust and grease exposure that degrade ordinary membranes.",
    uniqueParagraph: "Our work at Los Trancas Restaurant in Woodstock — a full PVC membrane replacement chosen for its resistance to kitchen grease — reflects the kind of practical, building-specific solutions Woodstock business owners need. Beyond restaurants, we serve the retail shops, professional offices, and county buildings that line Main Street and the Route 11 corridor, tailoring each system to how the building is actually used.",
    servicesEmphasis: "For Woodstock's restaurants and food-service buildings, we recommend grease-resistant PVC membrane systems. For retail and office properties, our TPO restoration and replacement options deliver long-term protection with strong energy efficiency."
  },
  "verona": {
    slug: "verona",
    metaTitle: "Commercial Roofing Verona VA | Metal Roof Restoration",
    metaDescription: "NovaRoof restores and repairs commercial and agricultural roofs in Verona VA and Augusta County, including metal warehouse restorations. Free roof inspection.",
    headline: "Commercial Roofing Services in Verona, VA",
    heroSubtext: "Professional roof repair, restoration, and maintenance for Verona's commercial buildings. Free inspections — call today.",
    intro: "Verona, just north of Staunton in Augusta County, is a commercial and light-industrial hub where agricultural suppliers, warehouses, and county facilities sit alongside the businesses serving the central Shenandoah Valley. NovaRoof has completed metal roof restoration work in Verona — including a project for Augusta Seed — and understands the demands of the large metal and warehouse roofs common throughout the area.",
    localLandmarks: ["Augusta County Government Center", "Mill Place Commerce Park", "Route 11 Corridor", "Augusta Expoland", "Middle River"],
    industries: ["Agriculture", "Manufacturing", "Distribution & Logistics", "Government", "Retail"],
    weatherChallenges: "Verona's Valley climate brings strong summer UV, humid conditions, and winter freeze-thaw cycles that accelerate rust and seam failures on the metal roofs that dominate its agricultural and industrial buildings.",
    uniqueParagraph: "Our metal roof restoration for Augusta Seed in Verona shows the value we bring to the area's agricultural and warehouse buildings — stopping leaks that threaten stored inventory while avoiding the cost of full replacement. We serve the commerce parks, agricultural suppliers, and county facilities throughout Verona with restoration systems designed for large-span metal roofs.",
    servicesEmphasis: "For Verona's agricultural and industrial buildings, we specialize in metal roof restoration that treats rust, seals fasteners and seams, and adds a reflective coating to reduce interior temperatures — extending roof life at a fraction of replacement cost."
  }
};

// Default content for cities without specific entries
export function getCityContent(slug: string): CityContent {
  if (cityContent[slug]) {
    return cityContent[slug];
  }

  // Return a generic template for cities without specific content
  const cityName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    slug: slug,
    metaTitle: `Commercial Roofing ${cityName} VA | Repair & Restoration`,
    metaDescription: `NovaRoof provides commercial roof repair, restoration, and replacement in ${cityName}, Virginia. Free inspections for local building owners and property managers.`,
    headline: `Commercial Roofing Services in ${cityName}, VA`,
    heroSubtext: `Professional roof repair, restoration, and maintenance for ${cityName}'s commercial buildings. Free inspections — call today.`,
    intro: `NovaRoof provides professional commercial roofing services to businesses in ${cityName}, Virginia. Our team brings decades of combined experience to every project, ensuring your commercial property receives the expert care it deserves.`,
    localLandmarks: [],
    industries: ["Commercial", "Retail", "Industrial", "Healthcare", "Education"],
    weatherChallenges: "Virginia's variable climate challenges commercial roofs with hot, humid summers, cold winters, and severe weather year-round. Our roofing systems are designed to handle these conditions while providing long-term protection for your investment.",
    uniqueParagraph: `As a Virginia-based commercial roofing company, NovaRoof understands the unique needs of businesses in ${cityName}. We combine local knowledge with professional expertise to deliver roofing solutions that protect your property and your business.`,
    servicesEmphasis: "Our full range of commercial roofing services includes restoration, replacement, maintenance, and emergency repairs. We work with all major roofing systems including TPO, PVC, EPDM, metal, and spray foam."
  };
}
