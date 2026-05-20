export interface Comment {

  id: string;

  fileId: string;

  author: string;

  text: string;
}

export interface CommentSlice {

  comments: Comment[];

  addComment: (
    comment: Comment
  ) => void;

  getCommentsByFile: (
    fileId: string
  ) => Comment[];
}

export const createCommentSlice = (
  set: any,
  get: any
): CommentSlice => ({

  comments: [],

  addComment: (comment) =>

    set((state: CommentSlice) => ({

      comments: [

        ...state.comments,

        comment
      ]
    })),

  getCommentsByFile: (fileId) =>

    get()
      .comments
      .filter(
        (c: Comment) =>
          c.fileId === fileId
      )
});