import { NextResponse } from "next/server";

async function fetchData() {
  const baseURL = "https://swapi.dev/api/";
  //   const url = category ? baseURL.concat(category + "/") : baseURL;

  const res = await fetch(baseURL, {
    next: { revalidate: 3600 },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function GET(request: any) {
  const data = await fetchData();
  return NextResponse.json(data);
}
