import { create } from 'zustand';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: string;
  createdAt: Date;
}

interface JournalState {
  entries: JournalEntry[];
  setEntries: (entries: JournalEntry[]) => void;
  addEntry: (entry: JournalEntry) => void;
  updateEntry: (entry: JournalEntry) => void;
  removeEntry: (entryId: string) => void;
}

export const useJournalStore = create<JournalState>((set) => ({
  entries: [],
  setEntries: (entries) => set({ entries }),
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (updatedEntry) =>
    set((state) => ({
      entries: state.entries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      ),
    })),
  removeEntry: (entryId) =>
    set((state) => ({
      entries: state.entries.filter((entry) => entry.id !== entryId),
    })),
}));
