import { useTheme }
from "../context/ThemeContext";

const ThemeSwitcher = () => {

  const {

    theme,

    toggleTheme

  } = useTheme();

  return (

    <button
      onClick={toggleTheme}
    >

      Switch to
      {" "}
      {theme === "light"
        ? "Dark"
        : "Light"}
      {" "}
      Mode

    </button>
  );
};

export default ThemeSwitcher;