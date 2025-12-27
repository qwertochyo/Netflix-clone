import { create } from "zustand";
import type { TFilter } from "../filters/filters.data";

export interface IStore {
  currentFilter: TFilter,
  setCurrentFilter: (filter: TFilter) => void
}

export const useFilterStore = create<IStore>((set) => ({
  currentFilter: "Popular",
  setCurrentFilter: (filter) => set({currentFilter: filter})
}))