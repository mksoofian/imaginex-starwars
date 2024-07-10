import { NextResponse } from "next/server";

async function fetchPeople() {
  const res = await fetch("https://swapi.dev/api/people/", {
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
  const people = await fetchPeople();
  return NextResponse.json(people);
}
