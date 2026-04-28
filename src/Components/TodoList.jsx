import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <>
      <section>
        <AddTodo addTodo={addTodo} />
        <TodoItems
          todos={activeTodos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
        {completedTodos.length > 0 && (
          <div className="completed-section  mt-3 ">
            <h5>Completed Tasks</h5>
            <hr />
            <TodoItems
              todos={completedTodos}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default TodoList;
