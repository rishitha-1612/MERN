import usePreferencesStore
from "../store/preferenceStore";

const PreferencesPanel = () => {

  const theme =
    usePreferencesStore(
      s => s.theme
    );

  const setTheme =
    usePreferencesStore(
      s => s.setTheme
    );

  return (

    <div>

      <h2>
        Theme:
        {" "}
        {theme}
      </h2>

      <button

        onClick={() =>

          setTheme(

            theme === "light"

              ? "dark"

              : "light"
          )
        }
      >

        Toggle Theme

      </button>

    </div>
  );
};

export default
  PreferencesPanel;