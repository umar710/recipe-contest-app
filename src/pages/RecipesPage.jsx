import React, { useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    mealType: [],
    dishType: [],
    attributes: [],
  });
  const [sortBy, setSortBy] = useState("newest");

  const filteredRecipes = recipes
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (recipe) =>
        (filters.mealType.length === 0 ||
          filters.mealType.includes(recipe.mealType)) &&
        (filters.dishType.length === 0 ||
          filters.dishType.includes(recipe.dishType)) &&
        (filters.attributes.length === 0 ||
          filters.attributes.every((attr) => recipe[attr]))
    )
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.uploadedOn) - new Date(a.uploadedOn);
      if (sortBy === "oldest")
        return new Date(a.uploadedOn) - new Date(b.uploadedOn);
      if (sortBy === "highest-rating") return b.avgRating - a.avgRating;
      if (sortBy === "lowest-rating") return a.avgRating - b.avgRating;
      return 0;
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Contest</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
