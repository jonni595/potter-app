import { create } from "zustand";
import type { Books, Characters, Houses } from "../definitions";

interface PotterState {
  books: Books[];
  houses: Houses[];
  characters: Characters[];
  setBooks: (books: Books[]) => void;
  setHouses: (house: Houses[]) => void;
  setCharacters: (characters: Characters[]) => void;
}

export const PotterStore = create<PotterState>()((set) => ({
  books: [],
  houses: [],
  characters: [],
  setBooks: (books) => set({ books }),
  setHouses: (houses) => set({ houses }),
  setCharacters: (characters) => set({ characters }),
}));
