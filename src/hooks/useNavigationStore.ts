import { create } from "zustand/react";

interface NavigationStore {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
}

export const useNavigationStore = create<NavigationStore>()((set) => ({
  activeSection: "about",
  setActiveSection: (activeSection: string) => set({ activeSection }),
}));
