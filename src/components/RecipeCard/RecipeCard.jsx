import React from "react";

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={recipe.imgUrl}
      alt={recipe.name}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold">{recipe.name}</h3>
      <p className="text-gray-600">By {recipe.chef}</p>
      <p className="text-gray-600">{recipe.description}</p>
      <p className="text-gray-600">
        Rating: {recipe.avgRating} ({recipe.totalRatings} reviews)
      </p>
    </div>
  </div>
);

export default RecipeCard;
