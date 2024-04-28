// Import React library
import React from "react";

// Define Filter component
function Filter({ search, onSearchChange, onCategoryChange }) {
  // Function to handle search input change
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  // Render the Filter component
  return (
    <div className="Filter">
      {/* Input field for search */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange} // Call handleSearchChange on input change
      />
      {/* Dropdown menu for category filter */}
      <select name="filter" onChange={onCategoryChange}>
        {/* Options for different categories */}
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

// Export the Filter component as default
export default Filter;
