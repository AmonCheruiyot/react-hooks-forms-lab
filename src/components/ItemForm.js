// Import React and useState hooks from React library
import React, { useState } from "react";
// Importing a unique ID generator from the "uuid" library
import { v4 as uuid } from "uuid";

// Define a functional component called ItemForm, taking a prop onItemFormSubmit
function ItemForm({ onItemFormSubmit }) {
  // State variables for item name and category, initialized using useState hook
  const [name, setName] = useState(""); // Store item name
  const [category, setCategory] = useState("Produce"); // Store item category

  // Function to update 'name' state when input changes
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Function to update 'category' state when dropdown selection changes
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Call onItemFormSubmit with new item data (including generated unique ID)
    onItemFormSubmit({
      id: uuid(), // Generate unique ID
      name, // Item name
      category, // Item category
    });
  }

  // Render the form component
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* Input field for item name */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange} // Call handleNameChange on input change
        />
      </label>

      {/* Dropdown menu for item category selection */}
      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange} // Call handleCategoryChange on selection change
        >
          {/* Options for different item categories */}
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      {/* Button to submit the form */}
      <button type="submit">Add to List</button>
    </form>
  );
}

// Export the ItemForm component as default
export default ItemForm;
