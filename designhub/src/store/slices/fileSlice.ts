export interface FileItem {

  id: string;

  name: string;

  content: string;
}

export interface FileSlice {

  files: FileItem[];

  addFile: (
    file: FileItem
  ) => void;

  updateFile: (
    id: string,
    content: string
  ) => void;
}

export const createFileSlice = (
  set: any
): FileSlice => ({

  files: [],

  addFile: (file) =>

    set((state: FileSlice) => ({

      files: [

        ...state.files,

        file
      ]
    })),

  updateFile: (
    id,
    content
  ) =>

    set((state: FileSlice) => ({

      files:
        state.files.map(file =>

          file.id === id

            ? {
                ...file,
                content
              }

            : file
        )
    }))
});