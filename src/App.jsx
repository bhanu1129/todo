import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import TodoRow from "./components/TodoRow";

function App() {
  const [tasks, setTasks] = useState(["Hello World"]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);  
  };

  return (
    <main className="flex justify-center items-center h-screen w-screen p-4">
      <div className="bg-white shadow-md rounded-md">
        <section className="p-5">
          <h1 className="text-3xl mb-6">Todo</h1>
          <div className="flex flex-col gap-6 mb-4">
            {tasks.map((task, index) => (
              <TodoRow key={index} deleteTask={() => deleteTask(index)} >
                <Checkbox text={task} />
              </TodoRow>
            ))}
          </div>
        </section>

        <hr className="border border-[#e4e4e4] mt-4" />

        <section className="flex flex-col sm:flex-row gap-2 p-5">
          <input
            value={taskInput}
            placeholder="Add task here..."
            className="bg-gray-200 rounded-lg text-xl p-4 placeholder:font-light"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <Button text="Add" variant="" onClick={addTask} />
        </section>
      </div>
    </main>
  );
}

export default App;
