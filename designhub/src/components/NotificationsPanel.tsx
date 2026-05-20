import { useDesignHubStore } from "../store";

const NotificationsPanel = () => {

  const notifications =
    useDesignHubStore(
      s => s.notifications
    );

  const addNotification =
    useDesignHubStore(
      s => s.addNotification
    );

  const markAsRead =
    useDesignHubStore(
      s => s.markAsRead
    );

  const clearNotifications =
    useDesignHubStore(
      s => s.clearNotifications
    );

  return (

    <div>

      <h2>
        Notifications
      </h2>

      <button

        onClick={() =>

          addNotification({

            id:
              crypto.randomUUID(),

            message:
              "New comment added!",

            read: false
          })
        }
      >

        Add Notification

      </button>

      <button
        onClick={
          clearNotifications
        }
      >

        Clear Notifications

      </button>

      <ul>

        {notifications.map(n => (

          <li key={n.id}>

            {n.message}

            {" "}

            {!n.read && (

              <button

                onClick={() =>
                  markAsRead(
                    n.id
                  )
                }
              >

                Mark Read

              </button>
            )}

          </li>
        ))}

      </ul>

    </div>
  );
};

export default NotificationsPanel;
