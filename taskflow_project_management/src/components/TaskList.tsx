import useTaskStore
from "../store/taskStore";

const TaskList = () => {

  const tasks =
    useTaskStore(
      state => state.tasks
    );

  const toggleTask =
    useTaskStore(
      state => state.toggleTask
    );

  const clearTasks =
    useTaskStore(
      state => state.clearTasks
    );

  return (

    <div>

      <h2>
        Task List
      </h2>

      {tasks.length === 0 && (
        <p>No Tasks Available</p>
      )}

      {tasks.map(task => (

        <div
          key={task.id}
          className="task"
        >

          <label>

            <input

              type="checkbox"

              checked={
                task.completed
              }

              onChange={() =>
                toggleTask(task.id)
              }
            />

            <span
              style={{
                textDecoration:
                  task.completed
                    ? "line-through"
                    : "none"
              }}
            >

              {task.title}

            </span>

          </label>

        </div>

      ))}

      <button
        onClick={clearTasks}
      >

        Clear Tasks

      </button>

    </div>
  );
};

export default TaskList;