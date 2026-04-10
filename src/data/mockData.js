export const MOCK_RECIPES = [
  {
    id: 1,
    title: "Pasta Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop",
    summary: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    readyInMinutes: 20,
    servings: 4,
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
    summary: "Quick and healthy chicken stir fry with fresh vegetables and soy sauce.",
    readyInMinutes: 15,
    servings: 2,
  },
  
  {
    id: 4,
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
    summary: "Refreshing Mediterranean salad with olives, feta, and cucumbers.",
    readyInMinutes: 10,
    servings: 4,
  },
  {
    id: 5,
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    summary: "Traditional Mexican tacos with seasoned beef and fresh salsa.",
    readyInMinutes: 25,
    servings: 3,
  },
  {
    id: 6,
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop",
    summary: "Creamy Italian rice dish slow-cooked with earthy mushrooms.",
    readyInMinutes: 45,
    servings: 4,
  },
];

export const MOCK_DETAIL = {
  id: 1,
  title: "Classic Pasta Carbonara",
  image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1200&h=800&fit=crop",
  readyInMinutes: 20,
  servings: 4,
  healthScore: 75,
  nutrition: {
    nutrients: [{ name: "Calories", amount: 560 }],
  },
  extendedIngredients: [
    { id: 101, original: "400g spaghetti" },
    { id: 102, original: "150g guanciale or pancetta, cubed" },
    { id: 103, original: "4 large organic eggs" },
    { id: 104, original: "100g freshly grated Pecorino Romano" },
    { id: 105, original: "Freshly cracked black pepper" },
  ],
  instructions:
    "<ol><li>Bring a large pot of salted water to a boil and cook the spaghetti until al dente.</li><li>While the pasta is cooking, fry the guanciale in a large pan until crispy.</li><li>In a small bowl, whisk together the eggs and cheese.</li><li>Drain the pasta, reserving a cup of the cooking water. Toss the pasta in the pan with the guanciale.</li><li>Remove from heat and quickly stir in the egg mixture, adding reserved water as needed for creaminess.</li></ol>",
  summary:
    "This <b>Pasta Carbonara</b> is an authentic Roman masterpiece. By using the residual heat of the pasta to cook the eggs, you create a silky, golden sauce without ever using heavy cream.",
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: true,
};

const DEFAULT_DETAIL_META = {
  healthScore: 72,
  nutrition: {
    nutrients: [{ name: "Calories", amount: 420 }],
  },
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: true,
};

export const MOCK_DETAILS_BY_ID = {
  1: MOCK_DETAIL,
  2: {
    id: 2,
    title: "Chicken Stir Fry",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1200&h=800&fit=crop",
    readyInMinutes: 15,
    servings: 2,
    summary:
      "A quick stir fry with sliced chicken, bell peppers, broccoli, and a savory soy-ginger sauce.",
    extendedIngredients: [
      { id: 201, original: "300g chicken breast, thinly sliced" },
      { id: 202, original: "1 red bell pepper, sliced" },
      { id: 203, original: "1 cup broccoli florets" },
      { id: 204, original: "2 tbsp soy sauce" },
      { id: 205, original: "1 tsp grated ginger" },
    ],
    instructions:
      "<ol><li>Heat oil in a wok over high heat.</li><li>Stir fry chicken until lightly browned.</li><li>Add vegetables and cook for 3-4 minutes.</li><li>Stir in soy sauce and ginger, then toss to coat.</li><li>Serve hot over rice.</li></ol>",
    ...DEFAULT_DETAIL_META,
  },
  3: {
    id: 3,
    title: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=1200&h=800&fit=crop",
    readyInMinutes: 40,
    servings: 2,
    summary: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil leaves.",
    extendedIngredients: [
      { id: 301, original: "1 pizza dough ball" },
      { id: 302, original: "1/2 cup tomato sauce" },
      { id: 303, original: "150g fresh mozzarella" },
      { id: 304, original: "Fresh basil leaves" },
      { id: 305, original: "1 tbsp olive oil" },
    ],
    instructions:
      "<ol><li>Preheat oven to 250C.</li><li>Roll out dough and spread tomato sauce.</li><li>Add mozzarella and bake 10-12 minutes.</li><li>Top with basil and olive oil before serving.</li></ol>",
    ...DEFAULT_DETAIL_META,
    vegetarian: true,
  },
  4: {
    id: 4,
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=800&fit=crop",
    readyInMinutes: 10,
    servings: 4,
    summary: "Fresh salad with tomatoes, cucumber, olives, feta, and a lemon-oregano dressing.",
    extendedIngredients: [
      { id: 401, original: "2 tomatoes, chopped" },
      { id: 402, original: "1 cucumber, sliced" },
      { id: 403, original: "1/2 red onion, thinly sliced" },
      { id: 404, original: "100g feta cheese" },
      { id: 405, original: "Handful of olives" },
    ],
    instructions:
      "<ol><li>Combine vegetables and olives in a bowl.</li><li>Whisk olive oil, lemon juice, and oregano.</li><li>Toss salad with dressing and top with feta.</li></ol>",
    ...DEFAULT_DETAIL_META,
    vegetarian: true,
    glutenFree: true,
  },
  5: {
    id: 5,
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=800&fit=crop",
    readyInMinutes: 25,
    servings: 3,
    summary: "Seasoned ground beef served in warm tortillas with salsa and crunchy toppings.",
    extendedIngredients: [
      { id: 501, original: "300g ground beef" },
      { id: 502, original: "6 taco tortillas" },
      { id: 503, original: "2 tbsp taco seasoning" },
      { id: 504, original: "1 cup shredded lettuce" },
      { id: 505, original: "Salsa and lime wedges" },
    ],
    instructions:
      "<ol><li>Cook beef in a skillet and add seasoning.</li><li>Warm tortillas in a dry pan.</li><li>Fill with beef and toppings, then serve.</li></ol>",
    ...DEFAULT_DETAIL_META,
  },
  6: {
    id: 6,
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&h=800&fit=crop",
    readyInMinutes: 45,
    servings: 4,
    summary:
      "Creamy risotto with sauteed mushrooms, Parmesan, and a touch of white wine for depth.",
    extendedIngredients: [
      { id: 601, original: "1 cup arborio rice" },
      { id: 602, original: "250g mushrooms, sliced" },
      { id: 603, original: "1 small onion, diced" },
      { id: 604, original: "4 cups warm stock" },
      { id: 605, original: "1/3 cup grated Parmesan" },
    ],
    instructions:
      "<ol><li>Saute onion and mushrooms in olive oil.</li><li>Add rice and stir for 1 minute.</li><li>Add stock gradually, stirring until absorbed.</li><li>Finish with Parmesan and serve warm.</li></ol>",
    ...DEFAULT_DETAIL_META,
    vegetarian: true,
  },
};
