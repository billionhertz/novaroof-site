export interface City {
  rank: number;
  name: string;
  population: number;
  milesFromHarrisonburg: number;
  milesFromRichmond: number;
  closerTo: "Harrisonburg" | "Richmond";
  slug: string;
}

// Only cities where NovaRoof has completed commercial roofing projects.
// Pages are intentionally limited to real service areas to avoid thin,
// near-duplicate location pages.
export const cities: City[] = [
  { rank: 1, name: "Richmond", population: 229359, milesFromHarrisonburg: 100, milesFromRichmond: 0, closerTo: "Richmond", slug: "richmond" },
  { rank: 2, name: "Roanoke", population: 98355, milesFromHarrisonburg: 100, milesFromRichmond: 139, closerTo: "Harrisonburg", slug: "roanoke" },
  { rank: 3, name: "Lynchburg", population: 79497, milesFromHarrisonburg: 73, milesFromRichmond: 94, closerTo: "Harrisonburg", slug: "lynchburg" },
  { rank: 4, name: "Harrisonburg", population: 51392, milesFromHarrisonburg: 0, milesFromRichmond: 100, closerTo: "Harrisonburg", slug: "harrisonburg" },
  { rank: 5, name: "Charlottesville", population: 45437, milesFromHarrisonburg: 36, milesFromRichmond: 66, closerTo: "Harrisonburg", slug: "charlottesville" },
  { rank: 6, name: "Woodbridge", population: 40973, milesFromHarrisonburg: 89, milesFromRichmond: 78, closerTo: "Richmond", slug: "woodbridge" },
  { rank: 7, name: "Fredericksburg", population: 28873, milesFromHarrisonburg: 77, milesFromRichmond: 53, closerTo: "Richmond", slug: "fredericksburg" },
  { rank: 8, name: "Staunton", population: 25948, milesFromHarrisonburg: 23, milesFromRichmond: 99, closerTo: "Harrisonburg", slug: "staunton" },
  { rank: 9, name: "Waynesboro", population: 22193, milesFromHarrisonburg: 26, milesFromRichmond: 87, closerTo: "Harrisonburg", slug: "waynesboro" },
  { rank: 10, name: "Front Royal", population: 15296, milesFromHarrisonburg: 49, milesFromRichmond: 104, closerTo: "Harrisonburg", slug: "front-royal" },
  { rank: 11, name: "Strasburg", population: 6832, milesFromHarrisonburg: 40, milesFromRichmond: 125, closerTo: "Harrisonburg", slug: "strasburg" },
  { rank: 12, name: "Bridgewater", population: 6708, milesFromHarrisonburg: 7, milesFromRichmond: 102, closerTo: "Harrisonburg", slug: "bridgewater" },
  { rank: 13, name: "Woodstock", population: 5197, milesFromHarrisonburg: 28, milesFromRichmond: 120, closerTo: "Harrisonburg", slug: "woodstock" },
  { rank: 14, name: "Verona", population: 3842, milesFromHarrisonburg: 16, milesFromRichmond: 95, closerTo: "Harrisonburg", slug: "verona" },
];

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
