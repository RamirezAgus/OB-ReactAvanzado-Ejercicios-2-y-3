import { useList } from "../hooks/useList";
import { useState } from "react";

const TaskList = () => {
  const tasks = useList([]);

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(task);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label> Task: </label>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add Task"
        />
        <button type="submit">Create Task</button>
      </form>
      <button type="button" onClick={() => tasks.sort()} style={{ marginBottom: "20px" }}>
        sort up
      </button>
      <button type="button" onClick={() => tasks.sortdesc()} style={{ marginBottom: "20px" }}>
        sort down
      </button>
      {tasks.isEmpty() ? (
        <p>Task is Empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              {task} {""}
              <button type="button" onClick={() => tasks.remove(index)}>
                🗑
              </button>
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={() => tasks.clear()}>🗑 All</button>
    </div>
  );
};

export default TaskList;
