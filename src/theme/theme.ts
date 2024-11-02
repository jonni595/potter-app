import { create } from "zustand";

type Theme = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<Theme>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
