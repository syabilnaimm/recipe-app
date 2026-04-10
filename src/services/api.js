const API_KEY = import.meta.env.VITE_API_KEY;

export const searchRecipes = async (query) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
export const getRecipeDetails = async (id) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch details");
  }

  return res.json();
};