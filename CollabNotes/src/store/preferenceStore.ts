import { create }
from "zustand";

import {

  persist,

  createJSONStorage

}
from "zustand/middleware";

interface PreferencesState {

  theme: string;

  fontSize: number;

  setTheme: (
    theme: string
  ) => void;

  setFontSize: (
    size: number
  ) => void;
}

const usePreferencesStore =

  create<PreferencesState>()(

    persist(

      (set) => ({

        theme: "light",

        fontSize: 14,

        setTheme: (theme) =>

          set({
            theme
          }),

        setFontSize: (size) =>

          set({
            fontSize: size
          })
      }),

      {

        name:
          "collabnotes-preferences",

        storage:
          createJSONStorage(
            () => localStorage
          ),

        partialize: (state) => ({

          theme:
            state.theme,

          fontSize:
            state.fontSize
        }),

        version: 2,

        migrate: (
          persisted: any,
          version
        ) => {

          if (version < 2) {

            return {

              ...persisted,

              fontSize: 14
            };
          }

          return persisted;
        }
      }
    )
  );

export default
  usePreferencesStore;