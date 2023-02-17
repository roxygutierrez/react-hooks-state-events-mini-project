import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {
  const categoriesButton = categories.map((category) => {
    return (
      <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => onSelectedCategory(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButton}
    </div>
  );
}

export default CategoryFilter;
