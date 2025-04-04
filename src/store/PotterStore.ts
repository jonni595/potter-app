import { create } from "zustand";
import type { Books } from "../definitions";

interface PotterState {
  books: Books[];
  setBooks: (books: Books[]) => void;
}

export const PotterStore = create<PotterState>()((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
}));
