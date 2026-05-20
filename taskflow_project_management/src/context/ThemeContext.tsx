import {

  createContext,

  useContext,

  useState

} from "react";

interface ThemeContextType {

  theme: "light" | "dark";

  toggleTheme: () => void;
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

interface ThemeProviderProps {

  children: React.ReactNode;
}

export const ThemeProvider = ({
  children
}: ThemeProviderProps) => {

  const [theme, setTheme] = useState<
    "light" | "dark"
  >("light");

  const toggleTheme = () => {

    setTheme(current =>
      current === "light"
        ? "dark"
        : "light"
    );
  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
};

export const useTheme = () => {

  const context =
    useContext(ThemeContext);

  if (!context) {

    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
};