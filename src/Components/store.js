import { create } from "zustand";

export const useActiveTabStore = create((set) => ({
    activeTab: null,
    setActiveTab: (tabName) => {
        set(() => ({ activeTab: tabName }));
    },
}));
