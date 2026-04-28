import "./App.css";
import TodoList from "./Components/TodoList";
function App() {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="main-app d-flex justify-content-center align-items-center ">
        <div className="TaskContainer">
          <h3>Today Tasks</h3>
          <p className="text-muted mb-2">{todayDate}</p>
          <hr />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
