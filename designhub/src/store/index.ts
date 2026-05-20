import { create } from "zustand";
import { createUserSlice } from "./slices/userSlice";
import type { UserSlice } from "./slices/userSlice";
import { createFileSlice } from "./slices/fileSlice";
import type { FileSlice } from "./slices/fileSlice";
import { createCommentSlice } from "./slices/commentSlice";
import type { CommentSlice } from "./slices/commentSlice";
import { createNotificationSlice } from "./slices/notificationSlice";
import type { NotificationSlice } from "./slices/notificationSlice";

type DesignHubStore =

  UserSlice
  & FileSlice
  & CommentSlice
  & NotificationSlice;

export const useDesignHubStore =

  create<DesignHubStore>()(

    (set, get) => ({

      ...createUserSlice(
        set
      ),

      ...createFileSlice(
        set
      ),

      ...createCommentSlice(
        set,
        get
      ),

      ...createNotificationSlice(
        set
      )
    })
  );
