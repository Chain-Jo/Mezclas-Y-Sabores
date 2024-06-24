import { create } from "zustand";

type TestModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useTestModal = create<TestModalState>((set) => ({
    isOpen: false, 
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));