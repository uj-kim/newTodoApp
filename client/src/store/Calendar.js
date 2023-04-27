import { create } from "zustand";

const useCalendar = create((set) => ({
  currentEvents: [],
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));
export default useCalendar;
