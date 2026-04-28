import React from "react";

const TodoItems = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div className="TodoItems">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <div className="TodoList-buttons ">
              {!todo.completed && (
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => completeTodo(todo.id)}
                >
                  Complete
                </button>
              )}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
