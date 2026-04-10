import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { searchRecipes } from "../services/api";
import { MOCK_RECIPES } from "../data/mockData";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    setError(null);
    try {
      setLoading(true);
      const data = await searchRecipes(query);
      setRecipes(data.results || []);
      if (!data.results?.length) {
        setError("No recipes found. Try a broader search term.");
      }
    } catch (err) {
      console.error(err);
      setError("Search failed; check API key/quota.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate a 1.5s delayed load to help you debug the layout shift
    const timer = setTimeout(() => {
      setRecipes(MOCK_RECIPES);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <header
        id="top"
        className="mb-8 rounded-[2rem] bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">Smart Recipe Finder</h1>
        <p className="text-slate-600 max-w-2xl">
          Find tasty meals with ingredient-based search, then follow clean step-by-step recipes on a
          dedicated page.
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-blue-700">Loading recipes...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <section id="recipes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden bg-white cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <img className="h-48 w-full object-cover" src={recipe.image} alt={recipe.title} />
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{recipe.title}</h2>
              <p className="text-sm text-slate-600 line-clamp-2">
                {recipe.summary
                  ? recipe.summary.replace(/<[^>]*>/g, "")
                  : "Recipe details available on details page."}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>Ready: {recipe.readyInMinutes ?? "?"} mins</span>
                <span>Servings: {recipe.servings ?? "?"}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!loading && !error && recipes.length === 0 && (
        <p className="text-slate-500 mt-10">Start by entering ingredients above to discover recipes.</p>
      )}
    </main>
  );
}
