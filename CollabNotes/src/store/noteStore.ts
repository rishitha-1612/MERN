import { create }
from "zustand";

import {
  devtools
}
from "zustand/middleware";

import {
  immer
}
from "zustand/middleware/immer";

interface Note {

  id: string;

  text: string;
}

interface NoteHistory {

  noteId: string;

  action: string;

  timestamp: number;
}

interface NoteState {

  notes: Note[];

  history: NoteHistory[];

  addNote: (
    note: Note
  ) => void;

  updateNote: (
    id: string,
    text: string
  ) => void;

  deleteNote: (
    id: string
  ) => void;

  addHistoryEntry: (
    entry: NoteHistory
  ) => void;

  clearHistory: () => void;
}

const useNoteStore =

  create<NoteState>()(

    devtools(

      immer((set) => ({

        notes: [],

        history: [],

        addNote: (note) =>

          set((state) => {

            state.notes.push(
              note
            );
          }),

        updateNote: (
          id,
          text
        ) =>

          set((state) => {

            const note =

              state.notes.find(
                n => n.id === id
              );

            if (note) {

              note.text =
                text;
            }
          }),

        deleteNote: (id) =>

          set((state) => {

            state.notes =

              state.notes.filter(
                n => n.id !== id
              );
          }),

        addHistoryEntry: (
          entry
        ) =>

          set((state) => {

            state.history.push(
              entry
            );
          }),

        clearHistory: () =>

          set((state) => {

            state.history = [];
          })
      }))
    )
  );

export default useNoteStore;