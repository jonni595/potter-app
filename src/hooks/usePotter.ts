import { useState, useEffect } from "react";
import { API_URL } from "../config";
import type { Books, Houses, Characters } from "../interface";

export const usePotter = () => {
  const [characters, setCharacters] = useState<Characters[]>([]),
    [books, setBooks] = useState<Books[]>([]),
    [houses, setHouses] = useState<Houses[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersResponse, booksResponse, housesResponse] =
          await Promise.all([
            fetch(`${API_URL}characters`),
            fetch(`${API_URL}books`),
            fetch(`${API_URL}houses`),
          ]);
        const [characters, books, houses] = await Promise.all([
          charactersResponse.json(),
          booksResponse.json(),
          housesResponse.json(),
        ]);
        setCharacters(characters);
        setBooks(books);
        setHouses(houses);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Error fetching data");
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { characters, books, houses, loading, error };
};
