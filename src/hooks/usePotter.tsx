import { useEffect } from "react";
import { PotterStore } from "../store/PotterStore";

export function usePotter() {
  const { books, setBooks } = PotterStore();

  useEffect(() => {
    try {
      localStorage.setItem("books", JSON.stringify(books));
    } catch (error) {
      throw new Error("Error al guardar en el almacenamiento local " + error);
    }
    fetch("https://potterapi-fedeperin.vercel.app/en/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [setBooks, books]);

  return { books };
}
