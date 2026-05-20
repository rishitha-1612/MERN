export interface Notification {

  id: string;

  message: string;

  read: boolean;
}

export interface NotificationSlice {

  notifications: Notification[];

  addNotification: (
    notification: Notification
  ) => void;

  markAsRead: (
    id: string
  ) => void;

  clearNotifications: () => void;
}

export const createNotificationSlice = (
  set: any
): NotificationSlice => ({

  notifications: [],

  addNotification: (
    notification
  ) =>

    set(
      (
        state: NotificationSlice
      ) => ({

        notifications: [

          ...state.notifications,

          notification
        ]
      })
    ),

  markAsRead: (id) =>

    set(
      (
        state: NotificationSlice
      ) => ({

        notifications:
          state.notifications.map(n =>

            n.id === id

              ? {
                  ...n,
                  read: true
                }

              : n
          )
      })
    ),

  clearNotifications: () =>

    set({
      notifications: []
    })
});