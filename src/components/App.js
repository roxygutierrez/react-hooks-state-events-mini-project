import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [category, setCategory] = useState("All");

  const handleDelete = (event) => {
    const filteredTasks = tasks.filter((task) => {
      return task.text !== event.target.value;
    });
    setTasks(filteredTasks);
  };

  const filteredTasks = tasks.filter((singleTask) => {
    if (singleTask.category === category) {
      return true;
    } else if (category === "All") {
      return true;
    } else return false;
  });

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
