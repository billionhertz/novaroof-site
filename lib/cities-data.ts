export interface City {
  rank: number;
  name: string;
  population: number;
  milesFromHarrisonburg: number;
  milesFromRichmond: number;
  closerTo: "Harrisonburg" | "Richmond";
  slug: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export const cities: City[] = [
  { rank: 1, name: "Virginia Beach", population: 456349, milesFromHarrisonburg: 193, milesFromRichmond: 93, closerTo: "Richmond", slug: "virginia-beach" },
  { rank: 2, name: "Chesapeake", population: 252583, milesFromHarrisonburg: 183, milesFromRichmond: 83, closerTo: "Richmond", slug: "chesapeake" },
  { rank: 3, name: "Arlington", population: 236254, milesFromHarrisonburg: 100, milesFromRichmond: 94, closerTo: "Richmond", slug: "arlington" },
  { rank: 4, name: "Norfolk", population: 233596, milesFromHarrisonburg: 179, milesFromRichmond: 79, closerTo: "Richmond", slug: "norfolk" },
  { rank: 5, name: "Richmond", population: 229359, milesFromHarrisonburg: 100, milesFromRichmond: 0, closerTo: "Richmond", slug: "richmond" },
  { rank: 6, name: "Newport News", population: 184216, milesFromHarrisonburg: 161, milesFromRichmond: 62, closerTo: "Richmond", slug: "newport-news" },
  { rank: 7, name: "Alexandria", population: 156976, milesFromHarrisonburg: 101, milesFromRichmond: 90, closerTo: "Richmond", slug: "alexandria" },
  { rank: 8, name: "Hampton", population: 137557, milesFromHarrisonburg: 169, milesFromRichmond: 70, closerTo: "Richmond", slug: "hampton" },
  { rank: 9, name: "Suffolk", population: 98796, milesFromHarrisonburg: 173, milesFromRichmond: 73, closerTo: "Richmond", slug: "suffolk" },
  { rank: 10, name: "Roanoke", population: 98355, milesFromHarrisonburg: 100, milesFromRichmond: 139, closerTo: "Harrisonburg", slug: "roanoke" },
  { rank: 11, name: "Portsmouth", population: 97190, milesFromHarrisonburg: 179, milesFromRichmond: 79, closerTo: "Richmond", slug: "portsmouth" },
  { rank: 12, name: "Lynchburg", population: 79497, milesFromHarrisonburg: 73, milesFromRichmond: 94, closerTo: "Harrisonburg", slug: "lynchburg" },
  { rank: 13, name: "Centreville", population: 71706, milesFromHarrisonburg: 82, milesFromRichmond: 90, closerTo: "Harrisonburg", slug: "centreville" },
  { rank: 14, name: "Dale City", population: 71016, milesFromHarrisonburg: 85, milesFromRichmond: 76, closerTo: "Richmond", slug: "dale-city" },
  { rank: 15, name: "Reston", population: 64414, milesFromHarrisonburg: 89, milesFromRichmond: 98, closerTo: "Harrisonburg", slug: "reston" },
  { rank: 16, name: "Harrisonburg", population: 51392, milesFromHarrisonburg: 0, milesFromRichmond: 100, closerTo: "Harrisonburg", slug: "harrisonburg" },
  { rank: 17, name: "McLean", population: 49627, milesFromHarrisonburg: 97, milesFromRichmond: 97, closerTo: "Richmond", slug: "mclean" },
  { rank: 18, name: "Tuckahoe", population: 49183, milesFromHarrisonburg: 93, milesFromRichmond: 7, closerTo: "Richmond", slug: "tuckahoe" },
  { rank: 19, name: "Leesburg", population: 49171, milesFromHarrisonburg: 84, milesFromRichmond: 109, closerTo: "Harrisonburg", slug: "leesburg" },
  { rank: 20, name: "Lake Ridge", population: 46049, milesFromHarrisonburg: 87, milesFromRichmond: 79, closerTo: "Richmond", slug: "lake-ridge" },
  { rank: 21, name: "Ashburn", population: 46026, milesFromHarrisonburg: 85, milesFromRichmond: 104, closerTo: "Harrisonburg", slug: "ashburn" },
  { rank: 22, name: "Blacksburg", population: 45446, milesFromHarrisonburg: 119, milesFromRichmond: 165, closerTo: "Harrisonburg", slug: "blacksburg" },
  { rank: 23, name: "Charlottesville", population: 45437, milesFromHarrisonburg: 36, milesFromRichmond: 66, closerTo: "Harrisonburg", slug: "charlottesville" },
  { rank: 24, name: "Burke", population: 44029, milesFromHarrisonburg: 89, milesFromRichmond: 87, closerTo: "Richmond", slug: "burke" },
  { rank: 25, name: "Manassas", population: 42773, milesFromHarrisonburg: 78, milesFromRichmond: 84, closerTo: "Harrisonburg", slug: "manassas" },
  { rank: 26, name: "Linton Hall", population: 41749, milesFromHarrisonburg: 73, milesFromRichmond: 84, closerTo: "Harrisonburg", slug: "linton-hall" },
  { rank: 27, name: "Annandale", population: 41108, milesFromHarrisonburg: 94, milesFromRichmond: 90, closerTo: "Richmond", slug: "annandale" },
  { rank: 28, name: "Woodbridge", population: 40973, milesFromHarrisonburg: 89, milesFromRichmond: 78, closerTo: "Richmond", slug: "woodbridge" },
  { rank: 29, name: "Mechanicsville", population: 36166, milesFromHarrisonburg: 102, milesFromRichmond: 8, closerTo: "Richmond", slug: "mechanicsville" },
  { rank: 30, name: "Petersburg", population: 33458, milesFromHarrisonburg: 116, milesFromRichmond: 22, closerTo: "Richmond", slug: "petersburg" },
  { rank: 31, name: "West Springfield", population: 32015, milesFromHarrisonburg: 92, milesFromRichmond: 85, closerTo: "Richmond", slug: "west-springfield" },
  { rank: 32, name: "Springfield", population: 31154, milesFromHarrisonburg: 94, milesFromRichmond: 87, closerTo: "Richmond", slug: "springfield" },
  { rank: 33, name: "Short Pump", population: 29026, milesFromHarrisonburg: 88, milesFromRichmond: 12, closerTo: "Richmond", slug: "short-pump" },
  { rank: 34, name: "Tysons", population: 28936, milesFromHarrisonburg: 94, milesFromRichmond: 96, closerTo: "Harrisonburg", slug: "tysons" },
  { rank: 35, name: "Fredericksburg", population: 28873, milesFromHarrisonburg: 77, milesFromRichmond: 53, closerTo: "Richmond", slug: "fredericksburg" },
  { rank: 36, name: "Winchester", population: 27913, milesFromHarrisonburg: 63, milesFromRichmond: 120, closerTo: "Harrisonburg", slug: "winchester" },
  { rank: 37, name: "Cherry Hill", population: 26044, milesFromHarrisonburg: 86, milesFromRichmond: 72, closerTo: "Richmond", slug: "cherry-hill" },
  { rank: 38, name: "Staunton", population: 25948, milesFromHarrisonburg: 23, milesFromRichmond: 99, closerTo: "Harrisonburg", slug: "staunton" },
  { rank: 39, name: "Cave Spring", population: 25742, milesFromHarrisonburg: 105, milesFromRichmond: 143, closerTo: "Harrisonburg", slug: "cave-spring" },
  { rank: 40, name: "Salem", population: 25618, milesFromHarrisonburg: 103, milesFromRichmond: 145, closerTo: "Harrisonburg", slug: "salem" },
  { rank: 41, name: "South Riding", population: 25050, milesFromHarrisonburg: 81, milesFromRichmond: 95, closerTo: "Harrisonburg", slug: "south-riding" },
  { rank: 42, name: "Fairfax", population: 25026, milesFromHarrisonburg: 89, milesFromRichmond: 90, closerTo: "Harrisonburg", slug: "fairfax" },
  { rank: 43, name: "Herndon", population: 24672, milesFromHarrisonburg: 88, milesFromRichmond: 99, closerTo: "Harrisonburg", slug: "herndon" },
  { rank: 44, name: "Brambleton", population: 24537, milesFromHarrisonburg: 81, milesFromRichmond: 100, closerTo: "Harrisonburg", slug: "brambleton" },
  { rank: 45, name: "Glen Allen", population: 23562, milesFromHarrisonburg: 93, milesFromRichmond: 8, closerTo: "Richmond", slug: "glen-allen" },
  { rank: 46, name: "Hopewell", population: 23032, milesFromHarrisonburg: 117, milesFromRichmond: 18, closerTo: "Richmond", slug: "hopewell" },
  { rank: 47, name: "Chester", population: 22791, milesFromHarrisonburg: 109, milesFromRichmond: 13, closerTo: "Richmond", slug: "chester" },
  { rank: 48, name: "Waynesboro", population: 22193, milesFromHarrisonburg: 26, milesFromRichmond: 87, closerTo: "Harrisonburg", slug: "waynesboro" },
  { rank: 49, name: "Woodlawn CDP", population: 21194, milesFromHarrisonburg: 96, milesFromRichmond: 84, closerTo: "Richmond", slug: "woodlawn-cdp" },
  { rank: 50, name: "Rose Hill", population: 21066, milesFromHarrisonburg: 98, milesFromRichmond: 88, closerTo: "Richmond", slug: "rose-hill" },
  { rank: 51, name: "Culpeper", population: 20794, milesFromHarrisonburg: 47, milesFromRichmond: 71, closerTo: "Harrisonburg", slug: "culpeper" },
  { rank: 52, name: "Meadowbrook", population: 20749, milesFromHarrisonburg: 103, milesFromRichmond: 7, closerTo: "Richmond", slug: "meadowbrook" },
  { rank: 53, name: "Merrifield", population: 20698, milesFromHarrisonburg: 93, milesFromRichmond: 93, closerTo: "Richmond", slug: "merrifield" },
  { rank: 54, name: "Lincolnia", population: 20320, milesFromHarrisonburg: 96, milesFromRichmond: 90, closerTo: "Richmond", slug: "lincolnia" },
  { rank: 55, name: "Sudley", population: 19162, milesFromHarrisonburg: 78, milesFromRichmond: 86, closerTo: "Harrisonburg", slug: "sudley" },
  { rank: 56, name: "Midlothian", population: 19120, milesFromHarrisonburg: 93, milesFromRichmond: 12, closerTo: "Richmond", slug: "midlothian" },
  { rank: 57, name: "Franklin Farm", population: 18736, milesFromHarrisonburg: 86, milesFromRichmond: 95, closerTo: "Harrisonburg", slug: "franklin-farm" },
  { rank: 58, name: "Laurel", population: 18721, milesFromHarrisonburg: 93, milesFromRichmond: 8, closerTo: "Richmond", slug: "laurel" },
  { rank: 59, name: "Colonial Heights", population: 18146, milesFromHarrisonburg: 115, milesFromRichmond: 21, closerTo: "Richmond", slug: "colonial-heights" },
  { rank: 60, name: "Bon Air", population: 17860, milesFromHarrisonburg: 96, milesFromRichmond: 7, closerTo: "Richmond", slug: "bon-air" },
  { rank: 61, name: "Gainesville", population: 16800, milesFromHarrisonburg: 72, milesFromRichmond: 87, closerTo: "Harrisonburg", slug: "gainesville" },
  { rank: 62, name: "Manassas Park", population: 16798, milesFromHarrisonburg: 80, milesFromRichmond: 86, closerTo: "Harrisonburg", slug: "manassas-park" },
  { rank: 63, name: "Fort Hunt", population: 16700, milesFromHarrisonburg: 100, milesFromRichmond: 85, closerTo: "Richmond", slug: "fort-hunt" },
  { rank: 64, name: "Stone Ridge", population: 16603, milesFromHarrisonburg: 78, milesFromRichmond: 97, closerTo: "Harrisonburg", slug: "stone-ridge" },
  { rank: 65, name: "Vienna", population: 16412, milesFromHarrisonburg: 92, milesFromRichmond: 94, closerTo: "Harrisonburg", slug: "vienna" },
  { rank: 66, name: "Wolf Trap", population: 15858, milesFromHarrisonburg: 92, milesFromRichmond: 97, closerTo: "Harrisonburg", slug: "wolf-trap" },
  { rank: 67, name: "Williamsburg", population: 15798, milesFromHarrisonburg: 143, milesFromRichmond: 44, closerTo: "Richmond", slug: "williamsburg" },
  { rank: 68, name: "Front Royal", population: 15296, milesFromHarrisonburg: 49, milesFromRichmond: 104, closerTo: "Harrisonburg", slug: "front-royal" },
  { rank: 69, name: "East Highland Park", population: 15265, milesFromHarrisonburg: 100, milesFromRichmond: 3, closerTo: "Richmond", slug: "east-highland-park" },
  { rank: 70, name: "Great Falls", population: 15228, milesFromHarrisonburg: 94, milesFromRichmond: 102, closerTo: "Harrisonburg", slug: "great-falls" },
  { rank: 71, name: "Highland Springs", population: 15021, milesFromHarrisonburg: 104, milesFromRichmond: 6, closerTo: "Richmond", slug: "highland-springs" },
  { rank: 72, name: "Falls Church", population: 14710, milesFromHarrisonburg: 96, milesFromRichmond: 94, closerTo: "Richmond", slug: "falls-church" },
  { rank: 73, name: "Timberlake", population: 13016, milesFromHarrisonburg: 81, milesFromRichmond: 100, closerTo: "Harrisonburg", slug: "timberlake" },
  { rank: 74, name: "Brandermill", population: 12910, milesFromHarrisonburg: 97, milesFromRichmond: 13, closerTo: "Richmond", slug: "brandermill" },
  { rank: 75, name: "Chesterfield", population: 12749, milesFromHarrisonburg: 105, milesFromRichmond: 12, closerTo: "Richmond", slug: "chesterfield" },
  { rank: 76, name: "Poquoson", population: 12639, milesFromHarrisonburg: 166, milesFromRichmond: 67, closerTo: "Richmond", slug: "poquoson" },
  { rank: 77, name: "Sugarland Run", population: 12629, milesFromHarrisonburg: 90, milesFromRichmond: 103, closerTo: "Harrisonburg", slug: "sugarland-run" },
  { rank: 78, name: "Fairfax Station", population: 12566, milesFromHarrisonburg: 86, milesFromRichmond: 84, closerTo: "Richmond", slug: "fairfax-station" },
  { rank: 79, name: "Manchester", population: 12445, milesFromHarrisonburg: 101, milesFromRichmond: 3, closerTo: "Richmond", slug: "manchester" },
  { rank: 80, name: "Cascades", population: 12357, milesFromHarrisonburg: 90, milesFromRichmond: 104, closerTo: "Harrisonburg", slug: "cascades" },
  { rank: 81, name: "Lansdowne", population: 12328, milesFromHarrisonburg: 87, milesFromRichmond: 106, closerTo: "Harrisonburg", slug: "lansdowne" },
  { rank: 82, name: "Newington Forest", population: 12316, milesFromHarrisonburg: 91, milesFromRichmond: 83, closerTo: "Richmond", slug: "newington-forest" },
  { rank: 83, name: "Wyndham", population: 12099, milesFromHarrisonburg: 87, milesFromRichmond: 13, closerTo: "Richmond", slug: "wyndham" },
  { rank: 84, name: "Wakefield CDP", population: 11930, milesFromHarrisonburg: 91, milesFromRichmond: 89, closerTo: "Richmond", slug: "wakefield-cdp" },
  { rank: 85, name: "New Baltimore", population: 11919, milesFromHarrisonburg: 65, milesFromRichmond: 85, closerTo: "Harrisonburg", slug: "new-baltimore" },
  { rank: 86, name: "Dranesville", population: 11828, milesFromHarrisonburg: 91, milesFromRichmond: 102, closerTo: "Harrisonburg", slug: "dranesville" },
  { rank: 87, name: "Stuarts Draft", population: 11780, milesFromHarrisonburg: 31, milesFromRichmond: 95, closerTo: "Harrisonburg", slug: "stuarts-draft" },
  { rank: 88, name: "Gloucester Point", population: 11109, milesFromHarrisonburg: 152, milesFromRichmond: 54, closerTo: "Richmond", slug: "gloucester-point" },
  { rank: 89, name: "Lowes Island", population: 11018, milesFromHarrisonburg: 92, milesFromRichmond: 105, closerTo: "Harrisonburg", slug: "lowes-island" },
  { rank: 90, name: "Lake Barcroft", population: 10973, milesFromHarrisonburg: 96, milesFromRichmond: 92, closerTo: "Richmond", slug: "lake-barcroft" },
  { rank: 91, name: "Independent Hill", population: 10853, milesFromHarrisonburg: 81, milesFromRichmond: 76, closerTo: "Richmond", slug: "independent-hill" },
  { rank: 92, name: "Lake Monticello", population: 10662, milesFromHarrisonburg: 46, milesFromRichmond: 56, closerTo: "Harrisonburg", slug: "lake-monticello" },
  { rank: 93, name: "Triangle", population: 10450, milesFromHarrisonburg: 83, milesFromRichmond: 70, closerTo: "Richmond", slug: "triangle" },
  { rank: 94, name: "Loudoun Valley Estates", population: 10271, milesFromHarrisonburg: 88, milesFromRichmond: 106, closerTo: "Harrisonburg", slug: "loudoun-valley-estates" },
  { rank: 95, name: "Madison Heights", population: 10266, milesFromHarrisonburg: 72, milesFromRichmond: 93, closerTo: "Harrisonburg", slug: "madison-heights" },
  { rank: 96, name: "Warrenton", population: 10176, milesFromHarrisonburg: 61, milesFromRichmond: 83, closerTo: "Harrisonburg", slug: "warrenton" },
  { rank: 97, name: "Innsbrook", population: 10120, milesFromHarrisonburg: 89, milesFromRichmond: 11, closerTo: "Richmond", slug: "innsbrook" },
  { rank: 98, name: "Lakeside", population: 9800, milesFromHarrisonburg: 96, milesFromRichmond: 5, closerTo: "Richmond", slug: "lakeside" },
  { rank: 99, name: "Greenbriar", population: 8243, milesFromHarrisonburg: 85, milesFromRichmond: 92, closerTo: "Harrisonburg", slug: "greenbriar" },
  { rank: 100, name: "Vinton", population: 8056, milesFromHarrisonburg: 98, milesFromRichmond: 136, closerTo: "Harrisonburg", slug: "vinton" },
  { rank: 101, name: "Bellwood", population: 7907, milesFromHarrisonburg: 105, milesFromRichmond: 8, closerTo: "Richmond", slug: "bellwood" },
  { rank: 102, name: "Lake of the Woods", population: 7984, milesFromHarrisonburg: 60, milesFromRichmond: 58, closerTo: "Richmond", slug: "lake-of-the-woods" },
  { rank: 103, name: "South Boston", population: 7853, milesFromHarrisonburg: 121, milesFromRichmond: 100, closerTo: "Richmond", slug: "south-boston" },
  { rank: 104, name: "Bull Run CDP", population: 7823, milesFromHarrisonburg: 76, milesFromRichmond: 85, closerTo: "Harrisonburg", slug: "bull-run-cdp" },
  { rank: 105, name: "Farmville", population: 7774, milesFromHarrisonburg: 83, milesFromRichmond: 55, closerTo: "Richmond", slug: "farmville" },
  { rank: 106, name: "Ashland", population: 7772, milesFromHarrisonburg: 89, milesFromRichmond: 15, closerTo: "Richmond", slug: "ashland" },
  { rank: 107, name: "Bedford", population: 7724, milesFromHarrisonburg: 85, milesFromRichmond: 115, closerTo: "Harrisonburg", slug: "bedford" },
  { rank: 108, name: "Rappahannock", population: 7700, milesFromHarrisonburg: 73, milesFromRichmond: 79, closerTo: "Harrisonburg", slug: "rappahannock" },
  { rank: 109, name: "Floris", population: 7589, milesFromHarrisonburg: 86, milesFromRichmond: 97, closerTo: "Harrisonburg", slug: "floris" },
  { rank: 110, name: "Lexington", population: 7311, milesFromHarrisonburg: 56, milesFromRichmond: 111, closerTo: "Harrisonburg", slug: "lexington" },
  { rank: 111, name: "Crozet", population: 7287, milesFromHarrisonburg: 28, milesFromRichmond: 78, closerTo: "Harrisonburg", slug: "crozet" },
  { rank: 112, name: "Stony Point", population: 7200, milesFromHarrisonburg: 93, milesFromRichmond: 8, closerTo: "Richmond", slug: "stony-point" },
  { rank: 113, name: "Bridgewater", population: 6708, milesFromHarrisonburg: 7, milesFromRichmond: 102, closerTo: "Harrisonburg", slug: "bridgewater" },
  { rank: 114, name: "Buena Vista", population: 6593, milesFromHarrisonburg: 56, milesFromRichmond: 106, closerTo: "Harrisonburg", slug: "buena-vista" },
  { rank: 115, name: "Massanetta Springs", population: 6358, milesFromHarrisonburg: 4, milesFromRichmond: 96, closerTo: "Harrisonburg", slug: "massanetta-springs" },
  { rank: 116, name: "Broadway", population: 3800, milesFromHarrisonburg: 15, milesFromRichmond: 115, closerTo: "Harrisonburg", slug: "broadway" },
];

// Curated list of cities with completed projects and unique hand-written
// content in lib/cities-content.ts. Only these generate /service-area/[slug]
// pages and appear in the sitemap. All other city URLs permanently redirect
// to /service-area.
export const SERVICE_AREA_CITY_SLUGS: string[] = [
  "richmond",
  "roanoke",
  "lynchburg",
  "harrisonburg",
  "charlottesville",
  "fredericksburg",
  "staunton",
  "waynesboro",
  "front-royal",
  "bridgewater",
];

export function getServiceAreaCitySlugs(): string[] {
  return SERVICE_AREA_CITY_SLUGS;
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCitiesByRegion(closerTo: "Harrisonburg" | "Richmond"): City[] {
  return cities.filter((city) => city.closerTo === closerTo);
}

export function getTopCities(count: number = 20): City[] {
  return cities.slice(0, count);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
