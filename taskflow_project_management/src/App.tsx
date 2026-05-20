import "./App.css";

import {

  ThemeProvider,

  useTheme

} from "./context/ThemeContext";

import ThemeSwitcher
from "./components/ThemeSwitcher";

import TaskForm
from "./components/TaskForm";

import TaskList
from "./components/TaskList";

const Dashboard = () => {

  const { theme } =
    useTheme();

  return (

    <div
      className={
        theme === "light"
          ? "light"
          : "dark"
      }
    >

      <h1>
        TaskFlow Project Management
      </h1>

      <ThemeSwitcher />

      <TaskForm />

      <TaskList />

    </div>
  );
};

function App() {

  return (

    <ThemeProvider>

      <Dashboard />

    </ThemeProvider>
  );
}

export default App;