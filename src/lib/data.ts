export async function getData(category?: CategoryNames) {
  const baseURL = "https://swapi.dev/api/";
  const url = category ? baseURL.concat(category + "/") : baseURL;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
