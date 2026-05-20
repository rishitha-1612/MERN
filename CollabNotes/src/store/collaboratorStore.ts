import { create }
from "zustand";

interface Collaborator {

  id: number;

  name: string;
}

interface CollaboratorState {

  collaborators:
    Collaborator[];

  setCollaborators: (
    collaborators:
      Collaborator[]
  ) => void;
}

const useCollaboratorStore =

  create<CollaboratorState>(

    (set) => ({

      collaborators: [],

      setCollaborators: (
        collaborators
      ) =>

        set({
          collaborators
        })
    })
  );

export default
  useCollaboratorStore;