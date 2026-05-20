import { create }
from "zustand";

import {

  persist,

  createJSONStorage,

  devtools

}
from "zustand/middleware";

import {

  immer

}
from "zustand/middleware/immer";

interface SessionState {

  userId: string;

  token: string;

  expiresAt: number;

  role: "admin" | "user";

  setSession: (

    userId: string,

    token: string,

    expiresAt: number

  ) => void;
}

const useSessionStore =

  create<SessionState>()(

    devtools(

      persist(

        immer(

          (set) => ({

            userId: "",

            token: "",

            expiresAt: 0,

            role: "user",

            setSession: (

              userId,

              token,

              expiresAt

            ) =>

              set((state) => {

                state.userId =
                  userId;

                state.token =
                  token;

                state.expiresAt =
                  expiresAt;
              })
          })
        ),

        {

          name:
            "session-storage",

          storage:
            createJSONStorage(
              () => localStorage
            ),

          partialize: (state) => ({

            userId:
              state.userId,

            token:
              state.token
          }),

          version: 2,

          migrate: (
            persisted: any,
            version
          ) => {

            if (version < 2) {

              return {

                ...persisted,

                role: "user"
              };
            }

            return persisted;
          }
        }
      )
    )
  );

export default
  useSessionStore;