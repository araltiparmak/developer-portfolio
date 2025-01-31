import { create } from "zustand/react";
import { navigationItems } from "../data/DB.ts";

interface NavigationStore {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
}

export const useNavigationStore = create<NavigationStore>()((set) => ({
  activeSection: navigationItems[0].key,
  setActiveSection: (activeSection: string) => set({ activeSection }),
}));
