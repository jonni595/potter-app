import { useEffect } from "react";
import { PotterStore } from "../store/PotterStore";

export function usePotter() {
  const { books, setBooks } = PotterStore();

  async function getBooks() {
    try {
      const response = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/books"
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      throw new Error(`Error fetching books: ${error}`);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return { books };
}
