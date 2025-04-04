import { useEffect } from "react";
import { PotterStore } from "../store/PotterStore";

export function usePotter() {
  const { books, houses, characters, setBooks, setHouses, setCharacters } =
    PotterStore();

  async function fetchData() {
    const endpoints = [
      "https://potterapi-fedeperin.vercel.app/en/books",
      "https://potterapi-fedeperin.vercel.app/en/houses",
      "https://potterapi-fedeperin.vercel.app/en/characters",
    ];
    try {
      const [booksResponse, housesResponse, charactersResponse] =
        await Promise.all(endpoints.map((endpoint) => fetch(endpoint)));
      if (!booksResponse.ok || !housesResponse.ok || !charactersResponse.ok) {
        throw new Error("Error fetching data");
      }
      const booksData = await booksResponse.json();
      const housesData = await housesResponse.json();
      const charactersData = await charactersResponse.json();

      setBooks(booksData);
      setHouses(housesData);
      setCharacters(charactersData);
    } catch (err) {
      throw new Error("Error fetching data: " + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { books, houses, characters };
}
