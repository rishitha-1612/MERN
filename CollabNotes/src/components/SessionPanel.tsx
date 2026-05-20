import useSessionStore
from "../store/sessionStore";

const SessionPanel = () => {

  const {

    userId,

    role,

    setSession

  } = useSessionStore();

  return (

    <div>

      <h2>
        Session
      </h2>

      <p>
        User:
        {" "}
        {userId || "None"}
      </p>

      <p>
        Role:
        {" "}
        {role}
      </p>

      <button

        onClick={() =>

          setSession(

            "u1",

            "token123",

            Date.now()
          )
        }
      >

        Login

      </button>

    </div>
  );
};

export default
  SessionPanel;