import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value) // Remove the value if it already exists
        : [...prevFilters[filterType], value], // Add the value if it doesn't exist
    }));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <button
        onClick={() =>
          setFilters({ mealType: [], dishType: [], attributes: [] })
        }
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Clear All Filters
      </button>

      {/* Meal Type Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Meal Type</h4>
        {["Breakfast", "Lunch", "Dinner", "Dessert"].map((meal) => (
          <label key={meal} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.mealType.includes(meal)}
              onChange={() => handleFilterChange("mealType", meal)}
              className="form-checkbox"
            />
            <span>{meal}</span>
          </label>
        ))}
      </div>

      {/* Dish Type Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Dish Type</h4>
        {["Curry", "Pizza", "Seafood", "Soup", "Mexican", "Smoothie"].map(
          (dish) => (
            <label key={dish} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.dishType.includes(dish)}
                onChange={() => handleFilterChange("dishType", dish)}
                className="form-checkbox"
              />
              <span>{dish}</span>
            </label>
          )
        )}
      </div>

      {/* Attributes Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Attributes</h4>
        {["Contest Winner", "Featured", "Test Kitchen-Approved"].map((attr) => (
          <label key={attr} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.attributes.includes(attr)}
              onChange={() => handleFilterChange("attributes", attr)}
              className="form-checkbox"
            />
            <span>{attr}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
