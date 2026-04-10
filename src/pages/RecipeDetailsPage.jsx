import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/api";
import { MOCK_DETAILS_BY_ID } from "../data/mockData";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);

      const mockDetails = MOCK_DETAILS_BY_ID[id];
      if (mockDetails) {
        setDetails(mockDetails);
        setLoading(false);
        return;
      }

      try {
        const data = await getRecipeDetails(id);
        setDetails(data);
      } catch (err) {
        console.error(err);
        setError("Could not load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="p-6">Loading recipe...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!details) return <div className="p-6">No details available.</div>;

  return (
    <main className="px-4 py-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="text-blue-700 hover:text-blue-900 underline">
          Back to search
        </Link>
        <span className="text-sm text-slate-500">Recipe ID: {id}</span>
      </div>

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={details.image} alt={details.title} className="h-72 w-full object-cover sm:h-96" />

        <section className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">{details.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-sm md:text-base">
            <span className="px-3 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold">
              Ready in {details.readyInMinutes} min
            </span>
            <span className="px-3 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold">
              Servings {details.servings}
            </span>
            <span className="px-3 py-2 rounded-xl bg-pink-50 text-pink-700 font-semibold">
              Calories:{" "}
              {Math.round(
                (details.nutrition?.nutrients?.find((n) => /calories/i.test(n.name))?.amount ?? 0) * 10,
              ) / 10}
            </span>
            {!!details.healthScore && (
              <span className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 font-semibold">
                Health Score: {details.healthScore}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <aside className="col-span-1 p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h2 className="text-lg font-bold mb-2 text-blue-900">
                Ingredients ({details.extendedIngredients?.length ?? 0})
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-slate-700 text-left">
                {details.extendedIngredients?.map((item) => (
                  <li key={item.id || item.name}>{item.original}</li>
                )) || <li>Ingredient details unavailable.</li>}
              </ul>
            </aside>

            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-3 text-blue-900 text-left">Instructions</h2>
              {details.instructions ? (
                <div className="prose prose-blue prose-sm md:prose-base max-w-none text-left">
                  <div dangerouslySetInnerHTML={{ __html: details.instructions }} />
                </div>
              ) : (
                <p className="text-slate-600">No instructions available.</p>
              )}
            </div>
          </div>

          {details.summary && (
            <section className="mb-8 p-4 rounded-xl border border-blue-100 bg-blue-50">
              <h2 className="text-lg font-bold mb-2">What this dish is</h2>
              <p
                className="text-sm md:text-base text-slate-700"
                dangerouslySetInnerHTML={{ __html: details.summary }}
              />
            </section>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{details.vegetarian ? " Vegetarian" : ""}</span>
            <span>{details.vegan ? " Vegan" : ""}</span>
            <span>{details.glutenFree ? " Gluten Free" : ""}</span>
            <span>{details.dairyFree ? " Dairy Free" : ""}</span>
            <span>{details.veryHealthy ? " Very Healthy" : ""}</span>
          </div>
        </section>
      </article>
    </main>
  );
}
