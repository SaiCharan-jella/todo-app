import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  function handleAdd() {
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      return;
    }
    addTodo(trimmedTask);
    setTask("");
  }
  return (
    <>
      <div className="AddInput d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Enter Today Tasks..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="floatingInput"></label>
        <button className="btn btn-secondary" onClick={handleAdd}>
          +
        </button>
      </div>
    </>
  );
};

export default AddTodo;
