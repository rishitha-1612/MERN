import { useState }
from "react";

import useTaskStore
from "../store/taskStore";

const TaskForm = () => {

  const [title, setTitle] =
    useState("");

  const addTask =
    useTaskStore(
      state => state.addTask
    );

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);

    setTitle("");
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="form"
    >

      <input

        type="text"

        placeholder="Enter Task"

        value={title}

        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
};

export default TaskForm;