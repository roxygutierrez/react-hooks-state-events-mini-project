import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  //filter categories != All
  const filteredCategories = categories.filter((category) => {
    return category !== "All";
  });

  //map filtered categories and render <option>
  const categoryOptions = filteredCategories.map((category) => {
    return <option key={category}>{category}</option>;
  });

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: text, category: category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
