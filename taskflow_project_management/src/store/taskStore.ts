import { create } from "zustand";

export interface Task {

  id: string;

  title: string;

  completed: boolean;
}

interface TaskStore {

  tasks: Task[];

  addTask: (
    title: string
  ) => void;

  toggleTask: (
    id: string
  ) => void;

  clearTasks: () => void;
}

const useTaskStore = create<TaskStore>(

  (set) => ({

    tasks: [],

    addTask: (title) =>

      set((state) => ({

        tasks: [

          ...state.tasks,

          {
            id:
              crypto.randomUUID(),

            title,

            completed: false
          }
        ]
      })),

    toggleTask: (id) =>

      set((state) => ({

        tasks:
          state.tasks.map(task =>

            task.id === id

              ? {
                  ...task,
                  completed:
                    !task.completed
                }

              : task
          )
      })),

    clearTasks: () =>

      set({
        tasks: []
      })
  })
);

export default useTaskStore;