import { useDesignHubStore } from "../store";

const UserProfile = () => {

  const user =
    useDesignHubStore(
      s => s.user
    );

  const setUser =
    useDesignHubStore(
      s => s.setUser
    );

  const clearUser =
    useDesignHubStore(
      s => s.clearUser
    );

  if (!user) {

    return (

      <button

        onClick={() =>

          setUser({

            id: "u1",

            name: "Alex"
          })
        }
      >

        Login

      </button>
    );
  }

  return (

    <div>

      <h2>
        Welcome,
        {" "}
        {user.name}
      </h2>

      <button
        onClick={clearUser}
      >

        Logout

      </button>

    </div>
  );
};

export default UserProfile;
